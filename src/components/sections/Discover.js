import cyberSkul from "../../assets/images/cyberSkul.png";
import { TextBtn } from "../TextBtn";

function Discover () {
    return (
        <div className="discoverSection">
                <div className="sectionInfo">
                    <p className="title">Discover</p>
                    <p className="details">Own a piece of the digital world</p>
                </div>
                <div className="discoverSecDetails">
                    <div className="discoverLeft">
                        <p className="discoverText">
                            NFTs are built on blockchain technology, which ensures that they
                            are secure and transparent.{" "}
                        </p>
                        <TextBtn text="Discover" />
                    </div>
                    <div className="discoverLeft">
                        <div className="discoverImage">
                            <img src={cyberSkul} alt="" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Discover;