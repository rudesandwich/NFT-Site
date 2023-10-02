import Eth from "../../assets/images/EthereumLogo.png";
import "../../style/stormcard.css";

function StormCard(props) {
  return (
    <div className="stormcard">
      <img className="stormNft" src={props.img} alt="nfts" />
      <div className="stormtextContent">
        <div className="stormTop">
          <p className="stormCardTitle">{props.title}</p>
          <p className="stormcardId">{props.collectionId}</p>
        </div>
        <div className="stormBottom">
          <p className="collectionName">{props.collectionName}</p>
          <p className="stormCardPrice ">
            <img className="stormEth" src={Eth} alt="Ethereum Logo" /> {props.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StormCard;
