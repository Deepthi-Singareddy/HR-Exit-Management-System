import { useState } from "react";

import api from "../services/api";

import Sidebar from "../components/Sidebar";

function ClearancePage() {

  const [form, setForm] = useState({
    employee: "",
    department: "",
    status: "Pending",
  });

  const submitClearance =
    async () => {

      try {

        await api.post(
          "/clearance",
          form
        );

        alert(
          "Clearance Submitted"
        );

      } catch (error) {

        alert("Error");
      }
    };

  return (

    <>

      <Sidebar />

      <div
        style={{
          marginLeft: "240px",
          padding: "30px",
        }}
      >

        <h1>
          Clearance Approval
        </h1>

        <div
          style={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "20px",
            background: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >

          <input
            placeholder="Employee Name"
            onChange={(e) =>
              setForm({
                ...form,
                employee:
                  e.target.value,
              })
            }
            style={{
              padding: "12px",
              borderRadius: "8px",
              border:
                "1px solid #ccc",
            }}
          />

          <input
            placeholder="Department"
            onChange={(e) =>
              setForm({
                ...form,
                department:
                  e.target.value,
              })
            }
            style={{
              padding: "12px",
              borderRadius: "8px",
              border:
                "1px solid #ccc",
            }}
          />

          <select
            onChange={(e) =>
              setForm({
                ...form,
                status:
                  e.target.value,
              })
            }
            style={{
              padding: "12px",
              borderRadius: "8px",
              border:
                "1px solid #ccc",
            }}
          >
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>

          <button
            onClick={
              submitClearance
            }
            style={{
              padding: "14px",
              background:
                "#1e293b",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "8px",
              fontSize: "16px",
              boxShadow:
                "0 2px 6px rgba(0,0,0,0.2)",
            }}
          >
            Submit Clearance
          </button>

        </div>

      </div>

    </>
  );
}

export default ClearancePage;