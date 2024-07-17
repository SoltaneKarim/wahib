import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      
      <div className="bloc1" style={{ backgroundImage: "url(/src/assets/pic4home/pic1.png)" }}>
      <div class="row">
                    <div class="col-lg-6">
                        <h2>
                            Zortrax 3D Printer Comes with the Best Price Ever                        </h2>
                        <a href="https://store.zortrax.com/3d-printers/zortrax-m200-plus">
                            Order M200 Plus                        </a>
                    </div>
                    <div class="col-lg-6"></div>
                </div>
      





      </div>

      <div className="bloc2" style={{ backgroundImage: "url(/src/assets/pic4home/pic2.jpg)" }}>
      </div>
      
      <div className="bloc3" style={{ backgroundImage: "url(/src/assets/pic4home/main_bg.jpg)" }}>
      </div>

    </div>
  );
};

export default Home;
