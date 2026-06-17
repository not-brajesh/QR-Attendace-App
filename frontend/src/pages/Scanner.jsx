import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Html5Qrcode } from "html5-qrcode";

function Scanner() {
  const [todayCount, setTodayCount] = useState(0);
  const [scannerActive, setScannerActive] = useState(false);
  const [toast, setToast] = useState(null);
  const [cameraList, setCameraList] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [showCameraPicker, setShowCameraPicker] = useState(false);
  const html5QrCodeRef = useRef(null);

  // Fetch today's count from the server
  const fetchTodayCount = async () => {
    try {
      const res = await axios.get(
        "https://qr-attendance-backend-kc31.onrender.com/api/attendance/today"
      );
      setTodayCount(res.data.count || res.data.attendance?.length || 0);
    } catch (error) {
      console.error("Failed to fetch today's attendance:", error);
    }
  };

  useEffect(() => {
    fetchTodayCount();
  }, []);

  // Show toast and auto-remove after 2s
  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Scanner setup – only when scannerActive is true and selectedCamera is set
  useEffect(() => {
    if (!scannerActive || !selectedCamera) return;

    const html5QrCode = new Html5Qrcode("reader");
    html5QrCodeRef.current = html5QrCode;

    html5QrCode
      .start(
        selectedCamera,
        {
          fps: 10,
          qrbox: { width: 320, height: 320 },
          aspectRatio: 9 / 16,
        },
        async (decodedText) => {
          try {
            await axios.post(
              "https://qr-attendance-backend-kc31.onrender.com/api/attendance/mark",
              {
                studentId: decodedText,
                subject: "AI&DS",
              }
            );
            setTodayCount((prev) => prev + 1);
            showToast("Attendance Marked", "success");
          } catch (error) {
            showToast(
              error?.response?.data?.message || "Attendance Mark Failed",
              "error"
            );
          }
        }
      )
      .catch(console.error);

    return () => {
      html5QrCode.stop().catch(() => {});
    };
  }, [scannerActive, selectedCamera]);

  // Toggle scanner: stop if active, else check cameras
  const handleStartStop = async () => {
    if (scannerActive) {
      // Stop scanner
      setScannerActive(false);
      setSelectedCamera(null);
      return;
    }

    // Start: get available cameras
    try {
      const devices = await Html5Qrcode.getCameras();
      if (devices.length === 1) {
        // Only one camera: start directly
        setSelectedCamera(devices[0].id);
        setScannerActive(true);
      } else {
        // Multiple cameras: show picker
        setCameraList(devices);
        setShowCameraPicker(true);
      }
    } catch (err) {
      console.error("No cameras found", err);
      showToast("No camera available", "error");
    }
  };

  return (
    <>
      {/* Inject keyframes and scanner UI overrides */}
      <style>{`
        @keyframes scanLine {
          0% { top: 0%; }
          100% { top: 100%; }
        }

        #reader video {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
        }
        #reader__dashboard {
          display: none !important;
        }
        #reader__scan_region {
          border: none !important;
        }
        #reader img {
          display: none !important;
        }
      `}</style>

      {/* Full screen background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          background: "#000",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          overflow: "hidden",
          zIndex: 0,
        }}
      />

      {/* Camera container – fixed fullscreen */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          background: "#000",
          zIndex: 1,
        }}
      >
        {!scannerActive ? (
          /* Scanner off placeholder */
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              Tap Start Scanner to begin
            </p>
          </div>
        ) : (
          /* Active scanner – full screen */
          <>
            <div
              id="reader"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
            />

            {/* Scanning frame overlay */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: 320,
                height: 320,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            >
              {/* Corners */}
              <div
                style={{
                  position: "absolute",
                  top: -2,
                  left: -2,
                  width: 30,
                  height: 30,
                  borderTop: "4px solid white",
                  borderLeft: "4px solid white",
                  borderTopLeftRadius: 8,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: -2,
                  right: -2,
                  width: 30,
                  height: 30,
                  borderTop: "4px solid white",
                  borderRight: "4px solid white",
                  borderTopRightRadius: 8,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -2,
                  left: -2,
                  width: 30,
                  height: 30,
                  borderBottom: "4px solid white",
                  borderLeft: "4px solid white",
                  borderBottomLeftRadius: 8,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -2,
                  right: -2,
                  width: 30,
                  height: 30,
                  borderBottom: "4px solid white",
                  borderRight: "4px solid white",
                  borderBottomRightRadius: 8,
                }}
              />

              {/* Scanning animation line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 8,
                  right: 8,
                  height: "100%",
                  overflow: "hidden",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    width: "100%",
                    height: 2,
                    background: "#00ff88",
                    boxShadow: "0 0 8px #00ff88",
                    animation: "scanLine 2s infinite",
                  }}
                />
              </div>
            </div>

            {/* Hint text */}
            <div
              style={{
                position: "absolute",
                bottom: 180,
                left: 0,
                right: 0,
                textAlign: "center",
                color: "rgba(255,255,255,0.5)",
                fontSize: 14,
                letterSpacing: 0.5,
                pointerEvents: "none",
                zIndex: 2,
              }}
            >
              Position QR code in the frame
            </div>
          </>
        )}
      </div>

      {/* Top dark fade */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "180px",
          background: "linear-gradient(to bottom, rgba(0,0,0,.75), transparent)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

      {/* Bottom dark fade */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "220px",
          background: "linear-gradient(to top, rgba(0,0,0,.85), transparent)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

      {/* Dynamic Island – floating over camera */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          width: 220,
          height: 50,
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          borderRadius: 999,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "-0.3px",
          }}
        >
          QR Attendance
        </span>
        <span
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 13,
            fontWeight: 400,
            marginTop: 2,
          }}
        >
          {todayCount} Students Present Today
        </span>
      </div>

      {/* Toast notification */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: 80,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 999,
            background:
              toast.type === "success"
                ? "rgba(0,255,136,0.15)"
                : "rgba(255,69,58,0.15)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            borderRadius: 16,
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            border:
              toast.type === "success"
                ? "1px solid rgba(0,255,136,0.3)"
                : "1px solid rgba(255,69,58,0.3)",
          }}
        >
          <span
            style={{
              fontSize: 18,
              color: toast.type === "success" ? "#00ff88" : "#ff453a",
            }}
          >
            {toast.type === "success" ? "✓" : "✕"}
          </span>
          <span
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            {toast.message}
          </span>
        </div>
      )}

      {/* Camera selection popup */}
      {showCameraPicker && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              width: 320,
              background: "#111",
              borderRadius: 20,
              padding: 20,
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <h3
              style={{
                color: "white",
                textAlign: "center",
                marginBottom: 15,
              }}
            >
              Select Camera
            </h3>

            {cameraList.map((camera) => (
              <button
                key={camera.id}
                onClick={() => {
                  setSelectedCamera(camera.id);
                  setShowCameraPicker(false);
                  setScannerActive(true);
                }}
                style={{
                  width: "100%",
                  marginBottom: 10,
                  height: 50,
                  borderRadius: 12,
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 600,
                  background: "#2c2c2e",
                  color: "white",
                }}
              >
                {camera.label || "Camera"}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bottom action bar – premium glass dock */}
      <div
        style={{
          position: "fixed",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: 450,
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
          backdropFilter: "blur(60px)",
          WebkitBackdropFilter: "blur(60px)",
          borderRadius: 24,
          padding: 16,
          display: "flex",
          gap: 12,
          zIndex: 10,
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.45)",
        }}
      >
        <button
          onClick={() =>
            window.open(
              "https://qr-attendance-backend-kc31.onrender.com/api/attendance/export/today",
              "_blank"
            )
          }
          style={{
            flex: 1,
            height: 56,
            borderRadius: 18,
            background: "white",
            color: "black",
            border: "none",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
            transition: "transform 0.1s",
          }}
          onMouseDown={(e) =>
            (e.currentTarget.style.transform = "scale(0.97)")
          }
          onMouseUp={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          Today's Report
        </button>

        {/* Start / Stop Toggle */}
        <button
          onClick={handleStartStop}
          style={{
            flex: 1,
            height: 56,
            borderRadius: 18,
            background: scannerActive
              ? "rgba(255,69,58,0.25)"
              : "rgba(0,255,136,0.20)",
            color: "white",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(30px)",
            WebkitBackdropFilter: "blur(30px)",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
            transition: "transform 0.1s, background 0.3s",
          }}
          onMouseDown={(e) =>
            (e.currentTarget.style.transform = "scale(0.97)")
          }
          onMouseUp={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          {scannerActive ? "Stop Scanner" : "Start Scanner"}
        </button>

        <button
          onClick={() =>
            window.open(
              "https://qr-attendance-backend-kc31.onrender.com/api/attendance/export/all",
              "_blank"
            )
          }
          style={{
            flex: 1,
            height: 56,
            borderRadius: 18,
            background: "transparent",
            color: "white",
            border: "1px solid rgba(255,255,255,0.3)",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
            transition: "transform 0.1s",
          }}
          onMouseDown={(e) =>
            (e.currentTarget.style.transform = "scale(0.97)")
          }
          onMouseUp={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          Attendance Book
        </button>
      </div>
    </>
  );
}

export default Scanner;