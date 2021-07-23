import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Listmenu from "./Listmenu";

const Dashboard = () => {
  return (
    <div>
      <div
        className=""
        style={{
          margin: 0,
          flex: "colum",
          position: "relative",
          paddingBottom: 0,
          minHeight: "100vh",
          overflowX: "hidden",
          width: "100%",
          height: "100%",
          backgroundColor: "#90d0e6",
        }}
      >
        <Header />
        <Listmenu />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
