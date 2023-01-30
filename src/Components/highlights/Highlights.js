import './Highlights.css';
import Card from './Card';

function Highlights () {
    return(
        <div className="highlights">
            <h1>This Weeks special!</h1>
            <button className='btn'>Online Menu</button>
            <Card
                title="Greek Salad"
                description ="Greek salad or horiatiki salad is a popular salad in Greek cuisine generally made with pieces of cucumbers, onion, feta cheese and olives"
                order="Order a delivery"
                price="$15.99"
                image="greek salad.jpg"
                />
            <Card
                title="Greek Salad"
                description ="Greek salad or horiatiki salad is a popular salad in Greek cuisine generally made with pieces of cucumbers, onion, feta cheese and olives"
                order="Order a delivery"
                price="$15.99"
                image="bruchetta.svg"
                />
            <Card
                title="Greek Salad"
                description ="Greek salad or horiatiki salad is a popular salad in Greek cuisine generally made with pieces of cucumbers, onion, feta cheese and olives"
                order="Order a delivery"
                price="$15.99"
                image="lemon dessert.jpg"
                />
        </div>
    );
}

export default Highlights;