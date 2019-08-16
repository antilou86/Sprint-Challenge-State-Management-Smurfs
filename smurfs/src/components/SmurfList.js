import React from 'react';
import Smurf from './Smurf'

import { connect } from 'react-redux'

import './App.css'

const SmurfList = props => {
    return (
        <>
            <h3>ORRRR... Load a list of all our Smurfs!</h3>
            {props.isLoading ? (<h2>LOADING ALL SMURFS...</h2>) : (props.smurfs && props.smurfs.map(smurf => 
                <Smurf key={smurf.id} smurf={smurf} />
            )) }
            <button className="find-smurf-button" onClick={props.fetchSmurf}>Get All Smurfies!</button>
        </>
    )
}


const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error,
    isLoading: state.isLoading
});
export default connect(
mapStateToProps, 
{}
)(SmurfList);