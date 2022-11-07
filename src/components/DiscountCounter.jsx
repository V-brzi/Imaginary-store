import React, {useState, useEffect, useContext} from 'react';
import Confetti from 'react-confetti';
import {Context} from '../Context';

function DiscountCounter(){

    const [year, setYear] = useState(2023);
    const {setDiscount} = useContext(Context);

    const calculateTimeLeft = () => {
        
        let difference = +new Date(`04/23/${year}`) - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
            }
        else if(difference === 0){
            setDiscount(0.25);
            setTimeout(() => {
                setYear(year + 1);
                setDiscount(0);
            }, 24*60*1000);
        }
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const timerComponents = [];

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    Object.keys(timeLeft).forEach((interval, index) => {

        if (!timeLeft[interval]) {
            return;
        }
    
        timerComponents.push(
            <span key={index}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
        });


    return (
        <div className='discount-countdown'>
            {timerComponents.length ? 
            <div className='countdown-timer'>
                {timerComponents}
                <hr />
                <div className='discount-message'>
                    <p>Don't miss 75% firesale on our birthday!</p>
                </div>
            </div> :
            <div className='countdown-timer'>
                <Confetti className='confetti'/>
                <h2 className='birthday-message'>🎉Enjoy our birthday fire sale🎉</h2>
                <hr />
                <h4>All products are on 75% discount !</h4>
            </div>}
        </div>
        )
}

export default DiscountCounter;