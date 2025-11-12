const Data=() =>{
    const usersInfo=[
        {
            username:"HuXn",
            email:"test@gmail.com",
            location:"USA",
        },
        {
            username:"John",
            email:"john@gmail.com",
            location:"California",
        },
        {
            username:"Rick",
            email:"rickdani@gmail.com",
            location:"Arab",
        },
        {
            username:"Alex",
            email:"alexmersion@gmail.com",
            location:"Russia",
        },
        {
            username:"George",
            email:"jd@gmail.com",
            location:"India",
        },
    ];

    return(
        <main>
        { usersInfo.map(({username,email,location}) => (
            <ul key={Math.random()}>
                <li>User Name: {username}</li>
                <li>Location: {location}</li>
                <li>Email Id: {email}</li>
            </ul>
        ))  }
        </main>
    )
}
export default Data


//map() function
//Destructuring
/*
{ usersInfo.map((user) => (
            <ul key={Math.random()}>
                <li>{user.username}</li>
                <li>{user.location}</li>
                <li>{user.email}</li>
            </ul>
        ))  }
*/



/*   //map() function basic written in App.jsx
const numbers=[1,2,3,4,5]

{numbers.map((number) =>(
          <ul key={number}>
            <li>{number}</li>
          </ul>
            ) 
          )
        }
*/