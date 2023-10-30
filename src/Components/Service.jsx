import PropTypes from "prop-types";

const Service = ({ service }) => {
  const { name, img, price, short_description } = service;
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="service-card">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="card-body">
        <h2>{name}</h2>
        <p className="text-base lg:text-lg ">{short_description}</p>
        <div className="service-footer">
          <div className="service-footer-left">
            <p>
              <span>$</span>
              Price : {price}
            </p>
          </div>
          <div className="service-footer-right">
            <button className="btn text-base md:text-xl bg-[#203872]">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
Service.propTypes = {
  service: PropTypes.object.isRequired,
};
