import { useEffect, useState } from "react";

import api from "../services/api";

import Sidebar from "../components/Sidebar";

function AnalyticsPage() {

  const [resignations, setResignations] =
    useState([]);

  const [clearances, setClearances] =
    useState([]);

  const [assets, setAssets] =
    useState([]);

  useEffect(() => {

    loadData();

  }, []);

  const loadData = async () => {

    try {

      const resignationRes =
        await api.get("/resignations");

      const clearanceRes =
        await api.get("/clearance");

      const assetRes =
        await api.get("/assets");

      setResignations(
        resignationRes.data
      );

      setClearances(
        clearanceRes.data
      );

      setAssets(
        assetRes.data
      );

    } catch (error) {

      console.log(error);
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
          Exit Analytics Dashboard
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >

          <div
            style={{
              border: "1px solid #ccc",
              padding: "25px",
              width: "240px",
              borderRadius: "12px",
              background: "#f1f5f9",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2>Total Resignations</h2>

            <h1>
              {resignations.length}
            </h1>
          </div>

          <div
            style={{
              border: "1px solid #ccc",
              padding: "25px",
              width: "240px",
              borderRadius: "12px",
              background: "#dcfce7",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2>
              Approved Clearances
            </h2>

            <h1>
              {clearances.length}
            </h1>
          </div>

          <div
            style={{
              border: "1px solid #ccc",
              padding: "25px",
              width: "240px",
              borderRadius: "12px",
              background: "#dbeafe",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h2>
              Returned Assets
            </h2>

            <h1>
              {assets.length}
            </h1>
          </div>

        </div>

      </div>

    </>
  );
}

export default AnalyticsPage;