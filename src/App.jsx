import "./App.css";
import "./AppResponsive.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Services from "./Components/Services";
import WhyUs from "./Components/WhyUs";

function App() {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <WhyUs></WhyUs>
    </>
  );
}

export default App;
