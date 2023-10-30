import choose from "../assets/choose.jpg";
const WhyUs = () => {
  return (
    <div className=" md:py-20 py-16 ">
      <div className="whyUs-container">
        <h2 data-aos="fade-up" data-aos-duration="500">
          Why Choose Us?
        </h2>
        <div className="whyUs-inner-container">
          <div className="whyUs-content">
            <div>
              <h3 data-aos="fade-up" data-aos-duration="1000">
                Experience and Expertise
              </h3>
              <p data-aos="fade-up" data-aos-duration="1500">
                With years of experience in the industry, our team brings a
                wealth of knowledge and expertise to every wedding we plan. We
                have seen it all and know how to handle every detail with
                precision.
              </p>
            </div>
            <div>
              <h3 data-aos="fade-up" data-aos-duration="2000">
                Personalized Approach
              </h3>
              <p data-aos="fade-up" data-aos-duration="2500">
                We understand that no two love stories are the same. That is why
                we take the time to get to know you, your vision, and your
                preferences, ensuring that every aspect of your wedding is
                tailored to your unique story.
              </p>
            </div>
            <div>
              <h3 data-aos="fade-up" data-aos-duration="3000">
                Stress-Free Planning
              </h3>
              <p data-aos="fade-up" data-aos-duration="3500">
                Planning a wedding can be overwhelming, but with us by your
                side, you can relax and enjoy the journey. We handle all the
                logistics, so you can focus on savoring every moment.
              </p>
            </div>
            <div>
              <h3 data-aos="fade-up" data-aos-duration="4000">
                Exceptional Service
              </h3>
              <p data-aos="fade-up" data-aos-duration="4500">
                Your happiness is our priority. We pride ourselves on providing
                exceptional service, and we are here to answer your questions,
                address your concerns, and make your wedding day as smooth and
                joyful as possible.
              </p>
            </div>
          </div>
          <div className="whyUsImg">
            <img
              data-aos="fade-up"
              data-aos-duration="4000"
              src={choose}
              className="w-full"
              alt="Why-choose-pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
