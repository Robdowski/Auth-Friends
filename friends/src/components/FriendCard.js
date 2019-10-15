import React from 'react'

export default function FriendCard(props) {
    return (
        <div id={props.key}>
            <h1>{props.name}</h1>
            <h2>Age: {props.age}</h2>
            <h2>Email: {props.email}</h2>
        </div>
    )
}
