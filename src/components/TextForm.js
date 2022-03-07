import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearText = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText =("");
    setText(newText)
  }
  const handleCopy = () =>{
  console.log("I am copy");
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  }
  
  const handleOnChange = (event)=>{
    console.log("On change ");
    setText(event.target.value)

  }
  const [text, setText] = useState('');

  return (
    <>
    <div className="container ">
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" widht="16" ></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={ handleUpClick }>Convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick={ handleLoClick }>Convert to lowercase</button>
<button className="btn btn-primary mx-1" onClick={ handleClearText }>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={ handleCopy }>Copt Text</button>

    </div>
    <div className="container my-2">
      <h2>Your Tesxt Summery </h2>
      <p>{text.split(" ").length} Words {text.length} Charectors </p> 
      <p>{ 0.008*text.split(" ").length} Minutes read</p> 
      <h2>Preview</h2>
      <p> {text.length>0?text: "Enter something in the text box to preview it here"}</p>

      </div>
    </>
  )
}
