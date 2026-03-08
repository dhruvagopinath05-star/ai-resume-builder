"use client";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#001f2f,#003b46,#000)",
        color: "white",
        fontFamily: "Arial",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px"
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          fontWeight: "bold",
          background: "linear-gradient(90deg,#00ffff,#00bcd4)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          marginBottom: "20px"
        }}
      >
        Builda Professional Resume with AI in Minutes
      </h1>

      <p
        style={{
          maxWidth: "600px",
          marginBottom: "40px",
          opacity: 0.85,
          fontSize: "18px"
        }}
      >
        Just enter your details — our AI generates polished, ATS-friendly
        resume content tailored to your target role. Save, download,
        and share instantly.
      </p>

      <button
        onClick={() => (window.location.href = "/builder")}
        style={{
          padding: "16px 40px",
          fontSize: "18px",
          background: "linear-gradient(90deg,#00e5ff,#00bcd4)",
          border: "none",
          borderRadius: "12px",
          color: "white",
          cursor: "pointer",
          marginBottom: "20px",
          boxShadow: "0 0 20px rgba(0,255,255,0.5)"
        }}
      >
        Create My Resume Free →
      </button>

      <button
        style={{
          padding: "12px 30px",
          background: "transparent",
          border: "1px solid #00bcd4",
          borderRadius: "10px",
          color: "white",
          cursor: "pointer"
        }}
      >
        Sign In
      </button>

      <div
        style={{
          display: "flex",
          gap: "60px",
          marginTop: "60px",
          opacity: 0.9
        }}
      >
        <div>
          <h2>100%</h2>
          <p>Free to use</p>
        </div>

        <div>
          <h2>{"< 30s"}</h2>
          <p>AI generation</p>
        </div>

        <div>
          <h2>ATS</h2>
          <p>Optimized format</p>
        </div>
      </div>
    </div>

  );
}