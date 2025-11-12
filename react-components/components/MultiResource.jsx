
import { useState, useEffect} from "react"

export default function MultiResource(){
    const [resourceType, setResourceType] = useState('posts')
    

    return(
        <>
        <div>
        <button onclick={ ()=> setResourceType('posts') }>Posts</button>
        <button onclick={ ()=> setResourceType('users') }>Users</button>
        <button onclick={ ()=> setResourceType('comments') }>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        </>
    )
}

/*Why is useContext used?
useContext is a hook designed to share data across components without passing props 
manually through each level of the component tree. It provides access to values stored in a React Context.
*/