import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [Analyse, setAnalyse] = useState("");
  const [exe, setExe] = useState("");
  const [exe1, setExe1] = useState("");
  const [WperS, setWperS] = useState("");

  const handleUCclick = () => {
    let tempTxt = text.toUpperCase();
    setText(tempTxt);
  };

  const handleLCclick = () => {
    let tempTxt = text.toLowerCase();
    setText(tempTxt);
  };

  const handleAnalyzer = () => {
    setAnalyse("Analyse");
    let tempTxt = text.toLowerCase().split(" ").join();
    setExe("Characters (including spaces): " + tempTxt.length);
    let tempTxt1 = text.toLowerCase().split(" ").join("");
    setExe1("Characters (excluding spaces): " + tempTxt1.length);
    let tempTxt2 = text.toLowerCase().split(".");
    let temptotal = 0;
    tempTxt2.forEach((item) => {
      temptotal = temptotal + item.split(" ").length;
    });
    let wordsPERsens = temptotal / tempTxt2.length;

    setWperS("Average word Per sentance is : " + wordsPERsens);
  };

  const handleClearclick = () => {
    setText("");
  };

  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  // ratto mari lo aa function and onChange attribute..of any user-input thing
  const handleOnChange = (event) => {
    setText(event.target.value)
  };

  return (
    <>
      <div className="mb-3">
        <textarea
        placeholder="Please enter the text"
          value={text}
          onChange={handleOnChange}
          className="form-control"
          style={{backgroundColor : props.mode === "light" ? "white" : "rgb(158 154 182)",
          color: props.mode === "light"?"black":"white"  }}
          id="myBox"
          rows="8"
          ></textarea>
        <button onClick={handleUCclick} className="btn btn-primary my-3 mx-2">
          Convert to Uppercase
        </button>
        <button onClick={handleLCclick} className="btn btn-primary my-3 mx-3">
          Convert to Lowercase
        </button>
        <button onClick={handleAnalyzer} className="btn btn-primary my-3 mx-3">
          Analyze
        </button>
        <button onClick={handleCopy} className="btn btn-primary my-3 mx-3">
          Copy
        </button>
        <button
          onClick={handleClearclick}
          className="btn btn-primary my-3 mx-3"
        >
          Clear
        </button>
      </div>
      <div className="container">
        <h1>Summary of Input-Text</h1>
        <p className="my-3 mx-2">
          <b>{ (text.split(" ").includes("")) ? (text.split(" ").length-1) : (text.split(" ").length) } Words </b> and{" "}
          <b>{text.length} Characters </b>
        </p>
        <p className="mx-2">
          <b>{0.008 * text.split(" ").length - 0.008}</b> minutes will take to
          read this contant
        </p>
      </div>

      <div className="container">
        <h2>{Analyse}</h2>
        <p className="my-3 mx-2">{exe}</p>
        <p className="mx-2">{exe1}</p>
        <p className="mx-2">{WperS}</p>
      </div>

      <div className="container">
        <h2>Preview</h2>
        <p className="my-3 mx-2">{text}</p>
      </div>
    </>
  );
}
