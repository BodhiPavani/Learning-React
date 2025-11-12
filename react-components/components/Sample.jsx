import react from 'react'


//This is an Nested component in the File called Sample
//Where i have created multiple components and arrow function and 
//called through App.jsx which again render into main.jsx
let first_name='Pavani'
let last_name='Bodhi'
const Username=()=>{             //arrow function
    return(
        <h1>Hello, {first_name} {last_name}</h1>
    )
}

const Loginmsg=()=>{
    return(
        <h2>You have logged in Sucessfully!</h2>
    )
}
function Sample(){               //Sample is a nested component carrrying 2 components 
    return(                     //component rendering:<Mango />, <Orange />
        <div>
            <Username />
            <Loginmsg />           
        </div>
    )
}


export default Sample