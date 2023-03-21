import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Section, Img } from "./FeaturedStyles";
import { SLIDERS } from "../Constants";
import { Key } from "react";

const Featured = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      {SLIDERS.map((slider) => {
        return (
          <Section key={Key}>
            <a>
              <Img src={slider.img} alt={slider.alt} />
            </a>
          </Section>
        );
      })}
    </Carousel>
  );
};

export default Featured;
