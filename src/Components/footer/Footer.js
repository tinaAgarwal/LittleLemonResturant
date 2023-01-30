import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa';
import './Footer.css';
import logo from "../assets/Logo.svg";

function Footer () {
    return(
        <div className='footer'>
            <div className='social'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon' />
                <FaTwitter className='icon' />
                <FaPinterest className='icon' />
            </div>
            <div className='container'>
                <div className='col'>
                    <img src={logo} />
                </div>
                <div className='col'>
                    <h3>Doormat Navigation</h3>
                    <p>Home</p>
                    <p>About</p>
                    <p>Menu</p>
                    <p>Reservation</p>
                    <p>Order Online</p>
                </div>
                <div className='col'>
                    <h3>Company</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>About Us</p>
                    <p>Address</p>
                    <p>Email</p>
                </div>
                <div className='col'>
                    <h3>Legal</h3>
                    <p>Company</p>
                    <p>Details</p>
                    <p>Planning</p>
                    <p>About Us</p>
                    <p>Address</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;