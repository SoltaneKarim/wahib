import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Home.css";

const service = [
  {
    title: "karim",
    description: "soltane",
  },
  {
    title: "yassine",
    description: "knaizia",
  },
];

const team = [
  {
    name: "karim",
    description: "soltane",
  },
  {
    name: "yassine",
    description: "knaizia",
  },
]

const Home = () => {
  return (
    <div className="bloc0">
      <div
        className="bloc1"
        style={{ backgroundImage: "url(/src/assets/pic4home/19546.jpg)" }}
      ></div>

      <div className="bloc2">
        <section className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col text-center mb-5">
                <h1 className="display-4 font-weight-bolder">Services</h1>
              </div>
            </div>
            <div className="row">
              {service.map((element, index) => (
                <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
                  <div
                    className="card text-dark card-has-bg click-col"
                    style={{
                      backgroundImage: "url('/src/assets/pic4home/pic2.jpg')",
                      backgroundSize: "cover",
                    }}
                  >
                    <img
                      className="card-img d-none"
                      src="https://source.unsplash.com/600x900/?tech,street"
                      alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?"
                    />
                    <div className="card-img-overlay d-flex flex-column">
                      <div className="card-body">
                        <small className="card-meta mb-2">
                          {element.title}
                        </small>
                        <h4 className="card-title mt-0">
                          <a
                            className="text-dark"
                            href="https://creativemanner.com"
                            style={{ textDecoration: "none" }}
                          >
                            {element.description}
                          </a>
                        </h4>
                        <small>
                          <i className="far fa-clock"></i> October 15, 2020
                        </small>
                      </div>
                      <div className="card-footer">
                        <div className="media">
                          <div className="media-body">
                            <h6 className="my-0 text-dark d-block">
                              Oz Coruhlu
                            </h6>
                            <small>Director of UI/UX</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div
        className="blocTeam"
        style={{
          backgroundImage: "url(/src/assets/pic4home/team/2149352577.jpg)",
        }}
      >
        <section>
          <div className="container">
            <div className="row">
              {team.map((element, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card profile-card-2">
                    <div className="card-img-block">
                      <img
                        className="img-fluid"
                        src="https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80"
                        alt="Card image"
                      />
                    </div>
                    <div className="card-body pt-5">
                      <img
                        src="https://randomuser.me/api/portraits/men/79.jpg"
                        alt="profile-image"
                        className="profile"
                        onError={(e) => { e.target.onerror = null; e.target.src = "/src/assets/fallback-profile.jpg"; }}
                      />
                      <h5 className="card-title">{element.name}</h5>
                      <p className="card-text">
                        {element.description}
                      </p>
                      <div className="icon-block">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-google-plus-g"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div
        className="bloc4"
        style={{ backgroundImage: "url(/src/assets/pic4home/team/8330.jpg)" }}
      ></div>
    </div>
  );
};

export default Home;