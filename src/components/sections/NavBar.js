import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { TextBtn } from "../TextBtn";
import "../../style/navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }

  return (
    <nav data-aos="fade-down">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo of the NFT website" className="logoImg" />
        </Link>
      </div>
      <div className="navLinks" ref={navRef}>
        <div className="links">
          <button className="mobileNaExit" onClick={showNavBar}>
           <FaTimes/>
          </button>
          <ul className="ulList">
            <li>
              {" "}
              <Link to="/" className="navLinkItem">
                Home
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/explore" className="navLinkItem">
                Explore
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/feature" className="navLinkItem">
                Feature
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/Resource" className="navLinkItem">
                Resource
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/our-community" className="navLinkItem">
                Our Community
              </Link>{" "}
            </li>
          </ul>
        </div>
        <TextBtn text="Explore" />
      </div>
      <button className="mobileNav" onClick={showNavBar}>
        <FaBars/>
      </button>
    </nav>
  );
}
export default Navbar;
