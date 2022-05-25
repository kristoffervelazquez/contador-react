import PropTypes from 'prop-types'
import { useState } from 'react';

const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value);


    //handle functions
    // const handleAdd = () => {
    //     setCounter( counter + 1)        
    // }
    // const handleSubstract = () =>{
    //     setCounter( counter -1)
    // }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={() => setCounter(counter - 1)}> -1</button>
            <button onClick={() => setCounter(value)} >Reset</button>
            <button onClick={() => setCounter(counter + 1)}> +1</button>



        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
}



export default CounterApp