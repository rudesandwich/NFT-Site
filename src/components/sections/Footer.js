import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../../style/footer.css'
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <div className="footer">
                <div className="sectionInfo">
                    <p className="title">Contact us</p>
                    <p className="details">We want to hear from you</p>
                </div>
               <div className="footerDetails">
                    <div className="footerLeft">
                        <div className="social">
                                <FacebookIcon/>
                                <LinkedInIcon/>
                                <TwitterIcon/>
                        </div>
                        
                            <p className='footerText'>If you have any questions or comments, please don't hesitate to contact us.</p>
                            <p className='footerEmail'>
                            info@example.com
                            </p>
                        
                    </div>
                    <div className='footerRight'>
                        <div className='footerListCol'>
                            <ul className='footerList'>
                                    <li><Link to='/developers' className="footerListText">Developers</Link></li>
                                    <li><Link to='/network' className="footerListText">Network</Link></li>
                                    <li><Link to='/ecosystem' className="footerListText">Ecosystem</Link></li>
                                    <li><Link to='/docs' className="footerListText">Docs</Link></li>
                            </ul>
                         
                        
                        </div>
                        <div className='footerListCol'>
                            <ul className='footerList'>
                                    <li><Link to='/developers' className="footerListText">Resource</Link></li>
                                    <li><Link to='/network' className="footerListText">White Paper</Link></li>
                                    <li><Link to='/ecosystem' className="footerListText">Support</Link></li>
                                    <li><Link to='/docs' className="footerListText">Branding</Link></li>
                            </ul>
                         
                        
                        </div>
                        <div className='footerListCol'>
                            <ul className='footerList'>
                                    <li><Link to='/developers' className="footerListText">About</Link></li>
                                    <li><Link to='/network' className="footerListText">Events</Link></li>
                                    <li><Link to='/ecosystem' className="footerListText">Partners</Link></li>
                                    <li><Link to='/docs' className="footerListText">Our NFTs</Link></li>
                            </ul>
                         
                        
                        </div>
                    
                    
                    </div>
               </div>
            </div>
    )
}

export default Footer;