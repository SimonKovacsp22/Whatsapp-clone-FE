/** @format */

import { SET_SELECTED_CHAT } from "../actions/index"
const initialState = {
  chats: [],
  selectedProfile: null,
}

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_CHAT:
      return {
        ...state,
        selectedProfile: action.payload,
      }
    default:
      return state
  }
}

export default chatReducer
