import { TextBtn } from "../components/TextBtn";
import Navbar from '../components/NavBar';
import Footer from "../components/Footer";
import WaterQueen from "../components/WaterQueen";
import NFTInfoCard from "../components/NFTinfoCard";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkullOnCap from '../assets/images/skull-on-cap1.png';
import { cardDetails } from "../extra-information/cardDetails";
import '../style/homepage.css';
import { waterQueenImg } from "../extra-information/waterQueenDetails";
import cyberSkul from "../assets/images/cyberSkul.png";



function Homepage() {
    return (
        <>
            <Navbar />
            <div className="hero">

                <div className="heroLeft">
                    <h1>Unlock the Future of Digital Ownership with NFTs</h1>
                    <p>Securely Buy, Sell, and Collect Unique Digital Assets</p>
                    <div className="heroBtn">
                        <TextBtn text="Explore" />
                        <buton className="watchBtn"><PlayCircleOutlineIcon /> Watch Video</buton>
                    </div>
                </div>
                <div className="heroRight">
                    <img src={SkullOnCap} alt="a skull" />
                </div>
            </div>
            <div className="nft-card-information">
                {cardDetails.map(
                    cardDetails => (
                        <NFTInfoCard text={cardDetails.text} />
                    )
                )}

            </div>
            <div className="exploreSection">
                <div className="sectionInfo">
                    <p className="title">Explore</p>
                    <p className="details">Discover and Explore NFTs</p>
                </div>
            </div>

            <div className="communitySection">
                <div className="sectionInfo">
                    <p className="title">Community</p>
                    <p className="details">Join our Community</p>
                </div>
                <div className="joinInfo">
                    <p>Join us on the cutting edge of digital ownership and experience the future of digital assets with NFTs.</p>
                    <TextBtn text="Join us" />

                </div>
            </div>
            <div className="collectionSection">
                <div className="sectionInfo">
                    <p className="title">Collections</p>
                    <p className="details">Our Top Collections</p>
                </div>
                <p className="title">Water Queen</p>
                <div className="waterQueen">

                    {waterQueenImg.map(
                        waterQueenImg =>
                        (
                            <WaterQueen
                                img={waterQueenImg.img}
                            />
                        )

                    )}


                </div>
                <p className="title">Storm</p>
                            <div className="stormSection">
                                <div className="topStorm">
                                        
                                </div>
                                <div className="bottomStorm">

                                </div>
                            </div>

            </div>
            <div className="discoverSection">
                <div className="sectionInfo">
                    <p className="title">Discover</p>
                    <p className="details">Own a piece of the digital world</p>
                </div>
                <div className="discoverSecDetails">
                    <div className="discoverLeft">
                        <p className="discoverText">NFTs are built on blockchain technology, which ensures that they are secure and transparent. </p>
                        <TextBtn text="Discover" />
                    </div>
                    <div className="discoverLeft">
                        <div className="discoverImage">
                            <img src={cyberSkul} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Homepage;