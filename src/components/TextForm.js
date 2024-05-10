import React, { useState } from "react";

function TextForm(props) {
  function handleUpClick() {
    // console.log("Uppercase was clicked " + text);
    let new_text = text.toUpperCase();
    setText(new_text);
    props.showAlert("Converted to Uppercase", "success");
  }

  function handleLoClick() {
    // console.log("Lowercase was clicked " + text);
    let new_text = text.toLowerCase();
    setText(new_text);
    props.showAlert("Coverted to Lowercase", "success");
  }

  const clearText = () => {
    let new_text = "";
    setText(new_text);
    props.showAlert("Text is cleared", "success");
  };

  const reverse = () => {
    let new_text = "";
    for (let i = text.length - 1; i >= 0; i--) {
      new_text = new_text + text[i];
    }
    setText(new_text);
    props.showAlert("Text is reversed", "success");
  };

  function handleOnChange(event) {
    // console.log("On change");
    setText(event.target.value);
    // console.log(event.target.value);
  }

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.textarea}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
            style={{ backgroundColor: props.bgColor2, color: props.textColor2 }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1"
          onClick={handleUpClick}
          alert={props.alert}
        >
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={reverse}>
          Reverse Case
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters written
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here."}
        </p>
      </div>
    </>
  );
}

export default TextForm;
