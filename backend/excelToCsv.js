import xlsx from "xlsx";
import fs from "fs";

const workbook = xlsx.readFile(
  "../data/Master_Students.xlsx"
);

const sheet =
  workbook.Sheets[workbook.SheetNames[0]];

const csvData =
  xlsx.utils.sheet_to_csv(sheet);

fs.writeFileSync(
  "../data/Master_Students.csv",
  csvData
);

console.log(
  "✅ Master_Students.csv Created"
);