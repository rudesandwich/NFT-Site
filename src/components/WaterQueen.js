import '../style/waterQueen.css'
import WaterCatInfo from './WaterCategoryInfo';


function WaterQueen (props) {
    return (
        <div className='WaterQueenImage'>
            <img className='queenimg' src={props.img} alt=''/>
            <WaterCatInfo/>
        </div>
    )
}

export default WaterQueen;