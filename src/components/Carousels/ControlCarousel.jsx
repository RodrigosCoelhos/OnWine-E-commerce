import "/src/css/Carousel.css";

import Carousel from "react-bootstrap/Carousel";
import { Link, useNavigate } from "react-router-dom";

export function ControlCarousel() {
  const navigate = useNavigate();

  return (
    <div className="content-carrousel">
      <Carousel variant="dark">
        <Carousel.Item>
          <Link to="/produto/Cartuxa%20DOC%20Alentejo%20Vinho%20Tinto/1">
            <img src="assets/banner1.png" alt="First slide" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              const sectionIdToScrollTo = "content-card-about";
              window.scrollTo({
                top: document
                  .getElementById(sectionIdToScrollTo)
                  .getBoundingClientRect().top,
              });
            }}
          >
            <img src="assets/banner2.png" alt="Sobre nós" />
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
