export const SET_SELECTED_PROFILE = "SET_SELECTED_PROFILE"

export const setSelectedUserAction = (user) => {
    return {
        type: SET_SELECTED_PROFILE,
        payload: user
    }
}