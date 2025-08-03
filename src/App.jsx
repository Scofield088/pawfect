import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <Header />
      <Form data={data} setData={setData} />
      <Table data={data} />
    </>
  );
}

function Header() {
  const [header, setHeader] = useState();
  useEffect(function () {
    setHeader("Pet Adoption Form");
  }, []);
  return (
    <h1
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f8f9fa",
        margin: 0,
        color: "#333",
        borderBottom: "2px solid #ddd"
      }}
    >
      {header}
    </h1>
  );
}

function Form({ data, setData }) {
  const [petname, setPetName] = useState("");
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleChange(e) {
    setPetName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!petname || !type || !breed || !name || !email || !phone) {
      alert("please fill all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    setData([...data, { petname, type, breed, name, email, phone }]);
    setPetName("");
    setType("");
    setBreed("");
    setName("");
    setEmail("");
    setPhone("");
  }

  return (
    <div
      style={{
        textAlign: "center",
        backgroundImage: "url('/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "30px 0"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "inline-block",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "20px 30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          textAlign: "left"
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label style={{ fontWeight: "bold" }}>Pet Name</label>
          <br />
          <input
            value={petname}
            onChange={handleChange}
            type="text"
            placeholder="Pet Name"
            style={{
              padding: "8px",
              width: "250px",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ fontWeight: "bold" }}>Pet Type</label>
          <br />
          <input
            value={type}
            onChange={(e) => setType(e.target.value)}
            type="text"
            placeholder="Dog"
            style={{
              padding: "8px",
              width: "250px",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ fontWeight: "bold" }}>Breed</label>
          <br />
          <input
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            type="text"
            placeholder="Breed"
            style={{
              padding: "8px",
              width: "250px",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ fontWeight: "bold" }}>Your Name</label>
          <br />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
            style={{
              padding: "8px",
              width: "250px",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ fontWeight: "bold" }}>Email</label>
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            style={{
              padding: "8px",
              width: "250px",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ fontWeight: "bold" }}>Phone</label>
          <br />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="Phone"
            style={{
              padding: "8px",
              width: "250px",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

function Table({ data }) {
  return (
    <>
      {data.length > 0 && (
        <table
          border="1"
          style={{
            margin: "20px auto",
            borderCollapse: "collapse",
            width: "80%",
            backgroundColor: "#fff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}
        >
          <thead style={{ backgroundColor: "#f1f1f1" }}>
            <tr>
              <th style={{ padding: "10px" }}>Pet Name</th>
              <th style={{ padding: "10px" }}>Type</th>
              <th style={{ padding: "10px" }}>Breed</th>
              <th style={{ padding: "10px" }}>Adopter Name</th>
              <th style={{ padding: "10px" }}>Email</th>
              <th style={{ padding: "10px" }}>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td style={{ padding: "8px" }}>{entry.petname}</td>
                <td style={{ padding: "8px" }}>{entry.type}</td>
                <td style={{ padding: "8px" }}>{entry.breed}</td>
                <td style={{ padding: "8px" }}>{entry.name}</td>
                <td style={{ padding: "8px" }}>{entry.email}</td>
                <td style={{ padding: "8px" }}>{entry.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
