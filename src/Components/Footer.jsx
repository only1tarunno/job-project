const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <h3>Come visit us</h3>
          <p>Tangail,Dhaka bangladesh</p>
          <p>
            Phone: <a href="tel:01743821440">01569130064</a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:tarunno281@gmail.com">tarunno281@gmail.com</a>
          </p>
        </div>
        <div className="right">
          <ul>
            <li>
              <a href="https://www.facebook.com/only1tarunno">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/only1tarunno/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/only1tarunno">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
