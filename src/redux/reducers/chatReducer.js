/** @format */

import { SET_SELECTED_CHAT,SET_SELECTED_CHAT_MESSAGES,SEND_MESSAGE } from "../actions/index"
const initialState = {
  chats: [],
  selectedChat: null,
  selectedChatMessages:[]
}

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_CHAT:
      return {
        ...state,
        selectedChat: action.payload,
      }

    case SET_SELECTED_CHAT_MESSAGES:
      {
        return {
          ...state, selectedChatMessages:action.payload
        }
      }
    
      case SEND_MESSAGE: {
        return {
          ...state, selectedChatMessages:[...state.selectedChatMessages, action.payload]
        }
      }
    default:
      return state
  }
}

export default chatReducer
