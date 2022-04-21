import { ActionTypes } from "../constants/action-types";

const initialState={
    products:[]
}

export const productReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:action.payload}
        default:
            return state
    }
}

export const selectedProductReducers=(state={},action)=>{
    switch(action.type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...action.payload}
        case ActionTypes.REMOVE_PRODUCT:
            return {}
        default:
            return state
    }
}