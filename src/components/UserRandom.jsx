import axios from 'axios'
import React, { useEffect, useState } from 'react'
import User from './User'

const UserRandom = () => {

    const [user, setUser] = useState()

    useEffect(() => {
     const url = 'https://randomuser.me/api/'

    //  fetch(url)
    //  .then(res => res.json())
    //  .then(data => setUser(data))
    //  .catch(err => console.log(err))

        axios.get(url)
        .then(res => setUser(res.data.results[0]))
        .catch(err => console.log(err))

    }, [])

  return (
    <div>
        <User user={user} />
    </div>
  )
}

export default UserRandom