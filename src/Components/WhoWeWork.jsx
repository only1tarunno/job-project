import Marquee from "react-fast-marquee";
import l1 from "../assets/l1.jpg";
import l2 from "../assets/l2.jpg";
import l3 from "../assets/l3.jpg";
import l4 from "../assets/l4.jpg";
import l5 from "../assets/l5.jpg";

const WhoWeWork = () => {
  return (
    <div className="work">
      <div className="work-container mx-auto px-5 lg:px-0">
        <h2>Who we work with</h2>
        <div className="mt-10">
          <Marquee>
            <img src={l1} alt="" className="work-img" />
            <img src={l2} alt="" className="work-img" />
            <img src={l3} alt="" className="work-img" />
            <img src={l4} alt="" className="work-img" />
            <img src={l5} alt="" className="work-img" />
            <img src={l1} alt="" className="work-img" />
            <img src={l2} alt="" className="work-img" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default WhoWeWork;
