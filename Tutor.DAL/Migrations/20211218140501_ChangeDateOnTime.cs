using Microsoft.EntityFrameworkCore.Migrations;

namespace Tutor.DAL.Migrations
{
    public partial class ChangeDateOnTime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StartDate",
                schema: "dbo",
                table: "AnnouncementDates",
                newName: "StarTime");

            migrationBuilder.RenameColumn(
                name: "EndDate",
                schema: "dbo",
                table: "AnnouncementDates",
                newName: "EndTime");

            migrationBuilder.RenameColumn(
                name: "DayOfWeek",
                schema: "dbo",
                table: "AnnouncementDates",
                newName: "Day");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "StarTime",
                schema: "dbo",
                table: "AnnouncementDates",
                newName: "StartDate");

            migrationBuilder.RenameColumn(
                name: "EndTime",
                schema: "dbo",
                table: "AnnouncementDates",
                newName: "EndDate");

            migrationBuilder.RenameColumn(
                name: "Day",
                schema: "dbo",
                table: "AnnouncementDates",
                newName: "DayOfWeek");
        }
    }
}
