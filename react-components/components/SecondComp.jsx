import React from 'react'
//Sample is a nested component carrrying 2 components 
  //component rendering:<Mango />, <Orange />
//props destructuring inside the body has been done using const {a,b,c,d,e,..}= props.<varname>
const SecondComp = (props) => { 
  const {model,year,dealer,color} = props.myCar;
    
    return(                     
        <div>
          <div>{model}</div>   
          <div>{year}</div> 
          <div>{dealer}</div> 
          <div>{color}</div>          
        </div>
    );
};

export default SecondComp;