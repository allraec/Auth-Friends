import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { axiosAuth} from "../utils/axiosAuth";

const Friends = () => {

    const [friends, setFriends] = useState([]);
    const [friend, setFriend] = useState({
        id: "",
        name: "",
        age: "",
        email: ""
    });

    useEffect(() => {
        axiosAuth().get("/friends")
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [friends])

    const handleChange = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const addFriend = e => {
        e.preventDefault();
        setFriend({
            ...friend,
            id: Date.now()
        })
        axiosAuth().post("/friends", friend)
            .then(res => {
                console.log(res)
            })
    }
    return(
        <div>
            <div>
                <form onSubmit={addFriend}>
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text"
                        name="name"
                        value={friend.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="age">Age: </label>
                    <input 
                        type="text"
                        name="age"
                        value={friend.age}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email Address: </label>
                    <input 
                        type="text"
                        name="email"
                        value={friend.email}
                        onChange={handleChange}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
            {friends.map(friend => (
                <div key={friend.id}>
                    <p>{friend.name}</p>
                </div>
            ))}
        </div>
    )
    
}

export default Friends; 