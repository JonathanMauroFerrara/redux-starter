import * as actions from './actionTypes'

export function bugAdded(description){
    return{
        type: actions.BUG_ADDED,
        payload:{
            description: 'Bug1'
        }
    }
}

export function bugRemove(description){
    return{
        type: actions.BUG_REMOVE,
        payload:{
            description: 'Bug1'
        }
    }
}

export const bugResolved = id =>({
    type: actions.BUG_RESOLVED,
    payload: {
        id
    }
})