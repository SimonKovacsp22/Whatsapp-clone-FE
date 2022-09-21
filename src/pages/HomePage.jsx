/** @format */
import { getDataForLoggedInUser } from "../lib/apiFunctions"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import { setLoggedInUserAction } from "../redux/actions"
import "../styles/HomePage.css"
import ProfilesContainer from "../components/ProfilesContainer"
import ChatContainer from "../components/ChatContainer"

const HomePage = () => {



  const token = useSelector(state => state.profile.token)

 const dispatch= useDispatch()

  const [profileNames, setProfileNames] = useState([])
  const [chatSelected, setChatSelected] = useState(null)
  const [chatItems, setChatItems] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

   useEffect( ()=> {
    getDataForLoggedInUser(token).then( data => dispatch(setLoggedInUserAction(data)))
    
   },[])

  const getUsers = async () => {
    try {
      let resp = await fetch(process.env.REACT_APP_BE_URL + "/users")
      if (resp.ok) {
        let users = await resp.json()
      
        setProfileNames(users)
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getChats = async () => {
    let headers = {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    }
    try {
      let resp = await fetch(process.env.REACT_APP_BE_URL + "/chat", {
        method: "GET",
        headers,
      })
      if (resp.ok) {
        let chats = await resp.json()
        console.log(chats.MyChats)
        setChatItems(chats.MyChats)
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log(error)
    }
  }
  const changeChat = (user) => setChatSelected(user)

  useEffect(() => {
    getUsers()
    getChats()
    //console.log(profileNames)
  }, [])
  return (
    <div className='main-container d-flex'>
      <ProfilesContainer
        profileNames={profileNames}
        setProfileNames={setProfileNames}
        setChatSelect={setChatSelected}
        changeChat={changeChat}
        chatItems={chatItems}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <ChatContainer profileSelected={setChatSelected} />
    </div>
  )
}

export default HomePage
