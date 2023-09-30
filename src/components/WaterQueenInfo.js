import '../style/waterQueenInfo.css'
import EthLogo from '../assets/images/EthereumLogo.png'

function WaterQueenInfo (props) {
    return (
        <div className='waterQueenInfo'>
                    <p className='waterDetailsTitle'>Water Queen</p>
                    <p className='waterDetailsCat'>actrin collection</p>
                    <div className='waterCatInfo'>
                        <p className='waterPrice'> <img src={EthLogo} alt='Ethereum Logo'/> 0.05</p>
                        <p className='waterId'>#3132</p>
                    </div>
            </div>
    )
}

export default WaterQueenInfo;