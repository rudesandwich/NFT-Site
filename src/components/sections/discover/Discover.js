import cyberSkul from "../../../assets/images/cyberSkul.png";
import { TextBtn } from "../../TextBtn";
import "../discover/discover.css"

function Discover () {
    return (
        <div className="discover">
            <div className="discoverSection" >
                {/* <div className="sectionInfo" data-aos= "fade-up">
                    <p className="title">Discover</p>
                    <p className="details">Own a piece of the digital world</p>
                </div> */}
                <div className="discoverSecDetails">
                    <div className="discoverLeft" data-aos= "fade-up">
                        <p className="discoverText">
                            NFTs are built on blockchain technology, which ensures that they
                            are secure and transparent.{" "}
                        </p>
                        <TextBtn text="Discover" />
                    </div>
                    <div className="discoverRight" data-aos= "fade-up">
                        <div className="discoverImage">
                            <img src={cyberSkul} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Discover;