import axios from 'axios';


export const getSmurfs = () => dispatch => {
    console.log('getSmurfs function fired! ')
    dispatch({type: "FETCH_SMURF_START"});
    axios
    .get('http://localhost:3333/smurfs')
    .then( res => {
        console.log('heres your data, my lord: ', res.data);
        dispatch({ type:"FETCH_SMURF_SUCCESS", payload: res.data });
    })
    .catch(err =>
        dispatch({type:"FETCH_SMURF_ERROR", payload: `ERROR LOADING: ${err}`})
    )
};

export const postSmurfs = (item) => dispatch => {
    axios
    .post('http://localhost:3333/smurfs', item)
    .then(res => {
        console.log(res.data);
        getSmurfs();
    })
    .catch(err => {
        console.log('error posting new smurf: ', err);
        dispatch({type:"POST_SMURF_ERROR", payload: `ERROR CREATING SMURF: ${err}`})
    })
}