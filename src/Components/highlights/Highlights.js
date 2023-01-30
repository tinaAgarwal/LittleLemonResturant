import Card from './Card';
import './Highlights.css';

function Highlights () {
    return(
        <div className="highlights">
            <div className='highlights-content'>
                <h1>This Weeks special!</h1>
                <button className='btn'>Online Menu</button>
            </div>
            <div className='card-container'>
                <Card
                    title="Greek Salad"
                    description ="Greek salad or horiatiki salad is a popular salad in Greek cuisine generally made with pieces of cucumbers, onion, feta cheese and olives"
                    order="Order a delivery"
                    price="$15.99"
                    image="greek salad.jpg"
                    className="card-style"
                    />
                <Card
                    title="Greek Salad"
                    description ="Greek salad or horiatiki salad is a popular salad in Greek cuisine generally made with pieces of cucumbers, onion, feta cheese and olives"
                    order="Order a delivery"
                    price="$15.99"
                    image="bruchetta.svg"
                    className="card-style"
                    />
                <Card
                    title="Greek Salad"
                    description ="Greek salad or horiatiki salad is a popular salad in Greek cuisine generally made with pieces of cucumbers, onion, feta cheese and olives"
                    order="Order a delivery"
                    price="$15.99"
                    image="lemon dessert.jpg"
                    className="card-style"
                    />
            </div>
        </div>
    );
}

export default Highlights;