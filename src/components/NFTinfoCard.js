import "../style/nftinfocard.css";
import "aos/dist/aos.css";

function NFTInfoCard(props) {

  return (
    <div className="nftInfoCard" data-aos="fade-up">
      <p>{props.text}</p>
    </div>
  );
}

export default NFTInfoCard;
