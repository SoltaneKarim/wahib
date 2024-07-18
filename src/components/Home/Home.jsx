import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div
        className="bloc1"
        style={{ backgroundImage: "url(/src/assets/pic4home/pic1.png)" }}
      >
        <p
          className="fs-1"
          style={{
            color: "white",
            // fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Zortrax 3D Printer <br/> Comes with the <br/> Best Price Ever
        </p>
        <img src="https://zortrax.com/static/img/home/spring_60.svg" />
        <img src="https://zortrax.com/static/img/home/spring_Full.svg" />
      </div>

      <div
        className="bloc2"
        style={{ backgroundImage: "url(/src/assets/pic4home/pic2.jpg)" }}
      ></div>

      <div
        className="bloc3"
        style={{ backgroundImage: "url(/src/assets/pic4home/main_bg.jpg)" }}
      ></div>
    </div>
  );
};

export default Home;
