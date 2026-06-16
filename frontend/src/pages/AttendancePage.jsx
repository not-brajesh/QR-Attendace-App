const AttendancePage = () => {
  return (
    <div
      style={{
        padding: "30px",
        background: "#f3f4f6",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <h1>Attendance Management</h1>

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
          <h3>Attendance %</h3>
          <h1>89%</h1>
        </div>
      </div>

      {/* Session Control */}

      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          marginTop: "30px",
        }}
      >
        <h2>Attendance Session</h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              padding: "12px 25px",
              background: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Start Session
          </button>

          <button
            style={{
              padding: "12px 25px",
              background: "#dc2626",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            End Session
          </button>
        </div>
      </div>

      {/* Present Students */}

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Present Students</h2>

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
                Status
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
              <td
                style={{
                  padding: "12px",
                  textAlign: "center",
                  color: "green",
                }}
              >
                Present
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
        <h2>Absent Students</h2>

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
                Attendance %
              </th>
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
              <td
                style={{
                  padding: "12px",
                  textAlign: "center",
                  color: "red",
                }}
              >
                68%
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendancePage;