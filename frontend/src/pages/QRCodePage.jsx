const QRCodePage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>QR Management</h1>

      {/* Summary Cards */}

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
            textAlign: "center",
          }}
        >
          <h3>Total QR Codes</h3>
          <h1>350</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h3>Active Today</h3>
          <h1>312</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h3>Scanned Today</h3>
          <h1>298</h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h3>Pending</h3>
          <h1>52</h1>
        </div>
      </div>

      {/* QR Preview */}

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h2>Sample Student QR</h2>

        <div
          style={{
            width: "250px",
            height: "250px",
            border: "2px dashed #94a3b8",
            margin: "20px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          QR CODE
        </div>

        <div
          style={{
            textAlign: "center",
          }}
        >
          <h3>Brajesh Kumar</h3>
          <p>AIDS001</p>
        </div>
      </div>

      {/* Actions */}

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h2>QR Actions</h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              padding: "12px 20px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Generate QR
          </button>

          <button
            style={{
              padding: "12px 20px",
              background: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Download QR
          </button>

          <button
            style={{
              padding: "12px 20px",
              background: "#dc2626",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Regenerate QR
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCodePage;