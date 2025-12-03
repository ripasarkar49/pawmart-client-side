import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaTwitterSquare,
} from "react-icons/fa";
import logo from "../assets/paw_logo.png";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-base-200 shadow-sm w-11/12 mx-auto p-5 ">
      <div
        className="  grid lg:grid-cols-5 grid-cols-1
          gap-8  text-center "
      >
        <div className="">
          <div className="flex gap-3 items-center text-center">
            <img src={logo} className="w-8 h-8" />
            <Link
              to="/"
              className="text-3xl font-extrabold bg-linear-to-r from-pink-500 to-blue-900 text-transparent bg-clip-text"
            >
              PawMart
            </Link>
          </div>
          <div className="w-full h-px bg-gray-400 my-2"></div>
          <p className="text-sm ">
            "PawMart brings pet lovers together, helping pets find homes and
            owners find quality care products.Connect, adopt, and shop for
            pets—PawMart makes pet care easy and local.PawMart links pet owners
            and buyers for adoptions and trusted pet products.!!"
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li>About PawMart</li>
            <li>Why PawMart</li>
            <li>Contact Saled</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="space-y-1 text-sm">
            <li>Pet Supplies</li>
            <li>Success Stories</li>
            <li>PawMart App</li>
          </ul>
        </div>
        <div>
          <h4 className=" font-semibold mb-2">Information</h4>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div>
          <h1 className=" font-semibold mb-2">Social links</h1>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center justify-center gap-2 ">
              <FaTwitterSquare /> @PawMart — Twitter
            </li>
            <li className="flex items-center justify-center gap-2 ">
              <FaLinkedin />
              @PawMart — LinkedIn
            </li>
            <li className="flex items-center justify-center gap-2">
              <FaFacebook />@PawMart — Facebook
            </li>
            <li className="flex items-center justify-center gap-2">
              <FaMailBulk />
              support@pawmart.com
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center  text-sm mt-8">
        © 2025 Ripa Sarkar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
