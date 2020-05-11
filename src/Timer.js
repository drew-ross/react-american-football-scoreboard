import React, { useState, useEffect } from "react";
import "./App.css";

const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(15);
    const [active, setActive] = useState(false);

    const toggle = () => setActive(!active);
    const reset = () => {
        setSeconds(0);
        setMinutes(15);
        setActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (active) {
            interval = setInterval(() => {
                setSeconds(seconds - 1);
                if (seconds <= 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }, 1000);
        } else if (!active && minutes !== 15) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [active, seconds, minutes]);

    return (
        <div className="timer">
            <div>{minutes}:{seconds}</div>
            <button onClick={toggle}>{active ? 'Pause' : 'Start'}</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Timer;