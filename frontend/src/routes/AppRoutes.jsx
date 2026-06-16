import { BrowserRouter, Routes, Route } from "react-router-dom";

import QRCodePage from "../pages/QRCodePage";
import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import FacultyDashboard from "../pages/FacultyDashboard";
import StudentDashboard from "../pages/StudentDashboard";
import AttendancePage from "../pages/AttendancePage";
import ReportsPage from "../pages/ReportsPage";
import SyllabusPage from "../pages/SyllabusPage";
import StudentsPage from "../pages/StudentsPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/qr" element={<QRCodePage />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/faculty" element={<FacultyDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />

        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/syllabus" element={<SyllabusPage />} />
        <Route path="/students" element={<StudentsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;