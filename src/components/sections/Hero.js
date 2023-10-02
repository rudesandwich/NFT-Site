import SkullOnCap from "../../assets/images/skull-on-cap1.png";
import { TextBtn } from "../TextBtn";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import "aos/dist/aos.css";

function Hero () {
    return (
        <div className="hero" data-aos= "fade-up">
                <div className="heroLeft">
                    <h1>Unlock the Future of Digital Ownership with NFTs</h1>
                    <p>Securely Buy, Sell, and Collect Unique Digital Assets</p>
                    <div className="heroBtn">
                        <TextBtn text="Explore" />
                        <buton className="watchBtn">
                            <PlayCircleOutlineIcon /> Watch Video
                        </buton>
                    </div>
                </div>
                <div className="heroRight">
                    <img src={SkullOnCap} alt="a skull" />
                </div>
            </div>
    )
}

export default Hero;