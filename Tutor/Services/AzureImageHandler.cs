using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System;
using System.Threading.Tasks;

namespace Tutor.Services
{
    public class AzureImageHandler : IImageHandler
    {
        private readonly string accessKey;
        private readonly string containerName = "images"; // add in settings in future

        public AzureImageHandler(IConfiguration configuration)
        {
            accessKey = configuration.GetConnectionString("ContainerAccessKey");
        }

        public async Task<string> SaveAsync(IFormFile img)
        {
            CloudStorageAccount cloudStorageAccount = CloudStorageAccount.Parse(accessKey);
            CloudBlobClient cloudBlobClient = cloudStorageAccount.CreateCloudBlobClient();
            CloudBlobContainer cloudBlobContainer = cloudBlobClient.GetContainerReference(containerName);
            string fileName = GenerateFileName(img.FileName);

            if (await cloudBlobContainer.CreateIfNotExistsAsync())
            {
                await cloudBlobContainer.SetPermissionsAsync(new BlobContainerPermissions { PublicAccess = BlobContainerPublicAccessType.Blob });
            }

            CloudBlockBlob cloudBlockBlob = cloudBlobContainer.GetBlockBlobReference(fileName);
            await cloudBlockBlob.UploadFromStreamAsync(img.OpenReadStream());

            return cloudBlockBlob.Uri.AbsoluteUri;
        }

        private string GenerateFileName(string fileName)
        {
            string strFileName = string.Empty;
            string[] strName = fileName.Split('.');
            strFileName = DateTime.Now.ToUniversalTime().ToString("yyyy-MM-dd") + "/" + DateTime.Now.ToUniversalTime().ToString("yyyyMMdd\\THHmmssfff") + "." + strName[strName.Length - 1];
            return strFileName;
        }
    }
}
