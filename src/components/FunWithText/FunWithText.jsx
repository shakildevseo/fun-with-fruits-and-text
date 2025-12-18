import React from 'react'
import "../../App.css"
import { useState } from 'react'
const FunWithText = () => {

// state management start
const [firstName, setFirstName] = useState("")

const [lastName, setLastName] = useState("")

const [fullName, setFullName] = useState("Show Preview Output 😁🫵👉 : ")
// state management end


// handle function start
 const handlerFirstName = (e)=>{
   setFirstName(e.target.value)
}
 const handlerLastName = (e)=>{
   setLastName(e.target.value)
}


 

// handle function end


// function start
  const handleClick = ()=>{
       function showFullName(){
           setFullName(`Full Name:  ${firstName} ${lastName} ` );

           setFirstName("");
           setLastName("")

       }
       showFullName()

       //or
       /* 
       
       function showFullName(){
           setFullName(`Full Name:  ${firstName} ${lastName} ` );

           setFirstName("");
           setLastName("")

       }
    handlerClick(){
   showFullName()
    }
       
       */
  }

// function end


  return (
    <>
    
    <div className="fun-with-text">
        <div className="container">
            <div className="content-div ">
                <h2>Let's Fun With Text Buddy🤭🤭</h2>
                  
                  <input type="text" placeholder='First Name'  value={firstName} onChange={handlerFirstName}/>
                  <input  type="text"placeholder='Last Name'  value={lastName} onChange={handlerLastName}/>

                  <button onClick={handleClick}>Send</button>
                 <div className="output animated-box">
                     <h2>{fullName}</h2>
                 </div>



            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default FunWithText