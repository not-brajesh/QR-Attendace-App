const AdminDashboard = () => {
  const reportData = [
    {
      name: "Brajesh Kumar",
      roll: "AIDS001",
      status: "Present",
      punchIn: "09:00 AM",
      punchOut: "04:00 PM",
    },
    {
      name: "Suhani Sharma",
      roll: "AIDS002",
      status: "Present",
      punchIn: "09:05 AM",
      punchOut: "04:02 PM",
    },
    {
      name: "Rahul Kumar",
      roll: "AIDS003",
      status: "Absent",
      punchIn: "-",
      punchOut: "-",
    },
    {
      name: "Anvesha Singh",
      roll: "AIDS004",
      status: "Present",
      punchIn: "08:58 AM",
      punchOut: "04:10 PM",
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
        <h2>QR Portal</h2>

        <hr
          style={{
            margin: "20px 0",
            borderColor: "#334155",
          }}
        />

        <p>Dashboard</p>
        <p>QR Attendance</p>
        <p>Attendance Reports</p>
        <p>Absent Students</p>
        <p>Syllabus Progress</p>
        <p>Students</p>
        <p>Faculty</p>
        <p>Analytics</p>
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
        <h1>Admin Dashboard</h1>

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
            <h3>Total Students</h3>
            <h1>350</h1>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>Present Today</h3>
            <h1>312</h1>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <h3>Absent Today</h3>
            <h1>38</h1>
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

        {/* Daily Report */}

        <div
          style={{
            marginTop: "30px",
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            overflowX: "auto",
          }}
        >
          <h2>Daily Student Report</h2>

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
                <th style={{ padding: "14px" }}>Name</th>
                <th style={{ padding: "14px" }}>Roll</th>
                <th style={{ padding: "14px" }}>Status</th>
                <th style={{ padding: "14px" }}>Punch In</th>
                <th style={{ padding: "14px" }}>Punch Out</th>
              </tr>
            </thead>

            <tbody>
              {reportData.map((student, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <td style={{ padding: "14px" }}>
                    {student.name}
                  </td>

                  <td style={{ padding: "14px" }}>
                    {student.roll}
                  </td>

                  <td
                    style={{
                      padding: "14px",
                      color:
                        student.status === "Present"
                          ? "#16a34a"
                          : "#dc2626",
                      fontWeight: "bold",
                    }}
                  >
                    {student.status}
                  </td>

                  <td style={{ padding: "14px" }}>
                    {student.punchIn}
                  </td>

                  <td style={{ padding: "14px" }}>
                    {student.punchOut}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Analytics */}

        <div
          style={{
            marginTop: "30px",
            background: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h2>Today's Summary</h2>

          <ul>
            <li>Total Students : 350</li>
            <li>Present Students : 312</li>
            <li>Absent Students : 38</li>
            <li>Attendance Percentage : 89%</li>
            <li>Syllabus Completed : 68%</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;