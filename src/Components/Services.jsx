import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("event.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="service" id="services">
      <div className="service-container">
        <h3
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-[#203872] font-bold text-xl lg:text-3xl text-center"
        >
          Services
        </h3>
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="pb-3 text-[#0a0b09] text-3xl text-center my-3 lg:text-5xl font-bold"
        >
          Event Service We Provide
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-base text-center lg:text-lg max-w-[700px] mx-auto"
        >
          Discover our comprehensive event services tailored for weddings,
          ensuring your special day is a seamless and unforgettable celebration
          of love.
        </p>
        <div className="service-card-container">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
