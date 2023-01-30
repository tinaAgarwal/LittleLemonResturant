import './Card.css';
import {AiOutlineFieldTime} from 'react-icons/ai';

function Card({title, description, order, price, image}) {
    //const url = "../assets/" + image;
    const images = require.context('../assets', true);
    let url = images(`./${image}`);
    return(
        <div className="card">
            <img className="card_photo" src={url} width="260px" height="210px" />
            <div className='card_content'>
                <h1 className="card_title">{title}</h1>
                <h2 className="card_price">{price}</h2>
                <p className="card_description">{description}</p>
                <button className='btn'>{order} <AiOutlineFieldTime className='icon' /></button>
            </div>
        </div>
    );
}

export default Card;