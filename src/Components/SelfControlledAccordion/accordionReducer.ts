export type ActionType = {
    type:string
}

export type StateType = {
    collapsed:boolean
}

export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED';

export const accordionReducer= (state:StateType, action:ActionType)=>{
    switch (action.type){
        case TOGGLE_COLLAPSED:{
            return {...state, collapsed:!state.collapsed}
        }
        default:{
            throw Error()
        }
    }
}