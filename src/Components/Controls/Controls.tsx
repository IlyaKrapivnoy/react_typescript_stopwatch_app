import react from 'react';
// import '../Controls';

type Props = {
    setTimeInSeconds: Function
}

function Controls(props: Props) {
    return (
        <section>
            <button style={btnStyles}>Stop</button>
            <button style={btnStyles}>Play</button>
            <button style={btnStyles}>Reset</button>
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