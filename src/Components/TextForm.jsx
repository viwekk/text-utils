import React, {useState} from "react";

export default function TextForm(props) {

const handleUpClick =()=>{
    // console.log('Handle on click' + text);
    // console.log(text);
    let newText = text.toUpperCase(); 
    setText(newText);
    props.showAlert("Converted to UPPERCASE!", "success");
}

const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LOWERCASE!", "success");
}

const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared!", "success");
}
const handleOnChange = (event)=>{
    // console.log('On Change');
    setText(event.target.value);
}

const handleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(' '));
  props.showAlert("Extra space removed!", "success");
}

const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode === `dark` ? `white` : `#042743`}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          placeholder="Enter your text here"
          value={text}
          onChange={handleOnChange}
          style={{background: props.mode === `dark` ? `#b0b0b0` : `white`, color: props.mode === `dark` ? `black` : `#042743`}}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra space</button>
    </div>
    <div className="container my-4" style={{color: props.mode === `dark` ? `white` : `black`}}>
        <h1>Your text summary</h1>
        {/* <p>5 words and 20 characters</p> */}
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>Approx {0.008 * text.split(" ").length} minutes takes to read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
