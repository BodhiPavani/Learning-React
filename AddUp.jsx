import { useState } from 'react';
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from 'react-icons/io';

const AddUp = () => {
    const [frnds, setFrnds] = useState(["Alex", "John"]);
    const [newFriend, setNewFriend] = useState("");

    const addFriend = () => {
        if (newFriend.trim() === "") return;
        setFrnds([...frnds, newFriend.trim()]);
        setNewFriend("");
    };

    const removeFriend = () => {
        setFrnds(frnds.slice(0, frnds.length - 1));
    };

    return (
        <section style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>My Friend's List</h2>
            <ul>
                {frnds.map((f, index) => (
                    <li key={index}>{f}</li>
                ))}
            </ul>

            <input
                type="text"
                placeholder="Enter friend name"
                value={newFriend}
                onChange={(e) => setNewFriend(e.target.value)}
                style={{ padding: '8px', marginRight: '10px' }}
            />

            <button onClick={addFriend} style={{ marginRight: '10px' }}>
                <IoMdAddCircleOutline /> Add New Friend
            </button>

            <button onClick={removeFriend}>
                <IoMdRemoveCircleOutline /> Remove a Friend
            </button>
        </section>
    );
};

export default AddUp;



/*
import {useState} from "react"
import { IoMdAddCircleOutline,IoMdRemoveCircleOutline } from "react-icons/io";


const AddUp = () => {
    const [frnds, setFrnds]= useState(["Alex","John"]) //Default values that are given

    const addFriend=()=>setFrnds([...frnds,"Nomi"]) //To add a friend based on the given argument
    const removeFriend=()=>setFrnds(frnds.filter(f => f != 'Nomi')) //Remove a friend based on the passed value 

    return <section>
        {frnds.map(f =>(
            <li key={Math.random()}>{f}</li>
        ) )}

        <button onClick={addFriend}><IoMdAddCircleOutline />Add new Friend</button>  
        <button onClick={removeFriend}><IoMdRemoveCircleOutline />Remove a Friend</button>
    
    </section>

}

export default AddUp */

