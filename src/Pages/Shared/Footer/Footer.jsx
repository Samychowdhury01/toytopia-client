import logo from "../../../assets/logo3.png";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white mt-32">
      <div>
      <img src={logo} alt=""/>

        <p>
          <span className="font-bold">Toytopia</span>
          <br />
          Where Imagination Finds Its Playground!
        </p>
        <div className="flex gap-1">
          {/* google */}
          <div className="w-9 h-9 rounded-full bg-gray-800 text flex items-center justify-center">
            <FaGoogle className="text-white" />
          </div>
          {/* Twitter */}
          <div className="w-9 h-9 rounded-full bg-gray-800 text flex items-center justify-center">
            <FaTwitter className="text-white" />
          </div>
          {/* instagram */}
          <div className="w-9 h-9 rounded-full bg-gray-800 text flex items-center justify-center">
            <FaInstagram className="text-white" />
          </div>
          {/* LinkedIn */}
          <div className="w-9 h-9 rounded-full bg-gray-800 text flex items-center justify-center">
            <FaLinkedin className="text-white" />
          </div>
        </div>
        <p>
          <span>&copy; 2023 Toytopia. All rights reserved.</span>
        </p>
      </div>
      <div>
        <span className="footer-title">contact information</span>
        <p>Address: 123 Main Street, City, State, Country</p>
        <p>Phone: +1 555-123-4567</p>
        <p>Email: info@example.com</p>
      </div>
      <div>
        <span className="footer-title">Toys Category</span>
        <a className="link link-hover">marvel</a>
        <a className="link link-hover">avengers</a>
        <a className="link link-hover">transformers</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
