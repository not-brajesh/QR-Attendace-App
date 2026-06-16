const SyllabusPage = () => {
  return (
    <div
      style={{
        padding: "30px",
        background: "#f3f4f6",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <h1>Syllabus Progress Management</h1>

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
          <h3>Total Subjects</h3>
          <h1>8</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Completed</h3>
          <h1 style={{ color: "green" }}>5</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>In Progress</h3>
          <h1 style={{ color: "#f59e0b" }}>3</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Overall Progress</h3>
          <h1>68%</h1>
        </div>
      </div>

      {/* Subject Progress */}

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "30px",
        }}
      >
        <h2>Subject Wise Progress</h2>

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
                Faculty
              </th>
              <th style={{ padding: "12px", textAlign: "center" }}>
                Total Units
              </th>
              <th style={{ padding: "12px", textAlign: "center" }}>
                Completed
              </th>
              <th style={{ padding: "12px", textAlign: "center" }}>
                Progress %
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: "12px", textAlign: "center" }}>
                Artificial Intelligence
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>
                Dr. Sharma
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>5</td>
              <td style={{ padding: "12px", textAlign: "center" }}>4</td>
              <td
                style={{
                  padding: "12px",
                  textAlign: "center",
                  color: "green",
                }}
              >
                80%
              </td>
            </tr>

            <tr>
              <td style={{ padding: "12px", textAlign: "center" }}>
                Data Structures
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>
                Prof. Kumar
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>6</td>
              <td style={{ padding: "12px", textAlign: "center" }}>4</td>
              <td
                style={{
                  padding: "12px",
                  textAlign: "center",
                  color: "#f59e0b",
                }}
              >
                67%
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Faculty Update */}

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "30px",
        }}
      >
        <h2>Update Progress</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <input
            placeholder="Subject Name"
            style={{ padding: "12px" }}
          />

          <input
            placeholder="Completed Units"
            style={{ padding: "12px" }}
          />

          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Update Progress
          </button>
        </div>
      </div>

      {/* Daily Report */}

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "30px",
        }}
      >
        <h2>Daily Syllabus Report</h2>

        <p style={{ marginTop: "15px" }}>
          Today's Overall Completion: <b>68%</b>
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              background: "#16a34a",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "8px",
            }}
          >
            Export CSV
          </button>

          <button
            style={{
              background: "#dc2626",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "8px",
            }}
          >
            Export PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default SyllabusPage;