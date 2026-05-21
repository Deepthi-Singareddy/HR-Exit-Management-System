import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import api from "../services/api";

import Sidebar from "../components/Sidebar";

function Dashboard() {

  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role !== "HR Admin") {
    return <h1>Access Denied</h1>;
  }

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {

    try {

      const res = await api.get(
        "/resignations"
      );

      setData(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  const logout = () => {

    localStorage.removeItem("user");

    window.location.href = "/login";
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

        <h1>Dashboard</h1>

        <button
          onClick={logout}
          style={{
            padding: "12px",
            background: "#1e293b",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "8px",
            fontSize: "16px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            marginBottom: "20px",
          }}
        >
          Logout
        </button>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >

          <div
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              width: "220px",
              borderRadius: "10px",
              background: "#f1f5f9",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Total Resignations</h3>
            <h1>{data.length}</h1>
          </div>

          <div
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              width: "220px",
              borderRadius: "10px",
              background: "#dcfce7",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Approved Clearances</h3>
            <h1>8</h1>
          </div>

          <div
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              width: "220px",
              borderRadius: "10px",
              background: "#dbeafe",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Returned Assets</h3>
            <h1>6</h1>
          </div>

        </div>

        <input
          placeholder="Search Employee"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          style={{
            padding: "12px",
            width: "300px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <table
          style={{
            width: "90%",
            borderCollapse: "collapse",
            background: "white",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >

          <thead
            style={{
              background: "#1e293b",
              color: "white",
            }}
          >

            <tr>
              <th style={{ padding: "15px" }}>ID</th>
              <th style={{ padding: "15px" }}>Employee</th>
              <th style={{ padding: "15px" }}>Reason</th>
              <th style={{ padding: "15px" }}>Status</th>
            </tr>

          </thead>

          <tbody>

            {data
              .filter((item) =>
                item.employee_name
                  ?.toLowerCase()
                  .includes(
                    search.toLowerCase()
                  )
              )
              .map((item) => (

                <tr
                  key={item.id}
                  style={{
                    textAlign: "center",
                    borderBottom:
                      "1px solid #ddd",
                  }}
                >

                  <td style={{ padding: "12px" }}>
                    {item.id}
                  </td>

                  <td style={{ padding: "12px" }}>
                    {item.employee_name}
                  </td>

                  <td style={{ padding: "12px" }}>
                    {item.reason}
                  </td>

                  <td style={{ padding: "12px" }}>
                    {item.status}
                  </td>

                </tr>
              ))}

          </tbody>

        </table>

      </div>

    </>
  );
}

export default Dashboard;