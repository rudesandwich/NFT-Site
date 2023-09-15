
import '../style/nftinfocard.css';
function NFTInfoCard (props) {
    return (
        <div className="nftInfoCard">
            <p>{props.text}</p>
        </div>
    )
}

export default NFTInfoCard;