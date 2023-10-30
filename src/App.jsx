import "./App.css";
import "./AppResponsive.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import ContactUs from "./Components/ContactUs";
import OurMission from "./Components/OurMission";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import WhoWeWork from "./Components/WhoWeWork";
import WhyUs from "./Components/WhyUs";

function App() {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <WhyUs></WhyUs>
      <Testimonial></Testimonial>
      <OurMission></OurMission>
      <ContactUs></ContactUs>
      <WhoWeWork></WhoWeWork>
    </>
  );
}

export default App;
