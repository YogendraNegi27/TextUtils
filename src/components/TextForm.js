import React, { useState } from "react";
import {  toast } from "react-hot-toast";


function TextForm(props) {

  
 const [text, setText] =  useState("")
 console.log(text)

 const textChangeHandler = (event) =>{
  setText(event.target.value)
 }

  const upperCaseHandler = ()=>{
    console.log("up btn clikd")
   let newText = text.toUpperCase()
   setText(newText )
   toast.success("converted in uppercase")

  }

  const lowerCaseHandler =() =>{
    let newText= text.toLowerCase()
    setText(newText)
    toast.success("converted in Lowercase")

  }

  function copyHandler(){
    navigator.clipboard.writeText(text)
    toast.success("Text Copied")
  }

  function clearHandler(){
      setText(" ")
      toast.error("clear the text")
  }

  return (
    <div style={{color: props.mode==="dark"? "white" : " black"}} >
    <h1>{props.heading}</h1>
      <div className=" mb-3 "  style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white',
        color:props.mode=== 'dark'?'white': 'black'}}>
        <textarea
          onChange={textChangeHandler}
          value={text}
          className="form-control"
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <div className="container mt-3 ">
         <button type="button" disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={upperCaseHandler} >UpperCase </button>
         <button type="button" disabled={text.length===0} className="btn btn-primary mx-2  my-2" onClick={lowerCaseHandler}>LowerCase</button>
         <button type="button" disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={copyHandler}>Copy</button>
         <button type="button" disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={clearHandler}>Clear</button>
      </div>
      <div className="container mt-3 ">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Character </p>

        <h3>Preview Your Text</h3>
        <p >{text.length === 0?("Nothing To Preview"):text}</p>
      </div>
     

    </div>
  );
}

export default TextForm;
