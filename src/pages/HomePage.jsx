/** @format */

import React, { useEffect, useState } from "react"
import "../styles/HomePage.css"
import ProfilesContainer from "../components/ProfilesContainer"
import ChatContainer from "../components/ChatContainer"

const HomePage = () => {
  const [profileNames, setProfileNames] = useState([])
  const [chatSelected, setChatSelected] = useState(null)
  const [chatItems, setChatItems] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const getUsers = async () => {
    try {
      let resp = await fetch(process.env.REACT_APP_BE_URL + "/users")
      if (resp.ok) {
        let users = await resp.json()
        //console.log(users)
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
      Authorization: `Bearer ${process.env.REACT_APP_USER_TOKEN}`,
      "Content-type": "application/json",
    }
    try {
      let resp = await fetch(process.env.REACT_APP_BE_URL + "/chat", {
        method: "GET",
        headers,
      })
      if (resp.ok) {
        let chats = await resp.json()
        //console.log(chats)
        setChatItems(chats)
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
