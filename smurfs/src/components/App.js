import React, { Component } from "react";
import { connect } from 'react-redux';
import { getSmurfs, postSmurfs } from './actions'
import SmurfList from './SmurfList'
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }
  fetchSmurf = e => {
    e.preventDefault();
    this.props.getSmurfs()
  }
  createSmurf = e => {
    e.preventDefault();
    this.props.postSmurfs()
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {props.isLoading ? (<h2>LOADING ALL SMURFS...</h2>) : (<SmurfList fetchSmurf={this.fetchSmurf} createSmurf={this.createSmurf} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, { getSmurfs, postSmurfs })(App)
