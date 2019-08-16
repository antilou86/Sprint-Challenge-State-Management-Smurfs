import React, { Component } from "react";
import { connect } from 'react-redux';
import { getSmurfs, postSmurfs } from '../actions'
import SmurfList from './SmurfList'
import FormikSmurfPostForm from './SmurfPostForm'
import "./App.css";

class App extends Component {

  fetchSmurf = e => {
    e.preventDefault();
    this.props.getSmurfs()
  }
  createSmurf = (item) => {
    this.props.postSmurfs(item)
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux, you can: </h1>
        <FormikSmurfPostForm createSmurf={this.createSmurf}/>
        <SmurfList fetchSmurf={this.fetchSmurf}/>
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
