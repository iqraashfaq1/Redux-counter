var initialState = 0;
var counterReducer = (state = initialState, action) => {
var {type, payload} = action ;
switch (type) {
    case "INCREMENT_COUNTER" :
        return state + 1 ;

        case "DECREMENT_COUNTER" :
        return state - 1 ;
        default :
        return state ;
}
}
export default counterReducer;