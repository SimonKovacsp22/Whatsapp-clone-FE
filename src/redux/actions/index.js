/** @format */

export const SET_LOGGED_IN_USER = "SET_LOGGED_IN_USER"
export const USER_LOGGED_IN = "USER_LOGGED_IN"
export const SET_SELECTED_CHAT = "SET_SELECTED_CHAT"
export const SET_TOKEN = "SET_TOKEN"
export const SET_SELECTED_CHAT_MESSAGES = "SET_SELECTED_CHAT_MESSAGES"
export const SEND_MESSAGE = "SEND_MESSAGE"

export const setLoggedInUserAction = (user) => {
  return {
    type: SET_LOGGED_IN_USER,
    payload: user,
  }
}
export const setSelectedChatAction = (chat) => {
  return {
    type: SET_SELECTED_CHAT,
    payload: chat,
  }
}

export const setSelectedChatMessagesAction = (messages) => {
  return {
    type: SET_SELECTED_CHAT_MESSAGES,
    payload: messages,
  }
}

export const sendMessageAction = (message) => {
  return {
    type: SEND_MESSAGE,
    payload: message
  }
}





export const loginUserDataActionWithThunk = (userData) => {
  return async (dispatch) => {
    try {
      let loggedInData = await userData
      console.log(loggedInData)
      dispatch({
        type: USER_LOGGED_IN,
        payload: loggedInData,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const setTokenAction = (token) => {
      return {
        type: SET_TOKEN,
        payload: token
      }
}
