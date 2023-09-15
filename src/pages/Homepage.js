import { ExploreBtn } from "../components/ExploreBtn";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkullOnCap from '../assets/images/skull-on-cap1.png';
import NFTInfoCard from "../components/NFTinfoCard";
import { cardDetails } from "../extra-information/cardDetails";
import '../style/homepage.css';
import Navbar from '../components/NavBar';


function Homepage() {
    return (
        <>
            <Navbar />
            <div className="hero">

                <div className="heroLeft">
                    <h1>Unlock the Future of Digital Ownership with NFTs</h1>
                    <p>Securely Buy, Sell, and Collect Unique Digital Assets</p>
                    <div className="heroBtn">
                        <ExploreBtn />
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
                    <button className="joinInfoBtn">Join us</button>
                </div>
            </div>
            

        </>
    )
}

export default Homepage;