import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name ,population , area , flags} = props.country ;
    // console.log(props.key);
    // console.log(props.country);
    return (
        <div className='country'>
            <h1>name : {name.common}</h1>
            <h5>population :{population}</h5>
            <p><small>Area : {area}</small></p>
            <img src={flags.png} alt="flags" />
            
        </div>
    );
};

export default Country;