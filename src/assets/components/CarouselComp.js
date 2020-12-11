// https://react-bootstrap.github.io/components/carousel/
import { Carousel } from "react-bootstrap";
// https://react-icons.netlify.com/#/
import { FaLink } from "react-icons/fa";
import { carouselData } from "../../data";

const CarouselComp = () => {
  return (
    <Carousel>
      {carouselData.map((item) => {
        return (
          <Carousel.Item key={item.id}>
            <img className="d-block w-100" src={item.image} alt="First slide" />
            <Carousel.Caption>
              <a href={item.link} target="_blank" rel="noreferrer">
                <FaLink />
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselComp;
