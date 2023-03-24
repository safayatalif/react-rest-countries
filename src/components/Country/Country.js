import React from 'react';
import Count from '../Count/Count';
import './Country.css'

const Country = (props) => {
    const {name ,population , area , flags} = props.country ;
    // console.log(props.key);
    // console.log(props.country);
    return (
        <div className='country'>
            <h3>Name : {name.common}</h3>
            <Count></Count>
            <h5>population :{population}</h5>
            <p><small>Area : {area}</small></p>
            <img src={flags.png} alt="flags" />
            
        </div>
    );
};

export default Country;