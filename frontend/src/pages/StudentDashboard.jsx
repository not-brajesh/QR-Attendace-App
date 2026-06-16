const StudentDashboard = () => {
  const attendanceData = [
    {
      subject: "Artificial Intelligence",
      totalClasses: 50,
      attended: 45,
      attendance: "90%",
    },
    {
      subject: "Data Structures",
      totalClasses: 50,
      attended: 43,
      attendance: "86%",
    },
    {
      subject: "Database Management System",
      totalClasses: 48,
      attended: 41,
      attendance: "85%",
    },
    {
      subject: "Operating Systems",
      totalClasses: 46,
      attended: 39,
      attendance: "84%",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Sidebar */}

      <div
        style={{
          width: "250px",
          background: "#0f172a",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>Student Portal</h2>

        <hr
          style={{
            margin: "20px 0",
            borderColor: "#334155",
          }}
        />

        <p>Dashboard</p>
        <p>My Attendance</p>
        <p>My QR Code</p>
        <p>Punch In / Out</p>
        <p>Syllabus Progress</p>
        <p>Profile</p>
      </div>

      {/* Main Content */}

      <div
        style={{
          flex: 1,
          padding: "30px",
          background: "#f1f5f9",
        }}
      >
        <h1>Student Dashboard</h1>

        {/* Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>Attendance %</h3>
            <h1>88%</h1>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>Present Days</h3>
            <h1>112</h1>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>Absent Days</h3>
            <h1>15</h1>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>Syllabus Progress</h3>
            <h1>68%</h1>
          </div>
        </div>

        {/* Attendance Table */}

        <div
          style={{
            marginTop: "30px",
            background: "white",
            borderRadius: "12px",
            padding: "20px",
            overflowX: "auto",
          }}
        >
          <h2>My Attendance Summary</h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#e5e7eb",
                }}
              >
                <th style={{ padding: "14px", textAlign: "left" }}>
                  Subject
                </th>

                <th style={{ padding: "14px", textAlign: "center" }}>
                  Total Classes
                </th>

                <th style={{ padding: "14px", textAlign: "center" }}>
                  Attended
                </th>

                <th style={{ padding: "14px", textAlign: "center" }}>
                  Attendance %
                </th>
              </tr>
            </thead>

            <tbody>
              {attendanceData.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <td style={{ padding: "14px" }}>
                    {item.subject}
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      textAlign: "center",
                    }}
                  >
                    {item.totalClasses}
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      textAlign: "center",
                    }}
                  >
                    {item.attended}
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      textAlign: "center",
                      color: "#16a34a",
                      fontWeight: "bold",
                    }}
                  >
                    {item.attendance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;