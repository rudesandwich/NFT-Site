import { TextBtn } from "../components/TextBtn";
import Navbar from "../components/sections/NavBar";
import Footer from "../components/sections/Footer";
import WaterQueen from "../components/WaterQueen";
import NFTInfoCard from "../components/NFTinfoCard";
import Storm from "../components/sections/storm/Storm";
import Discover from "../components/sections/Discover";
import Hero from "../components/sections/Hero";
import ExploreSection from "../components/sections/ExploreSection";
import { cardDetails } from "../extra-information/cardDetails";
import { waterQueenImg } from "../extra-information/waterQueenDetails";
import "../style/homepage.css";


function Homepage() {
    return (
        <>
            <Navbar />
            <Hero/>
            
            <div className="nft-card-information">
                {cardDetails.map((cardDetails) => (
                    <NFTInfoCard text={cardDetails.text} />
                ))}
            </div>
           <ExploreSection/>

            <div className="communitySection">
                <div className="sectionInfo">
                    <p className="title">Community</p>
                    <p className="details">Join our Community</p>
                </div>
                <div className="joinInfo">
                    <p>
                        Join us on the cutting edge of digital ownership and experience the
                        future of digital assets with NFTs.
                    </p>
                    <TextBtn text="Join us" />
                </div>
            </div>
            <div className="collectionSection">
                <div className="sectionInfo">
                    <p className="title">Collections</p>
                    <p className="details">Our Top Collections</p>
                </div>
                <p className="title waterTitle">Water Queen</p>
                <div className="waterQueen">
                    {waterQueenImg.map((waterQueenImg) => (
                        <WaterQueen img={waterQueenImg.img} />
                    ))}
                </div>
                
                <Storm/>
            </div>
            <Discover />
            <Footer />
        </>
    );
}

export default Homepage;
