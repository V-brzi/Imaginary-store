import React, {useState, useEffect, useContext} from 'react';
import Confetti from 'react-confetti';
import {Context} from '../Context';

function DiscountCounter(){

    const [year, setYear] = useState(2024);
    const {setDiscount} = useContext(Context);

    const calculateTimeLeft = () => {
        
        const difference = +new Date(`04/23/${year}`) - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                d: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().split(""),
                h: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().split(""),
                m: Math.floor((difference / 1000 / 60) % 60).toString().split(""),
                s: Math.floor((difference / 1000) % 60).toString().split("")
            };
        }
        else if(difference <= 0){
            setDiscount(0.25);
            setBirthdayMessage(true);
            setTimeout(() => {
                setYear(year + 1);
                setDiscount(0);
                setBirthdayMessage(false);
            }, 24*60*1000);
        }
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [birthdayMessage, setBirthdayMessage] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });


    return (
        <div className='discount-countdown'>
            {!birthdayMessage  ? 
            <div className='countdown-timer'>
                <div className='timer-components-container'>
                    <div className='timer-component'>
                        <span key={0.187 + timeLeft.d[0]} className='time-left'>{timeLeft.d[0]}</span>
                        <span key={0.173 + timeLeft.d[1]} className='time-left'>{timeLeft.d[1]}</span>
                        <span key={0.191 + timeLeft.d[2]} className='time-left'>{timeLeft.d[2]}</span>
                        <span>d</span>
                    </div>
                    <div className='timer-component'>
                        <span key={0.235 + timeLeft.h[0]} className='time-left'>{timeLeft.h[0]}</span>
                        <span key={0.249 + timeLeft.h[1]} className='time-left'>{timeLeft.h[1]}</span>
                        <span>h</span>
                    </div>
                    <div className='timer-component'>
                        <span key={0.381 + timeLeft.m[0]} className='time-left'>{timeLeft.m[0]}</span>
                        <span key={0.379 + timeLeft.m[1]} className='time-left'>{timeLeft.m[1]}</span>
                        <span>m</span>
                    </div>
                    <div className='timer-component'>
                        <span key={0.415 + timeLeft.s[0]} className='time-left'>{timeLeft.s[0]}</span>
                        <span key={0.428 + timeLeft.s[1]} className='time-left'>{timeLeft.s[1]}</span>
                        <span>s</span>
                    </div>
                </div>
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