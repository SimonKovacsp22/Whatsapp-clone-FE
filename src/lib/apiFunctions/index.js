import axios from 'axios'



export const getDataForLoggedInUser =async  (token) => {
    const response = await axios.get(process.env.REACT_APP_BE_URL + '/users/me',{ headers: {
        Authorization: `Bearer ${token}`
      }}
      )
    return response.data
}