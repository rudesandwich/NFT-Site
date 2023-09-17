import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png';
import { TextBtn } from "./TextBtn";
import '../style/navbar.css';


function Navbar () {
    return (
        <nav>
            <div className="logo">
            <Link to='/' ><img src={Logo} alt="Logo of the NFT website" className="logoImg"/></Link>
                
            </div>
            <div className="navLinks">
                <div className="links">
                    <ul className="ulList">
                        <li> <Link to='/' className="navLinkItem">Home</Link> </li>
                        <li> <Link to='/explore' className="navLinkItem">Explore</Link> </li>
                        <li> <Link to='/feature' className="navLinkItem">Feature</Link> </li>
                        <li> <Link to='/Resource' className="navLinkItem">Resource</Link> </li>
                        <li> <Link to='/our-community' className="navLinkItem">Our Community</Link> </li>
                        
                    </ul>
                </div>
                <TextBtn text="Explore"/>
            </div>
        </nav>
    )
}
export default Navbar;