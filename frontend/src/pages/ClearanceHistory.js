import { useEffect, useState } from "react";

import api from "../services/api";

import Sidebar from "../components/Sidebar";

function ClearanceHistory() {

  const [data, setData] = useState([]);

  useEffect(() => {

    loadData();

  }, []);

  const loadData = async () => {

    try {

      const res = await api.get(
        "/clearance"
      );

      setData(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <>

      <Sidebar />

      <div style={{ marginLeft: "240px", padding: "30px" }}>

        <h1>Clearance History</h1>

        <table
          style={{
            width: "90%",
            borderCollapse: "collapse",
            background: "white",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            marginTop: "20px",
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
              <th style={{ padding: "15px" }}>Department</th>
              <th style={{ padding: "15px" }}>Status</th>
            </tr>

          </thead>

          <tbody>

            {data.map((item) => (

              <tr
                key={item.id}
                style={{
                  textAlign: "center",
                  borderBottom: "1px solid #ddd",
                }}
              >

                <td style={{ padding: "12px" }}>{item.id}</td>
                <td style={{ padding: "12px" }}>{item.employee}</td>
                <td style={{ padding: "12px" }}>{item.department}</td>
                <td style={{ padding: "12px" }}>{item.status}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </>
  );
}

export default ClearanceHistory;