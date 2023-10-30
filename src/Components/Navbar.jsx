import img from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <ul>
            <li>
              <a href="#banner">Home</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#services">services</a>
            </li>
            <li>
              <a href="contactus">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
