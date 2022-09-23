/** @format */

import React from "react"
import "../styles/SingleChatComponent.css"
import { useDispatch } from "react-redux"
import { setSelectedChatAction} from "../redux/actions"

const SingleChatComponent = ({
  profile,
  setChatSelected,
  changeChat,
  chatItem,
}) => {


  const dispatch = useDispatch()

  
  return (
    <div
      className={
        setChatSelected?._id === chatItem._id
          ? "single-profile d-flex px-3 py-2"
          : "single-profile d-flex px-3 py-2 border-thick"
      }
      onClick={() => {
        changeChat(chatItem)
        dispatch(setSelectedChatAction(chatItem))
        
      }}>
      <div className='single-pro-picture col-2 d-flex align-items-center'>
        <img
          src='https://i.pinimg.com/736x/17/57/1c/17571cdf635b8156272109eaa9cb5900.jpg'
          alt='single-profile-pic'
          className='single-profile-pic'
        />
      </div>
      <div className='single-pro-center col-8'>
        <h6 className='mb-0 mt-2'>{chatItem._id}</h6>
        <p className='mb-0 text-truncate text-secondary'>Hi how are u?</p>
      </div>
      <div className='time-container col-2'>
        <small className='text-secondary'>yesterday</small>
        <i className='bi bi-chevron-down'></i>
      </div>
    </div>
  )
}

export default SingleChatComponent
