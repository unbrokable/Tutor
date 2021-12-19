using Microsoft.EntityFrameworkCore.Migrations;

namespace Tutor.DAL.Migrations
{
    public partial class AnnounecementStructureChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Announcements_Users_UserID",
                schema: "dbo",
                table: "Announcements");

            migrationBuilder.DropColumn(
                name: "Description",
                schema: "dbo",
                table: "Subjects");

            migrationBuilder.DropColumn(
                name: "Price",
                schema: "dbo",
                table: "Subjects");

            migrationBuilder.RenameColumn(
                name: "UserID",
                schema: "dbo",
                table: "Announcements",
                newName: "UserId");

            migrationBuilder.RenameIndex(
                name: "IX_Announcements_UserID",
                schema: "dbo",
                table: "Announcements",
                newName: "IX_Announcements_UserId");

            migrationBuilder.AddColumn<string>(
                name: "Location",
                schema: "dbo",
                table: "Announcements",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "Price",
                schema: "dbo",
                table: "Announcements",
                type: "decimal(18,2)",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.InsertData(
                schema: "dbo",
                table: "Subjects",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "Math" });

            migrationBuilder.InsertData(
                schema: "dbo",
                table: "Subjects",
                columns: new[] { "Id", "Name" },
                values: new object[] { 2, "Literature" });

            migrationBuilder.InsertData(
                schema: "dbo",
                table: "Subjects",
                columns: new[] { "Id", "Name" },
                values: new object[] { 3, "ZNO" });

            migrationBuilder.AddForeignKey(
                name: "FK_Announcements_Users_UserId",
                schema: "dbo",
                table: "Announcements",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Announcements_Users_UserId",
                schema: "dbo",
                table: "Announcements");

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "Subjects",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "Subjects",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                schema: "dbo",
                table: "Subjects",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DropColumn(
                name: "Location",
                schema: "dbo",
                table: "Announcements");

            migrationBuilder.DropColumn(
                name: "Price",
                schema: "dbo",
                table: "Announcements");

            migrationBuilder.RenameColumn(
                name: "UserId",
                schema: "dbo",
                table: "Announcements",
                newName: "UserID");

            migrationBuilder.RenameIndex(
                name: "IX_Announcements_UserId",
                schema: "dbo",
                table: "Announcements",
                newName: "IX_Announcements_UserID");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                schema: "dbo",
                table: "Subjects",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<double>(
                name: "Price",
                schema: "dbo",
                table: "Subjects",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddForeignKey(
                name: "FK_Announcements_Users_UserID",
                schema: "dbo",
                table: "Announcements",
                column: "UserID",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
