import { axiosWithAuth } from '../utils/axiosWithAuth'
import React, { useState, useEffect } from 'react'
import FriendCard from './FriendCard'
import { Link } from 'react-router-dom'

export default function Friends () {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends', localStorage.getItem('token'))
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
    })
    return (
        <>
        <Link to='/add'>Add Friend</Link>
        <div>
            {friends.map(item => <FriendCard key={item.id} name={item.name} age={item.age} email={item.email} />)}
        </div>
        </>
    )
}