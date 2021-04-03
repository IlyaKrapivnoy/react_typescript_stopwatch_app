import React, { useState } from 'react';
import './Main.css'

function Main() {
    const [timeInSeconds, setTimeInSeconds] = useState<number>(0);

    
    return (
        <section className="time-container">
            <p className="timer-text">0</p>
            <span>:</span>
            <p className="timer-text">0</p>
            <span>:</span>
            <p className="timer-text">0</p>
        </section>
    )
}

export default Main;