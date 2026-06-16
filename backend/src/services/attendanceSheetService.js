import xlsx from "xlsx";

export const generateAttendanceMatrixExcel = (
  students,
  attendance,
  department = null
) => {
  const dateSet = new Set();

  attendance.forEach((item) => {
    const date = new Date(item.date)
      .toISOString()
      .split("T")[0];

    dateSet.add(date);
  });

  const dates = Array.from(dateSet).sort();

  const rows = students.map((student) => {
    const row = {
      "Roll Number": student.rollNumber,
      Name: student.name,
      Department: student.department,
      Batch: student.batch,
    };

    let presentCount = 0;

    dates.forEach((date) => {
      row[date] = "A";
    });

    attendance.forEach((record) => {
      if (
        record.student &&
        record.student.toString() ===
          student._id.toString()
      ) {
        const date = new Date(record.date)
          .toISOString()
          .split("T")[0];

        row[date] = "P";
      }
    });

    dates.forEach((date) => {
      if (row[date] === "P") {
        presentCount++;
      }
    });

    const totalLectures = dates.length;

    const absentCount =
      totalLectures - presentCount;

    const attendancePercentage =
      totalLectures === 0
        ? 0
        : (
            (presentCount / totalLectures) *
            100
          ).toFixed(2);

    row["Total Present"] = presentCount;
    row["Total Absent"] = absentCount;
    row["Attendance %"] =
      attendancePercentage;

    row["Alert"] =
      attendancePercentage < 75
        ? "LOW ATTENDANCE"
        : "OK";

    return row;
  });

  const worksheet =
    xlsx.utils.json_to_sheet(rows);

  const workbook = xlsx.utils.book_new();

  xlsx.utils.book_append_sheet(
    workbook,
    worksheet,
    "Attendance Matrix"
  );

  const fileName = department
    ? `exports/attendance-${department}-${Date.now()}.xlsx`
    : `exports/attendance-master-${Date.now()}.xlsx`;

  xlsx.writeFile(workbook, fileName);

  return fileName;
};