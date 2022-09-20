/** @format */

import React from "react"
import "../styles/SingleProfileContainer.css"
import {useDispatch} from 'react-redux'
import { setSelectedUserAction } from "../redux/actions"

const SingleProfileContainer = ({ profile, setChatSelected, changeChat }) => {

  const dispatch = useDispatch()
  return (
    <div
      className={
        setChatSelected?.id === profile.id
          ? "single-profile d-flex px-2 py-2"
          : "single-profile d-flex px-2 py-2 border-thick"
      }
      onClick={() => {
        changeChat(profile)
        dispatch(setSelectedUserAction(profile))}
      }>
      <div className='single-pro-picture col-2 d-flex align-items-center'>
        <img
          src='https://i.pinimg.com/736x/17/57/1c/17571cdf635b8156272109eaa9cb5900.jpg'
          alt='single-profile-pic'
          className='single-profile-pic'
        />
      </div>
      <div className='single-pro-center col-8'>
        <h6 className='mb-0 mt-2'>{profile.username}</h6>
        <p className='mb-0 text-truncate text-secondary'>{profile.email}</p>
      </div>
      <div className='time-container col-2'>
        <small className='text-secondary'>yesterday</small>
        <i className='bi bi-chevron-down'></i>
      </div>
    </div>
  )
}

export default SingleProfileContainer
