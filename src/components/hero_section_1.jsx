import React from "react";
import "./hero_section_1.css";
import logo192 from "./logo192.png";
import star from "./5_start.jpg";
import article_1 from "./article_1.png";
import article_2 from "./article_2.jpeg";

const card_material = [
  {
    img_u: article_1,
    Title: "News Article",
    Desc: "  Description - sectetur adipisicing elit.",
    img_b: star,
    text_b: "Author name",
  },
  {
    img_u: article_2,
    Title: "Computer Articles",
    Desc: "  Description - sectetur adipisicing elit.",
    img_b: star,
    text_b: "Author name",
  },
  {
    img_u: logo192,
    Title: "React Articles",
    Desc: "  Description - sectetur adipisicing elit.",
    img_b: star,
    text_b: "Author name",
  },
];

function Hero_section_1() {
  return (
    <div className="main">
      <div className="card_outer">
        <div className="card">
          {card_material.map((card_content, index) => (
            <div className="card-content">
              <img
                src={card_content.img_u}
                alt={""}
                className="article_images"
              />
              <h2>{card_content.Title}</h2>
              <h4 className="card-desc">{card_content.Desc}</h4>
              <hr className="line" />
              <div className="bottom-section">
                <img src={card_content.img_b} alt="" className="star_img" />
                <h4>{card_content.text_b}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button>See All Articles</button>
      <h2 id="Feature_Articles">Featured Tutorials</h2>

      <div className="card_2">
        <div className="card_outer">
          <div className="card">
            {card_material.map((card_content) => (
              <div className="card-content">
                <img src={card_content.img_u} alt="" className="article_images" />
                <h2>{card_content.Title}</h2>
                <h4 className="card-desc">{card_content.Desc}</h4>
                <hr className="line" />
                <div className="bottom-section">
                  <img src={card_content.img_b} alt="" className="star_img" />
                  <h4>{card_content.text_b}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <button>See All Articles</button>
      <h2 id="Feature_Articles">Featured Tutorials</h2>
    </div>
  );
}

export default Hero_section_1;

