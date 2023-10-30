import aboutimg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img
          data-aos="fade-up"
          data-aos-duration="2000"
          src={aboutimg}
          alt=""
        />
      </div>
      <div className="about-right">
        <h3 data-aos="fade-up" data-aos-duration="500">
          About US
        </h3>
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Making Dreams Into Reality
        </h2>
        <p data-aos="fade-up" data-aos-duration="1500">
          We are passionate about transforming your wedding dreams into
          beautiful realities. With years of experience and a deep understanding
          of the intricacies involved in planning and executing social events,
          especially weddings, we take immense pride in our role as your trusted
          event partner.
        </p>
        <p data-aos="fade-up" data-aos-duration="2000">
          Our dedicated team of event professionals is committed to delivering
          the highest level of excellence in every aspect of your special day.
          From the initial consultation to the final farewell, we work closely
          with you to bring your vision to life, ensuring that every detail is
          thoughtfully considered and flawlessly executed.
        </p>
        <p data-aos="fade-up" data-aos-duration="2500">
          We understand that your wedding is a once-in-a-lifetime event, and
          that&apos;s why we approach each project with a genuine commitment to
          making it as extraordinary as your love story. Let us be a part of
          your journey, and together, we will craft the wedding of your dreams.
        </p>
      </div>
    </div>
  );
};

export default About;
