import { useState } from "react";

export default function Builder() {

  const [name,setName] = useState("");
  const [title,setTitle] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [summary,setSummary] = useState("");

  return (
    <div style={{
      display:"flex",
      flexWrap:"wrap",
      gap:"40px",
      padding:"40px",
      background:"#0f172a",
      minHeight:"100vh",
      color:"white",
      fontFamily:"Arial"
    }}>

      {/* LEFT SIDE FORM */}
      <div style={{
        flex:"1",
        minWidth:"320px",
        background:"#1e293b",
        padding:"30px",
        borderRadius:"10px"
      }}>

        <h2>Personal</h2>

        <label>Full Name</label>
        <input
          placeholder="John Doe"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          style={input}
        />

        <label>Job Title</label>
        <input
          placeholder="Frontend Developer"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          style={input}
        />

        <label>Email</label>
        <input
          placeholder="john@email.com"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          style={input}
        />

        <label>Phone</label>
        <input
          placeholder="+91 9876543210"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          style={input}
        />

        <label>Professional Summary</label>
        <textarea
          placeholder="Describe your professional background..."
          value={summary}
          onChange={(e)=>setSummary(e.target.value)}
          style={{
            ...input,
            height:"100px"
          }}
        />

        <button style={{
          marginTop:"20px",
          padding:"12px",
          background:"#6366f1",
          border:"none",
          borderRadius:"6px",
          color:"white",
          width:"100%",
          cursor:"pointer"
        }}>
          Check ATS Score
        </button>

      </div>


      {/* RIGHT SIDE RESUME PREVIEW */}
      <div style={{
        flex:"1",
        minWidth:"320px",
        background:"white",
        color:"black",
        padding:"40px",
        borderRadius:"10px"
      }}>

        <div style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center"
        }}>
          <h1>{name || "Your Name"}</h1>

          <button
            onClick={()=>window.print()}
            style={{
              padding:"10px",
              background:"black",
              color:"white",
              border:"none",
              borderRadius:"5px"
            }}
          >
            Download PDF
          </button>
        </div>

        <h3 style={{color:"#2563eb"}}>
          {title || "Your Job Title"}
        </h3>

        <hr/>

        <p><b>Email:</b> {email}</p>
        <p><b>Phone:</b> {phone}</p>

        <h3>Professional Summary</h3>
        <p>{summary || "Your summary will appear here..."}</p>

      </div>

    </div>
  );
}

const input = {
  width:"100%",
  padding:"10px",
  marginTop:"5px",
  marginBottom:"15px",
  borderRadius:"6px",
  border:"none"
};
