import '../style/waterQueen.css'
import WaterQueenInfo from './WaterQueenInfo';


function WaterQueen (props) {
    return (
        <div className='WaterQueenImage' data-aos= "fade-right">
            <img className='queenimg' src={props.img} alt=''/>
            <WaterQueenInfo/>
        </div>
    )
}

export default WaterQueen;