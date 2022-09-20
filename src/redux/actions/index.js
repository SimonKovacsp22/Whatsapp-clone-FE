/** @format */

export const SET_SELECTED_PROFILE = "SET_SELECTED_PROFILE"
export const USER_LOGGED_IN = "USER_LOGGED_IN"
export const SET_SELECTED_CHAT = "SET_SELECTED_CHAT"

export const setSelectedUserAction = (user) => {
  return {
    type: SET_SELECTED_PROFILE,
    payload: user,
  }
}
export const setSelectedChatAction = (chat) => {
  return {
    type: SET_SELECTED_CHAT,
    payload: chat,
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
