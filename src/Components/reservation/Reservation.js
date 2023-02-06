import './Reservation.css';
import { useState } from 'react';

function Reservation({state, dispatch}) {
    const date = new Date();
    const [formVal, setFormVal] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Reservation made successfully! ");
        setFormVal({
            date: new Date(),
            time: "",
            noOfGuest: 1,
            occasion: ""
        });
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormVal(values => ({ ...values, [name]: value}));
    }

    return(
        <div className='reservation'>
            <form onSubmit={handleSubmit} className='reservation-form'>
                <div className='reservation-form-div' >
                    <div className='reservation-items'>
                        <label htmlFor="res-date">Choose date</label>
                    </div>
                    <div className='reservation-items'>
                        <input type="date" id="res-date" onChange={(event)=> {dispatch({type:"date", key: "date" , payload: event.target.value})} } value={formVal.date}   />
                    </div>
                    <div className='reservation-items'>
                        <label htmlFor="res-time">Choose time</label>
                    </div>
                    <div className='reservation-items'>
                        <select id="res-time " onChange={handleChange} value={formVal.time}>
                            {state.availableTimes && state.availableTimes.map((item) => {
                                                        return <option key={item}> {item}</option>
                                                        })}
                        </select>
                    </div>
                    <div className='reservation-items'>
                        <label htmlFor="guests">Number of guests</label>
                    </div>
                    <div className='reservation-items'>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleChange} value={formVal.noOfGuest} />
                    </div>
                    <div className='reservation-items'>
                        <label htmlFor="occasion">Occasion</label>
                    </div>
                    <div className='reservation-items'>
                        <select id="occasion" onChange={handleChange} value={formVal.occasion} >
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>
                </div>
                <input type="submit" value="Make Your reservation" className='btn' />
            </form>
        </div>
    );
}

export default Reservation;