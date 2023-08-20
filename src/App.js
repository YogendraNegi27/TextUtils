
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import { toast } from 'react-hot-toast'

export default function App() {

  const [mode,setMode] = useState("light")


 
  function toggeleHandler(){
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor= "black"
      toast.success("Dark Mode Enabled")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor= "white"
      toast.success("Light Mode Enabled")
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
