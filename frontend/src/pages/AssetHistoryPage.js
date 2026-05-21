import Sidebar from "../components/Sidebar";

function AssetHistoryPage() {

  return (

    <>

      <Sidebar />

      <div style={{ marginLeft: "240px", padding: "30px" }}>

        <h1>Asset History</h1>

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
              <th style={{ padding: "15px" }}>Asset</th>
              <th style={{ padding: "15px" }}>Status</th>
            </tr>

          </thead>

          <tbody>

            <tr
              style={{
                textAlign: "center",
                borderBottom: "1px solid #ddd",
              }}
            >

              <td style={{ padding: "12px" }}>1</td>
              <td style={{ padding: "12px" }}>Deepthi</td>
              <td style={{ padding: "12px" }}>Laptop</td>
              <td style={{ padding: "12px" }}>Returned</td>

            </tr>

          </tbody>

        </table>

      </div>

    </>
  );
}

export default AssetHistoryPage;