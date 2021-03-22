
const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        case "CREATE_WIDGET":
            const newState = {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
            return newState
        case "DELETE_WIDGET":
            const newState1 = {
                modules: state.widgets.filter(widget => {
                    if(widget._id === action.widgetToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(m => {
                    if(m._id === action.widget._id) {
                        return action.widget
                    } else {
                        return m
                    }
                })
            }
        default:
            return state
    }
}
export default widgetReducer