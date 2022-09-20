/** @format */

import React, { useState, useRef } from "react"
import "../styles/ProfilesContainer.css"
import SingleProfileContainer from "./SingleProfileContainer"
import ListGroup from "react-bootstrap/ListGroup"
import Overlay from "react-bootstrap/Overlay"
import { Link } from "react-router-dom"
import SingleChatComponent from "./SingleChatComponent"

const ProfilesContainer = ({
  profileNames,
  setChatSelected,
  changeChat,
  chatItems,
}) => {
  const [show, setShow] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [showContacts, setShowContacts] = useState(false)
  const target = useRef(null)

  return (
    <>
      <div
        className={
          !showProfile && !showContacts
            ? "col-6 col-xs-6 col-md-4 profile-container"
            : "d-none"
        }>
        <div className='profile-nav-bar d-flex'>
          <div className='own-profile-container col-8 d-flex align-items-center'>
            <img
              src='https://i.pinimg.com/736x/17/57/1c/17571cdf635b8156272109eaa9cb5900.jpg'
              alt='own-profile-pic'
              className='own-profile-pic'
              onClick={() => setShowProfile(!showProfile)}
            />
          </div>
          <div className='own-profile-action col-4 d-flex align-items-center justify-content-between px-3'>
            <div className='online-status'>
              <div className='circle'></div>
              <div className='online-dot'></div>
            </div>
            <i
              className='bi bi-chat-left-dots'
              onClick={() => setShowContacts(!showContacts)}></i>
            <i
              className='bi bi-three-dots-vertical'
              ref={target}
              onClick={() => setShow(!show)}></i>
            <Overlay target={target.current} show={show} placement='bottom'>
              {({ placement, arrowProps, show: _show, popper, ...props }) => (
                <div
                  {...props}
                  style={{
                    position: "absolute",
                    backgroundColor: "#202c33",
                    padding: "2px 10px",
                    color: "white",
                    borderRadius: 2,
                    ...props.style,
                  }}>
                  <ListGroup className='chat-dropdown-list'>
                    <ListGroup.Item>
                      <Link to='/'>New group</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to='/'>Starred messages</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to='/'>Settings</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to='/'>Log out</Link>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              )}
            </Overlay>
          </div>
        </div>
        <div className='profile-search-bar my-2'>
          <div className='d-flex justify-content-between align-items-center px-3'>
            <i className='bi bi-search'></i>
            <input type='text' />
            <i className='bi bi-wifi'></i>
          </div>
        </div>
        <div className='profiles-container mt-3 style-1'>
          {chatItems.map((chatItem, i) => (
            <SingleChatComponent
              key={i}
              chatItem={chatItem}
              setChatSelected={setChatSelected}
              changeChat={changeChat}
            />
          ))}
        </div>
      </div>
      <div
        className={
          showProfile
            ? "col-6 col-xs-6 col-md-4 profile-container-show"
            : "d-none"
        }>
        <div className='own-profile-action-nav d-flex'>
          <div className='col-2 d-flex justify-content-center align-items-end'>
            <i
              className='bi bi-arrow-left mb-2'
              onClick={() => setShowProfile(!showProfile)}></i>
          </div>
          <div className='col-10 d-flex justify-content-between align-items-end'>
            <h5>Profile</h5>
          </div>
        </div>
        <div className='profile-container-show-picture d-flex justify-content-center align-items-center'>
          <img
            src='https://i.pinimg.com/736x/17/57/1c/17571cdf635b8156272109eaa9cb5900.jpg'
            alt='own-profile-pic-big'
            className='own-profile-pic-big'
          />
        </div>
        <div className='px-3 py-2'>
          <strong>
            <small className='text-success'>Your name</small>
          </strong>
        </div>
        <div className='px-3 py-3'>
          <div className='d-flex justify-content-between align-items-center'>
            <h5>Sidath Dabare</h5> <i className='bi bi-pen'></i>
          </div>
        </div>
        <div className='px-3'>
          <small className='text-secondary'>
            This is not your username or pin. This name will be visible to your
            WhatsApp contacts.
          </small>
        </div>
        <div className='px-3 py-2'>
          <strong>
            <small className='text-success'>About</small>
          </strong>
        </div>
        <div className='px-3 pt-2'>
          <div className='d-flex justify-content-between align-items-center'>
            <h5>Hey there! I am using WhatsApp.</h5>{" "}
            <i className='bi bi-pen'></i>
          </div>
        </div>
      </div>
      <div
        className={
          showContacts
            ? "col-6 col-xs-6 col-md-4 profile-container-show"
            : "d-none"
        }>
        <div className='contact-profile-action-nav d-flex'>
          <div className='col-2 d-flex justify-content-center align-items-end'>
            <i
              className='bi bi-arrow-left mb-2'
              onClick={() => setShowContacts(!showContacts)}></i>
          </div>
          <div className='col-10 d-flex justify-content-between align-items-end'>
            <h5>New chat</h5>
          </div>
        </div>
        <div className='contact-search-bar my-2'>
          <div className='d-flex justify-content-between align-items-center px-3'>
            <i className='bi bi-search'></i>
            <input type='text' />
          </div>
        </div>
        <div className='contact-list-container'>
          {profileNames.map((profile, i) => (
            <SingleProfileContainer
              key={i}
              profile={profile}
              setChatSelected={setChatSelected}
              changeChat={changeChat}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProfilesContainer
