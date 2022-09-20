import {SET_SELECTED_PROFILE} from '../actions/index'
const initialState = {
    profiles:[],
    selectedProfile: null
}

const profilesReducer = (state= initialState, action) => {
    switch(action.type) {
        case SET_SELECTED_PROFILE: 
        return {
            ...state, selectedProfile: action.payload
        }
        default: 
        return state
    }
}

export default profilesReducer