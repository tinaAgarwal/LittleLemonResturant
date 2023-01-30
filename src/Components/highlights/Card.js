function Card({title, description, order, price, image}) {
    //const url = "../assets/" + image;
    const images = require.context('../assets', true);
    let url = images(`./${image}`);
    return(
        <div className="card">
            <img className="card_photo" src={url} width="260px" height="210px" />
            <h1 className="card_title">{title}</h1>
            <h2 className="card_price">{price}</h2>
            <p className="card_description">{description}</p>
            <h6 className="card_order">{order}</h6>
        </div>
    );
}

export default Card;