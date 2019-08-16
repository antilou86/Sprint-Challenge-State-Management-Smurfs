import React from 'react';
import Smurf from './Smurf'

import { connect } from 'react-redux'

import './App.css'

const SmurfList = props => {
    return (
        <>
            {props.smurfs && props.smurfs.map(smurf => {
                <Smurf key={smurf.id} smurf={smurf} />
            })}
            <button className="find-smurf-button" onClick={props.fetchSmurf}/>
        </>
    )
}


const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error
});
export default connect(
mapStateToProps, 
{}
)(SmurfList);