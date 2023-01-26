import React, { useState } from 'react'

const User = ({ user }) => {

  console.log(user)

  return (
    <div>
      <img src={user?.picture.large} alt="" />   
      <h2>{`${user?.name.title} ${user?.name.first} ${user?.name.last}`}</h2>
      <ul>
        <li><b>Gender:</b>{user?.gender}</li>
        <li><b>Email:</b>{user?.email}</li>
      </ul>
    </div>
  )
}

export default User