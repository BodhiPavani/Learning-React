
import './App.css'
import './sample.css'

import Sample from './components/Sample.jsx'
import FirstComp from './components/FirstComp.jsx'
import SecondComp from './components/SecondComp.jsx'
import TextFeild from './components/TextFeild.jsx'
import MultiResource from './components/MultiResource.jsx'

const myCar= {
  model: "Maruthi",
  year: 2014,
  dealer: "Nixon",
  color: "red"
}

//App.js is the main component
function App() {

  return (
    <>
      <div className="App">
        <Sample />
        <p>Don't have an account? <a><u>Sign Up</u></a></p>
       
        <SecondComp myCar={myCar}/>

         <FirstComp />
         <TextFeild />
        <MultiResource />
      
      </div>
      
    </>
  )
}

export default App
