const ReportsPage = () => {
  return (
    <div
      style={{
        padding: "30px",
        background: "#f3f4f6",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <h1>Attendance Reports</h1>

      {/* Stats */}

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
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Total Students</h3>
          <h1>350</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Present</h3>
          <h1 style={{ color: "green" }}>312</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Absent</h3>
          <h1 style={{ color: "red" }}>38</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Average Attendance</h3>
          <h1>89%</h1>
        </div>
      </div>

      {/* Day Wise Report */}

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Day Wise Student Report</h2>

        <table
          style={{
            width: "100%",
            marginTop: "20px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ background: "#f3f4f6" }}>
              <th style={{ padding: "12px", textAlign: "center" }}>Name</th>
              <th style={{ padding: "12px", textAlign: "center" }}>Roll</th>
              <th style={{ padding: "12px", textAlign: "center" }}>Batch</th>
              <th style={{ padding: "12px", textAlign: "center" }}>
                Punch In
              </th>
              <th style={{ padding: "12px", textAlign: "center" }}>
                Punch Out
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: "12px", textAlign: "center" }}>
                Brajesh Kumar
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>
                AIDS001
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>
                AI&DS-A
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>
                09:01 AM
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>
                04:05 PM
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Absent Students */}

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Daily Absent Students Report</h2>

        <table
          style={{
            width: "100%",
            marginTop: "20px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ background: "#f3f4f6" }}>
              <th style={{ padding: "12px", textAlign: "center" }}>Name</th>
              <th style={{ padding: "12px", textAlign: "center" }}>Roll</th>
              <th style={{ padding: "12px", textAlign: "center" }}>Batch</th>
              <th style={{ padding: "12px", textAlign: "center" }}>Subject</th>
              <th style={{ padding: "12px", textAlign: "center" }}>Reason</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: "12px", textAlign: "center" }}>
                Rahul Kumar
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>
                AIDS024
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>
                AI&DS-A
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>
                Data Structures
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>
                Not Provided
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Batch Wise */}

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Batch Wise Attendance</h2>

        <table
          style={{
            width: "100%",
            marginTop: "20px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ background: "#f3f4f6" }}>
              <th style={{ padding: "12px", textAlign: "center" }}>Batch</th>
              <th style={{ padding: "12px", textAlign: "center" }}>
                Attendance %
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: "12px", textAlign: "center" }}>
                AI&DS-A
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>89%</td>
            </tr>

            <tr>
              <td style={{ padding: "12px", textAlign: "center" }}>
                AI&DS-B
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>84%</td>
            </tr>

            <tr>
              <td style={{ padding: "12px", textAlign: "center" }}>CSE-A</td>
              <td style={{ padding: "12px", textAlign: "center" }}>91%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Actions */}

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Report Actions</h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Export CSV
          </button>

          <button
            style={{
              background: "#16a34a",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Export PDF
          </button>

          <button
            style={{
              background: "#f59e0b",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Email Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;