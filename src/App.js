
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

export default function App() {

  const [mode,setMode] = useState("light")


 
  function toggeleHandler(){
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor= "black"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor= "white"
    }
  }


  
  
  return (
    <div>
      <Navbar mode={mode} toggeleHandler={toggeleHandler} />
       <div className='container my-3'>
           <TextForm heading="Enter The Text To Analze" mode={mode} toggeleHandler={toggeleHandler}/>

       </div>
    </div>
  )
}
