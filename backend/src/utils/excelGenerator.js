import xlsx from "xlsx";

export const generateAttendanceExcel = (attendanceData) => {
  const worksheet = xlsx.utils.json_to_sheet(attendanceData);

  const workbook = xlsx.utils.book_new();

  xlsx.utils.book_append_sheet(
    workbook,
    worksheet,
    "Attendance Report"
  );

  const filePath = `exports/attendance-report-${Date.now()}.xlsx`;

  xlsx.writeFile(workbook, filePath);

  return filePath;
};