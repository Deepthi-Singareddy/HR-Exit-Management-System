import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "20px",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >

      <h2>Exit System</h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginTop: "30px",
        }}
      >

        <li style={{ margin: "20px 0" }}>
          <Link to="/dashboard" style={linkStyle}>
            Dashboard
          </Link>
        </li>

        <li style={{ margin: "20px 0" }}>
          <Link to="/" style={linkStyle}>
            Resignation
          </Link>
        </li>

        <li style={{ margin: "20px 0" }}>
          <Link to="/clearance" style={linkStyle}>
            Clearance
          </Link>
        </li>

        <li style={{ margin: "20px 0" }}>
          <Link to="/clearance-history" style={linkStyle}>
            Clearance History
          </Link>
        </li>

        <li style={{ margin: "20px 0" }}>
          <Link to="/assets" style={linkStyle}>
            Assets
          </Link>
        </li>

        <li style={{ margin: "20px 0" }}>
          <Link to="/asset-history" style={linkStyle}>
            Asset History
          </Link>
        </li>

        <li style={{ margin: "20px 0" }}>
          <Link to="/analytics" style={linkStyle}>
            Analytics
          </Link>
        </li>

      </ul>

    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
};

export default Sidebar;