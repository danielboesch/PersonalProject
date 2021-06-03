// initial state 
const initialState = {
    endDate: [],
}

//action types
const SET_END = "SET_END"

//action builders
export function setEnd(end){
    return {
        type: SET_END,
        payload: end
    }
}

//reducer
export default function calendarEndReducer(state = initialState, action){
    switch(action.type){
        case SET_END:
            return {...state, cart: action.payload}
        default: 
            return {...state}
    }
}