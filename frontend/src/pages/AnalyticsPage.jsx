const AnalyticsPage = () => {
  return (
    <div
      style={{
        padding: "30px",
        background: "#f3f4f6",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <h1>Attendance Analytics</h1>

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
          <h3>Overall Attendance</h3>
          <h1>89%</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Low Attendance</h3>
          <h1 style={{ color: "red" }}>27</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Best Batch</h3>
          <h1>AI&DS-A</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Best Subject</h3>
          <h1>AI</h1>
        </div>
      </div>

      {/* Batch Analytics */}

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Batch Wise Analytics</h2>

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
              <th style={{ padding: "12px", textAlign: "center" }}>
                Present
              </th>
              <th style={{ padding: "12px", textAlign: "center" }}>
                Absent
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: "12px", textAlign: "center" }}>
                AI&DS-A
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>89%</td>
              <td style={{ padding: "12px", textAlign: "center" }}>180</td>
              <td style={{ padding: "12px", textAlign: "center" }}>20</td>
            </tr>

            <tr>
              <td style={{ padding: "12px", textAlign: "center" }}>
                AI&DS-B
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>84%</td>
              <td style={{ padding: "12px", textAlign: "center" }}>165</td>
              <td style={{ padding: "12px", textAlign: "center" }}>35</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Subject Analytics */}

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Subject Wise Analytics</h2>

        <table
          style={{
            width: "100%",
            marginTop: "20px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr style={{ background: "#f3f4f6" }}>
              <th style={{ padding: "12px", textAlign: "center" }}>
                Subject
              </th>
              <th style={{ padding: "12px", textAlign: "center" }}>
                Attendance %
              </th>
              <th style={{ padding: "12px", textAlign: "center" }}>
                Faculty
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: "12px", textAlign: "center" }}>
                Artificial Intelligence
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>91%</td>
              <td style={{ padding: "12px", textAlign: "center" }}>
                Dr. Sharma
              </td>
            </tr>

            <tr>
              <td style={{ padding: "12px", textAlign: "center" }}>
                Data Structures
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>86%</td>
              <td style={{ padding: "12px", textAlign: "center" }}>
                Prof. Kumar
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Low Attendance Alerts */}

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2>Low Attendance Alerts</h2>

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

      {/* Graph Placeholder */}

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "40px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h2>Monthly Attendance Graph</h2>

        <div
          style={{
            height: "250px",
            marginTop: "20px",
            border: "2px dashed #cbd5e1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Graph Area (Chart.js Later)
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;