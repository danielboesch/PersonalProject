// initial state 
const initialState = {
    startDate: [],
}

//action types
const SET_START = "SET_START"

//action builders
export function setStart(start){
    return {
        type: SET_START,
        payload: start
    }
}

//reducer
export default function calendarStartReducer(state = initialState, action){
    switch(action.type){
        case SET_START:
            return {...state, cart: action.payload}
        default: 
            return {...state}
    }
}