import mission from "../assets/mission.png";
import vision from "../assets/vision.png";

const OurMission = () => {
  return (
    <div className="mission">
      <div className="mission-top">
        <h2>Our Commitment to Excellence</h2>
        <p>Navigating a Bright Future: TeamEvents&apos;s Mission and Vision</p>
      </div>
      <div className="work-container mission-container">
        <div className="mission-card">
          <img src={mission} alt="" />
          <h3 className="text-[#203872] font-bold text-3xl mb-2">
            Our Mission
          </h3>
          <p className="text-lg font-semibold">
            Our mission is to transform dreams into unforgettable moments. We
            are dedicated to crafting exceptional events that celebrate love,
            joy, and togetherness. With creativity, precision, and unwavering
            commitment, we aim to exceed our clients&apos; expectations by
            delivering seamless, personalized, and extraordinary experiences.
            Our mission is to make every event a cherished memory.
          </p>
        </div>
        <div className="mission-card">
          <img src={vision} alt="" />
          <h3>Our Vision</h3>
          <p>
            Our vision is to be the premier event planning company, known for
            innovation, excellence, and a deep understanding of our
            clients&apos; aspirations. We strive to be at the forefront of event
            design, always pushing boundaries and creating one-of-a-kind
            celebrations. We envision a future where every event we touch is a
            masterpiece of creativity and love, where our clients&apos; visions
            are brought to life with elegance and perfection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
