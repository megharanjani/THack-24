import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assests/data.json";

const popular = () => {
  return (
    <div id="work">
      <h2>POPULAR BOOKS</h2>
      <section>
        <article>
          <Carousel
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          interval={2000}
          infiniteLoop={true}
          autoPlay={true}
          >
            {data.books.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <h4>{i.genre}</h4>
                  <p>{i.description}</p>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default popular;