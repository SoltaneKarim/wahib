import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Bloc1.css";
import "./Bloc2.css";
import "./Bloc3.css";
import "./Bloc4.css";
import "./Bloc5.scss";
import "./Bloc6.css";

const longCards = [
  {
    class: "postcard light blue",
    img: "https://picsum.photos/1000/1000",
    title: "Podcast Title",
    date: "Mon, May 25th 2020",
    descrption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!",
    leftBut: "Podcast",
    middleBut: "55 mins.",
    rightBut: "Play Episode",
  },
  {
    class: "postcard light red",
    img: "https://picsum.photos/1000/1000",
    title: "Podcast Title",
    date: "Mon, May 25th 2020",
    descrption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!",
    leftBut: "Podcast",
    middleBut: "55 mins.",
    rightBut: "Play Episode",
  },
  {
    class: "postcard light green",
    img: "https://picsum.photos/1000/1000",
    title: "Podcast Title",
    date: "Mon, May 25th 2020",
    descrption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!",
    leftBut: "Podcast",
    middleBut: "55 mins.",
    rightBut: "Play Episode",
  },
  {
    class: "postcard light yellow",
    img: "https://picsum.photos/1000/1000",
    title: "Podcast Title",
    date: "Mon, May 25th 2020",
    descrption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!",
    leftBut: "Podcast",
    middleBut: "55 mins.",
    rightBut: "Play Episode",
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
  {
    name: "dousi",
    description: "bk",
  },
];

const zortrex = [
  {
    nobr1: "Wear-resistant",
    nobr2: "space-grade",
    nobr3: "Z-PEEK",
  },
  {
    nobr1: "Heat-resistant",
    nobr2: "high-performance",
    nobr3: "polymer Z-PEI 1010",
  },
  {
    nobr1: "Smart and efficient ",
    nobr2: "large volume ",
    nobr3: "3D printing",
  },
  {
    nobr1: "Next-level management of",
    nobr2: "your 3D printers and",
    nobr3: "teams",
  }
]

const cards = [
  {
    position: "left",
    imgSrc: "https://images.pexels.com/photos/220072/pexels-photo-220072.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    position: "top",
    imgSrc: "https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    text: "Quisque cursus, metus vitae pharetra auctor."
  },
  
  {
    position: "right",
    imgSrc: "https://images.pexels.com/photos/35828/soap-bubble-colorful-ball-soapy-water.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text: "Ut eu diam at pede suscipit sodales."
  },
  {
    position: "right",
    imgSrc: "https://images.pexels.com/photos/701855/pexels-photo-701855.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text: "Donec lacus nunc, viverra nec, blandit vel, egestas et, augue."
  },
  {
    position: "top",
    imgSrc: "https://images.pexels.com/photos/668295/pexels-photo-668295.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    position: "bottom",
    imgSrc: "https://images.pexels.com/photos/63238/pexels-photo-63238.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text: "Ut eu diam at pede suscipit sodales."
  },
  {
    position: "left",
    imgSrc: "https://images.pexels.com/photos/1603891/pexels-photo-1603891.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    position: "bottom",
    imgSrc: "https://images.pexels.com/photos/585581/pexels-photo-585581.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text: "Quisque cursus, metus vitae pharetra auctor."
  },
  {
    position: "right",
    imgSrc: "https://images.pexels.com/photos/532561/pexels-photo-532561.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    position: "right",
    imgSrc: "https://images.pexels.com/photos/775907/pexels-photo-775907.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text: "Ut eu diam at pede suscipit sodales."
  },
  {
    position: "right",
    imgSrc: "https://images.pexels.com/photos/775907/pexels-photo-775907.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text: "Ut eu diam at pede suscipit sodales."
  },
  {
    position: "right",
    imgSrc: "https://images.pexels.com/photos/532561/pexels-photo-532561.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    text: "Ut eu diam at pede suscipit sodales."
  }
];


const Home = () => {
  return (
    <div className="bloc0">
      
      <div className="bloc2">
  <section>
    <div className="bloc2-div1"></div>
    <div className="bloc2-div2"></div>
    <div className="bloc2-div3"></div>
    <div className="bloc2-div4"></div>
    <div className="bloc2-div5"></div>
    <div className="bloc2-div6"></div>
    <div className="bloc2-div7"></div>
    <div className="bloc2-div8"></div>
    <div className="bloc2-div9"></div>
  <p>Welcome<br/>to<br/>3D Market </p>
  </section>
      </div>
      
      <div className="bloc1">
        <div className="containerb1">
        {cards.map((card, index) => (
          <div className={`card-${card.position}`} key={index}>
            <div className="card-image">
              <img src={card.imgSrc} alt="Card" />
            </div>
            <div className="card-text">
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
      </div>

      <div className="bloc3">
        <section className="light">
          <div className="container py-2">
            <div className="h1 text-center text-dark" id="pageHeaderTitle">
              My Cards Light
            </div>
            {longCards.map((element, index) => (
              <article className={element.class} key={index}>
                <a className="postcard__img_link" href="#">
                  <img className="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
                </a>
                <div className="postcard__text t-dark">
                  <h1 className="postcard__title blue">
                    <a href="#">Podcast Title</a>
                  </h1>
                  <div className="postcard__subtitle small">
                    <time dateTime="2020-05-25 12:00:00">
                      <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th
                      2020
                    </time>
                  </div>
                  <div className="postcard__bar"></div>
                  <div className="postcard__preview-txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, fugiat asperiores inventore beatae accusamus odit
                    minima enim, commodi quia, doloribus eius! Ducimus nemo
                    accusantium maiores velit corrupti tempora reiciendis
                    molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                    quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                    quidem excepturi, illum quos!
                  </div>
                  <ul className="postcard__tagbox">
                    <li className="tag__item">
                      <i className="fas fa-tag mr-2"></i>Podcast
                    </li>
                    <li className="tag__item">
                      <i className="fas fa-clock mr-2"></i>55 mins.
                    </li>
                    <li className="tag__item play blue">
                      <a href="#">
                        <i className="fas fa-play mr-2"></i>Play Episode
                      </a>
                    </li>
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="bloc4">
        {team.map((element, index) => (
          <div id="card" key={index}>
            <div id="avatar"></div>
            <div id="profile">
              <h1>{element.name}</h1>
              <h3>{element.description}</h3>
            </div>
            <div className="profile-icons">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="bloc5">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bloc6">
        {zortrex.map ((element,index) => (
          <div className="containerb6" style={{ backgroundImage: "url(/src/assets/pic4home/19546.jpg" }} key={index}>
            <div>
              <h2>
                <nobr>{element.nobr1}</nobr> <br />
                <nobr>{element.nobr2}</nobr> <br />
                <nobr>{element.nobr3}</nobr>
              </h2>
              <a className="btn btn-primary btn-burgund" target="_self" href="/filaments/z-peek/" >
                Learn more
              </a>
            </div>
        </div>
        ))}
        
      </div>

      
    </div>
  );
};

export default Home;
