import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="subscriber-email flex items-center justify-between flex-col mb-5">
        <h2 className="mr-4 mb-4">SUBSCRIBE TO OUR SALES</h2>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Email"
            className="border-b border-black w-80 outline-none flex-grow"
            style={{
              paddingRight: "10px",
            }}
          />
          <p className="text-white ml-4 cursor-pointer bg-black p-4">
            SUBSCRIBE
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-20 text-center md:text-left mb-6 mt-4">
        <div>
          <h3 className="uppercase font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Call Now: +55 xx xxxxx-xxxx</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Track Your Order</a>
            </li>
            <li>
              <a href="#">Book an Appointment</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase font-semibold mb-4">Our Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#">Find a Boutique ↗</a>
            </li>
            <li>
              <a href="#">Careers ↗</a>
            </li>
            <li>
              <a href="#">Corporate Responsibility</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="uppercase font-semibold mb-4">Legal Area</h3>
          <ul className="space-y-2">
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Conditions of Sale</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Do Not Sell My Info</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="uppercase font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#">
              <FaInstagram className="fab fa-instagram" />
            </a>
            <a href="#">
              <FaFacebook className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <FaTwitter className="fab fa-twitter" />
            </a>
            <a href="#">
              <FaYoutube className="fab fa-youtube" />
            </a>
            <a href="#">
              <FaPinterest className="fab fa-pinterest" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black text-white flex flex-col md:flex-row justify-between items-center py-4 px-6 text-xs h-15">
        <div>Shop in: Brazil </div>
        <div className="mt-2 md:mt-0">
          COPYRIGHT © 2025 — Desenvolvido por
          <a
            href="https://github.com/luique16"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mx-1 hover:text-gray-300"
          >
            Luís Henrique
          </a>
          &
          <a
            href="https://github.com/Vit0rSilveira"
            target="_blank"
            rel="noopener noreferrer"
            className="underline mx-1 hover:text-gray-300"
          >
            Vitor da Silveira
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
