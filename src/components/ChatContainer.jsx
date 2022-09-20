/** @format */

import React, { useState, useRef } from "react"
import "../styles/ChatContainer.css"
import ListGroup from "react-bootstrap/ListGroup"
import Overlay from "react-bootstrap/Overlay"
import { Link } from "react-router-dom"
import {useSelector} from "react-redux"

const ChatContainer = () => {

  const selectedProfile = useSelector(state => state.profile.selectedProfile)
  const [show, setShow] = useState(false)
  const [searchMessage, setSearchMessage] = useState(false)
  const target = useRef(null)
  return (
    <>
    
      <div
        className={
          !searchMessage
            ? "chat-container col-6 col-xs-6 col-md-8"
            : "chat-container col-6 col-xs-6 col-md-4"
        }>
        <div className='chat-container-nav d-flex align-items-center'>
          <div className='chat-container-profile-container d-flex align-items-center col-6'>
            <img
              src='https://i.pinimg.com/736x/17/57/1c/17571cdf635b8156272109eaa9cb5900.jpg'
              alt='chat-container-profile-pic'
              className='chat-container-profile-pic'
            />
            <h6 className='mx-3 mb-0'>Sidath Dabare</h6>
          </div>
          <div className='chat-container-nav col-6 d-flex align-items-center justify-content-end'>
            <i
              className='bi bi-search'
              ref={target}
              onClick={() => setSearchMessage(!searchMessage)}></i>

            <i
              className='bi bi-three-dots-vertical mx-3'
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
                      <Link to='/'>Contact Info</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to='/'>Select messages</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to='/'>Close chat</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to='/'>Mute notifications</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to='/'>Disappering message</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to='/'>Clear messages</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to='/'>Delete chat</Link>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              )}
            </Overlay>
          </div>
        </div>
        <div className='chat-content'></div>
        <div className='chat-input-container d-flex align-items-center justify-content-between'>
          <div
            className={
              !searchMessage
                ? "d-flex align-items-center justify-content-around col-1"
                : "d-flex align-items-center justify-content-around col-2"
            }>
            <i className='bi bi-emoji-smile icon-large'></i>
            <i className='bi bi-paperclip icon-large'></i>
          </div>
          <div
            className={
              !searchMessage
                ? "chat-input col-10 d-flex align-items-center"
                : "chat-input col-9 d-flex align-items-center"
            }>
            <input type='text' className='chat-input-input col-12' />
          </div>
          <div className='col-1 d-flex align-items-center justify-content-around'>
            <i className='bi bi-mic icon-large'></i>
          </div>
        </div>
      </div>
      <div
        className={
          !searchMessage
            ? "d-none"
            : "chat-container-show col-6 col-xs-6 col-md-4"
        }>
        <div className='chat-container-nav d-flex align-items-center col-12'>
          <div className='chat-container-profile-container d-flex align-items-center col-2 justify-content-center'>
            <i
              className='bi bi-x-lg'
              onClick={() => setSearchMessage(!searchMessage)}></i>
          </div>
          <div className='chat-container-nav col-10 d-flex align-items-center justify-content-start'>
            <h6 className='mx-3 mb-0'>Search Messages</h6>
          </div>
        </div>
        <div className='chat-container-show-message d-flex justify-content-between align-items-center px-3'>
          <div className='d-flex justify-content-between align-items-center'>
            <i className='bi bi-search'></i>
            <input type='text' placeholder='Search....' />
          </div>
        </div>
        <div className='search-message-content d-flex justify-content-around align-items-center'>
          <small>Search for messages with +39 564545154</small>
        </div>
      </div>
    </>
  )
}

export default ChatContainer
