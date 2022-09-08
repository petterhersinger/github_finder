const alertReducer = (state, action) => {
    switch(action.type) {
        case "SET_ALERT":
            return action.payload
        case "REMOVE ALERT":
            return null
        default:
            return state
    }
}

export default alertReducer