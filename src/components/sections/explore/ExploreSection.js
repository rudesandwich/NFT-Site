import Maskgroup1 from "../../../assets/images/Maskgroup1.png";
import Maskgroup2 from "../../../assets/images/Maskgroup2.png";
import Maskgroup3 from "../../../assets/images/Maskgroup3.png";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import "./explore.css"

function ExploreSection () {
    return (
        <div className="exploreSection">
        <div className="sectionInfo" data-aos= "fade-up">
            <p className="title" >Explore</p>
            <p className="details">Discover and Explore NFTs</p>
        </div>
        <div className="exploreDetails">
            <div className="exploreImages" data-aos= "fade-right">
                <img
                    src={Maskgroup1}
                    className="img1"
                    alt="a gorrila wearing cap and goggles"
                />
                <img
                    src={Maskgroup2}
                    className="img2"
                    alt="skull smoking wearing a blue cap"
                />
                <img
                    src={Maskgroup3}
                    className="img3"
                    alt="a cyber skull"
                />
            </div>
            <div className="exploreTextDetails" data-aos= "fade-left">
                <p>
                    We offer a wide range of NFTs for you to discover and invest in,
                    and our platform makes it easy for you to buy, sell, and trade
                    your digital assets with confidence
                </p>
                <div className="exploreTextDetailsBtns">
                    <PlayCircleOutlineIcon
                        style={{
                            width: "56px",
                            height: "56px",
                            color: "#D200A3",
                            cursor: "pointer",
                        }}
                    />
                    <button className="discoverBtn">Discover</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ExploreSection;