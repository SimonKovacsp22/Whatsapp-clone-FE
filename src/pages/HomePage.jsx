/** @format */
import { getDataForLoggedInUser,getChats, getUsers } from "../lib/apiFunctions"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import { setLoggedInUserAction, setSelectedChatAction, setProfilesAction } from "../redux/actions"
import "../styles/HomePage.css"
import ProfilesContainer from "../components/ProfilesContainer"
import ChatContainer from "../components/ChatContainer"

const HomePage = () => {
  const token = useSelector((state) => state.profile.token)

  const dispatch = useDispatch()

  const [profileNames, setProfileNames] = useState([])
  const [chatSelected, setChatSelected] = useState(null)
  const [chatItems, setChatItems] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    getDataForLoggedInUser(token).then((data) =>
      dispatch(setLoggedInUserAction(data))
    )
    getUsers().then( users => dispatch(setProfilesAction(users)))
    getChats(token).then( chats => {
      setChatItems(chats)
      // dispatch(setSelectedChatAction(chats[0]))
    } )
    
  }, [])

  
  const changeChat = (user) => setChatSelected(user)



 
  return (
    <div className='main-container d-flex'>
      <ProfilesContainer
        
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
