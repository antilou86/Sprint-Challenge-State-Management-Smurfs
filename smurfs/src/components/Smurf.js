import React from 'react';
import '../App.css'

const Smurf = props => {
    return (
        <div>
            <h3>{props.smurf.name}</h3>
            <p>age: {props.smurf.age}</p>
            <p>height: {props.smurf.height}</p>
            {/* <button>eliminate smurf</button>     stretch*/}
        </div>
    )
}

export default Smurf;