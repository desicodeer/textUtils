
import React, { useState } from 'react'


function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = ()=>{
    let lowText = text.toLowerCase();
    setText(lowText);
  }
  const handleCapitalizeClick = ()=>{
    let arr = text.toLowerCase();
    arr = arr.split(" ");
    for(let i=0;i<arr.length;i++){
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const newCap = arr.join(" ");
    setText(newCap);
  }
  const handleClear = ()=>{
    let newText = "";
    setText(newText);
  }
  const handleCopy = ()=>{
    let newText = document.getElementById("exampleFormControlTextarea1");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    
  }

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const[text, setText] = useState("");
    return (
       <div>
        <h1 style={{color: props.mode === 'dark'?'white':'black'}}>{props.heading}</h1>
         <div className="mb-3" >
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{color: props.mode === 'dark'?'white':'black',backgroundColor: props.mode ==='dark'?'black':'White'}} placeholder="Enter some text" id="exampleFormControlTextarea1" rows="8"></textarea>
         </div>
         <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
         <button className="btn btn-warning mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
         <button className="btn btn-light mx-1" onClick={handleCapitalizeClick}>Convert to Capitalise</button>
         <button className="btn btn-success mx-1" onClick={handleClear}>Clear</button>
         <button className="btn btn-secondary mx-1" onClick={handleCopy}>Copy Item</button>
         <h2 className="my-3" style={{color: props.mode === 'dark'?'white':'black'}}>Your Text Summary</h2>
         <p style={{color: props.mode === 'dark'?'white':'black'}}><strong>{text.split(" ").length}</strong> words and <strong>{text.length}</strong> characters</p>
         <p style={{color: props.mode === 'dark'?'white':'black'}}>{text.trim().split(/\s+/).filter(word => word !== '').length} words and {text.trim().length} characters</p>
         <h2 style={{color: props.mode === 'dark'?'white':'black'}}>Preview</h2>
         <p style={{color: props.mode === 'dark'?'white':'black'}}>{text.length>0 ? text : "Enter Something in textbox to preview it"}</p>
       </div>
     
       
    )
}

export default TextForm