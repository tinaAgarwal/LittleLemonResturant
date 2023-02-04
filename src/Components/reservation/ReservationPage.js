import Reservation from "../reservation/Reservation";
import Footer from '../footer/Footer';
import Nav from '../navbar/Nav';
import './Reservation.css';

function ReservationPage({state, dispatch}) {
    return(
        <>
            <Nav />
            <h1 className="reservation-h1">Book Your Table</h1>
            <Reservation state={state} dispatch={dispatch} />
            <Footer />
        </>
    );
}

export default ReservationPage;