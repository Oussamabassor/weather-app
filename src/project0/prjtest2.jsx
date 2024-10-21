import React, { useState } from 'react';


const users = [
        {
            id: 1,
            name: "ali",
            age: "32",
        },
        {
            id: 2,
            name: "oussama",
            age: "20",
        },
        {
            id: 3,
            name: "rachid",
            age: "26",
        },
        {
            id: 4,
            name: "brahim",
            age: "22",
        },
        {
            id: 5,
            name: "simo",
            age: "19",
        },
        {
            id: 6,
            name: "mourad",
            age: "28",
        },
]

function MyList() {
    const L_users = users.map(user =>
        <>
            <li key={user.id} style={{"color": user.age >= 25 ?"green" :"red","fontSize":"120%"}}>
                <i>{user.name} has {user.age} year old.</i>
            </li>
        </>
    )
    return (
        <>
            <h2>List Of Users:</h2>
            <ul>{L_users}</ul>
        </>
    )
}
export default MyList