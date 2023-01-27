import * as actions from './actionTypes'
let lastId = 0;

export default function reducer(state = [], action){
    if(action.type === action.BUG_ADDED){
        return[
            ...state,
            {
                id: lastId++,
                description: actions.payload.description,
                resolved: false,
            }
        ];
        lastId++
    }else if(action.type = actions.BUG_REMOVED){
        return state.filter(bug => bug.id !== action.payload.id)
    }else if(action.type = actions.BUG_RESOLVED){
        return state.map(bug => bug.id !== bug.payload.id ? bug : {...bug, resolved: true})
    }

    return state
}