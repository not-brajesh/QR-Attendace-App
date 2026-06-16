const FacultyDashboard = () => {
  const attendanceData = [
    {
      name: "Brajesh Kumar",
      roll: "AIDS001",
      subject: "Artificial Intelligence",
      status: "Present",
    },
    {
      name: "Anvesha Singh",
      roll: "AIDS002",
      subject: "Data Structures",
      status: "Present",
    },
    {
      name: "Rahul Kumar",
      roll: "AIDS003",
      subject: "Database Management",
      status: "Absent",
    },
    {
      name: "Suhani Sharma",
      roll: "AIDS004",
      subject: "Operating Systems",
      status: "Present",
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
        <h2>Faculty Portal</h2>

        <hr
          style={{
            margin: "20px 0",
            borderColor: "#334155",
          }}
        />

        <p>Dashboard</p>
        <p>Mark Attendance</p>
        <p>QR Attendance</p>
        <p>Syllabus Update</p>
        <p>Daily Report</p>
        <p>Absent Students</p>
        <p>Students</p>
        <p>Settings</p>
      </div>

      {/* Main */}

      <div
        style={{
          flex: 1,
          padding: "30px",
          background: "#f1f5f9",
        }}
      >
        <h1>Faculty Dashboard</h1>

        {/* Stats Cards */}

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
            <h3>Today's Lectures</h3>
            <h1>4</h1>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>Attendance Marked</h3>
            <h1>312</h1>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>Absent Students</h3>
            <h1>38</h1>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>Syllabus Completed</h3>
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
          <h2>Today's Attendance Report</h2>

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
                  Student Name
                </th>

                <th style={{ padding: "14px", textAlign: "center" }}>
                  Roll Number
                </th>

                <th style={{ padding: "14px", textAlign: "center" }}>
                  Subject
                </th>

                <th style={{ padding: "14px", textAlign: "center" }}>
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {attendanceData.map((student, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <td style={{ padding: "14px" }}>
                    {student.name}
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      textAlign: "center",
                    }}
                  >
                    {student.roll}
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      textAlign: "center",
                    }}
                  >
                    {student.subject}
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      textAlign: "center",
                      color:
                        student.status === "Present"
                          ? "#16a34a"
                          : "#dc2626",
                      fontWeight: "bold",
                    }}
                  >
                    {student.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Syllabus Progress */}

        <div
          style={{
            marginTop: "30px",
            background: "white",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <h2>Syllabus Progress</h2>

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
                  Progress
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={{ padding: "14px" }}>
                  Artificial Intelligence
                </td>

                <td
                  style={{
                    padding: "14px",
                    textAlign: "center",
                  }}
                >
                  68%
                </td>
              </tr>

              <tr>
                <td style={{ padding: "14px" }}>
                  Data Structures
                </td>

                <td
                  style={{
                    padding: "14px",
                    textAlign: "center",
                  }}
                >
                  72%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;