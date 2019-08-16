

const intitialState = { 
    smurfs: [],
    error: '',
    postError: '',
    isLoading: false
};

function reducer(state = intitialState, action) {

switch (action.type) {
    case "FETCH_SMURF_START": 
        return {
            ...state,
            error: '',
            isLoading: true
    };
    case "FETCH_SMURF_SUCCESS":
        return {
            ...state,
            smurfs: [...state.smurfs, action.payload],
            error: '',
            postError: '',
            isLoading: false
        };
    case "FETCH_SMURF_ERROR":
        return {
            ...state,
            error: action.payload
        };
    case "POST_SMURF_ERROR":
        return {
            ...state,
            error: '',
            postError: action.payload
        }
  
    default: return state;
}
}

export default reducer;
