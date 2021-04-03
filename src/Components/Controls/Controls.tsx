import react, { useState } from 'react';

type Props = {
    setTimeInSeconds: Function
}

function Controls(props: Props) {
    const { setTimeInSeconds } = props;
    const [intervalId, setIntervalId] = useState<number>(0);

    const handlePlayButton = (e: object) => {
        const interval:any = setInterval(() => {
            setTimeInSeconds((previousState:number) => previousState + 1);
        }, 1000);

        setIntervalId(interval);
    }

    const handleStopButton = () => {
        clearInterval(intervalId);
    }

    const handleResetButton = () => {
        clearInterval(intervalId);
        setTimeInSeconds(0);
    }

    return (
        <section>
            <button
                onClick={handlePlayButton} 
                style={btnStyles}
            >Play</button>
            <button
                onClick={handleStopButton} 
                style={btnStyles}
            >Stop</button>
            <button
                onClick={handleResetButton} 
                style={btnStyles}
            >Reset</button>
        </section>
    )
}

const btnStyles = { 
    margin: 15, 
    border: 'none', 
    backgroundColor: '#E5AD3D',
    padding: '3px 12px',
    fontSize: '1.3rem',
    cursor: 'pointer'
}

export default Controls;