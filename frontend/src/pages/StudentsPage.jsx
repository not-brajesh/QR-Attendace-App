const StudentsPage = () => {
  return (
    <div
      style={{
        padding: "30px",
        background: "#f3f4f6",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <h1>Student Management</h1>

      {/* Top Stats */}

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
          <h3>Active Students</h3>
          <h1 style={{ color: "green" }}>332</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3>Inactive</h3>
          <h1 style={{ color: "red" }}>18</h1>
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
          <h1 style={{ color: "#f59e0b" }}>27</h1>
        </div>
      </div>

      {/* Search & Filter */}

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "30px",
        }}
      >
        <h2>Search Students</h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <input
            placeholder="Search by Name / Roll"
            style={{
              flex: 1,
              padding: "12px",
            }}
          />

          <select
            style={{
              padding: "12px",
            }}
          >
            <option>All Batches</option>
            <option>AI&DS-A</option>
            <option>AI&DS-B</option>
            <option>CSE-A</option>
          </select>

          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "8px",
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Student Table */}

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "30px",
        }}
      >
        <h2>Student List</h2>

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
              <th style={{ padding: "12px", textAlign: "center" }}>Email</th>
              <th style={{ padding: "12px", textAlign: "center" }}>
                Attendance %
              </th>
              <th style={{ padding: "12px", textAlign: "center" }}>
                QR Status
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
                brajesh@college.edu
              </td>
              <td
                style={{
                  padding: "12px",
                  textAlign: "center",
                  color: "green",
                }}
              >
                88%
              </td>
              <td
                style={{
                  padding: "12px",
                  textAlign: "center",
                  color: "green",
                }}
              >
                Active
              </td>
              <td
                style={{
                  padding: "12px",
                  textAlign: "center",
                  color: "green",
                }}
              >
                Active
              </td>
            </tr>

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
                rahul@college.edu
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
              <td
                style={{
                  padding: "12px",
                  textAlign: "center",
                  color: "green",
                }}
              >
                Active
              </td>
              <td
                style={{
                  padding: "12px",
                  textAlign: "center",
                  color: "red",
                }}
              >
                Warning
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Actions */}

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "30px",
        }}
      >
        <h2>Student Actions</h2>

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
            Add Student
          </button>

          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "8px",
            }}
          >
            Import Excel
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
            Export Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;