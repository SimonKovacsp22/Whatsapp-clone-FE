/** @format */

import React, { useEffect, useState } from "react"
import "../styles/HomePage.css"
import ProfilesContainer from "../components/ProfilesContainer"
import ChatContainer from "../components/ChatContainer"

const HomePage = () => {
  const [profileNames, setProfileNames] = useState([])
  const [chatSelected, setChatSelected] = useState(null)

  const getData = async () => {
    try {
      let resp = await fetch("https://jsonplaceholder.typicode.com/users")
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
  const changeChat = (user) => setChatSelected(user)

  useEffect(() => {
    getData()
    //console.log(profileNames)
  }, [])
  return (
    <div className='main-container d-flex'>
      <ProfilesContainer
        profileNames={profileNames}
        setChatSelect={setChatSelected}
        changeChat={changeChat}
      />
      <ChatContainer profileSelected={setChatSelected} />
    </div>
  )
}

export default HomePage
