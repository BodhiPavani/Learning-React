import { useState } from 'react'
import Data from './Data'
import Cart from './Cart'
import Weather from './Weather'
import Userstatus from './UserStatus'
import AddUp from './AddUp'
import ToDoList from './ToDoList'
import Quizapp from './components/Quizapp'
import "./index.css";



function App() {
  const [count, setCount] = useState(0)
  const myStyles={}
  const ClickButton=(e)=>{
    console.log("Hello")
    alert("you have clicked a button")
  }
  const AgainClickButton=(name)=>{
    console.log("clicked by"+" "+ name)
    
  }
  
//key values all must be unique
  return (
    <>
      <h1 style={{color:"cadetblue", padding: 0 }}>Web Dev</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={ClickButton}>Click me</button>
        <button onClick={(e)=>{AgainClickButton("Programmer",e)}}>Click Again</button>
        <Data />
        <Cart />
        <Weather />
      </div>

      <div>
        <Userstatus loggedIn={true} isAdmin={false} />
      </div>

      <div>
        <AddUp />
        <ToDoList />
        <Quizapp />
      </div>
      
    </>
  )
}

export default App


//<button onClick={AgainClickButton}>Click me Again</button>
//in this line of code we can't pass an arg directly so instead we do is create an arrow function 
//such that we can pass an agrument inside