const defaultState = {
    number: 1,
}

const reducer = (state = defaultState, {type,payload}) =>{
    if(type=== 'increament'){
        return {
            number: state.number+ payload
        }
    }
    if(type=== 'decreament'){
        return {
            number: state.number- payload
        }
    }
    return state
} 

export default reducer;