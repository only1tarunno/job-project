const ContactUs = () => {
  return (
    <div className="contact" id="contactus">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form className="form">
          <input
            type="text"
            placeholder="Name"
            className="w-full my-4 p-3 focus:outline-none border"
          />
          <div className="form-inner">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 my-4 p-3 focus:outline-none border"
            />
            <input
              type="text"
              placeholder="Phone"
              className="flex-1 my-4 p-3 focus:outline-none border"
            />
          </div>

          <textarea
            className="w-full my-4 p-3 focus:outline-none border"
            placeholder="Message"
            rows="4"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="btn  bg-[#54595f] hover:bg-[#323538] border-[#54595f] hover:text-white text-white text-base md:text-xl"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
