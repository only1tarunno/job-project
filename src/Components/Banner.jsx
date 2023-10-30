import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero" id="banner">
      <div className="hero-content">
        <h1 data-aos="fade-up" data-aos-duration="500">
          Get an unforgettable Event Experience with us
        </h1>
        <p data-aos="fade-up" data-aos-duration="1000">
          Experience the extraordinary with us as we redefine the art of event
          planning. From meticulously curated details to seamless execution, our
          team is dedicated to crafting unforgettable moments that linger in
          your memory long after the event ends.
        </p>
        <div data-aos="fade-up" data-aos-duration="1500">
          <Link to="/contact">
            <button className="btn">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
