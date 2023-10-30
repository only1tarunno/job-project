import "./App.css";
import "./AppResponsive.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import WhyUs from "./Components/WhyUs";

function App() {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <WhyUs></WhyUs>
      <Testimonial></Testimonial>
    </>
  );
}

export default App;
