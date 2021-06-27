import React from "react";
import Merlion from "./merlion.png";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <img src={Merlion} width="30%" />
      <h1>Missing Singapore? We are here to help!</h1>
    </div>
  );
};

export default Home;
