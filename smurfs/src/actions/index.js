import axios from 'axios';


export const getSmurfs = () => dispatch => {
    console.log('getSmurfs function fired! ')
    dispatch({type: "FETCH_SMURF_START"});
    axios
    .get('')
    .then( res => {
        console.log('heres your data, my lord: ', res.data);
        dispatch({ type:"FETCH_SMURF_SUCCESS", payload: res.data });
    })
    .catch(err =>
        dispatch({type:"FETCH_SMURF_ERROR", payload: `ERROR LOADING: ${err}`})
    )
};