// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import About from "./components/About";

function App() {
  const [currentMode, setMode] = useState("light");
  // const [currentText, setText] = useState("Toggle Mode");
  const [textColor, setColor] = useState("dark");
  // const [bgColor2, setBgColor] = useState("white");
  // const [textColor2, setColor2] = useState("black");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (currentMode === "light") {
      setMode("dark");
      // setText("Disable Dark Mode");
      setColor("light");
      document.body.style.backgroundColor = "#000d4d";
      document.body.style.color = "white";
      // setBgColor("grey");
      // setColor2("white");
      showAlert("Dark Mode is enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      // setText("Enable Dark Mode");
      setColor("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      // setBgColor("white");
      // setColor2("black");
      showAlert("Light Mode is enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  // const toggleMode1 = () => {
  //   document.body.style.backgroundColor = "red";
  // };
  // const toggleMode2 = () => {
  //   document.body.style.backgroundColor = "blue";
  // };
  // const toggleMode3 = () => {
  //   document.body.style.backgroundColor = "green";
  // };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="My App"
        about="About Us"
        mode={currentMode}
        toggleMode={toggleMode}
        // text={currentText}//
        textColor={textColor}
        // toggleMode1={toggleMode1}
        // toggleMode2={toggleMode2}
        // toggleMode3={toggleMode3}
      />
      <Alert alert={alert} />
      <div className="container my-4">
        {/* <Routes> */}
        {/* <Route
              exact
              path="/"
              element={ */}
        <TextForm
          textarea="Enter the text to analyze "
          mode={currentMode}
          // textColor2={textColor2}
          // bgColor2={bgColor2}
          showAlert={showAlert}
        />
        {/* } */}
        {/* ></Route> */}
        {/* <Route exact path="/about" element={<About />}></Route> */}
        {/* </Routes> */}
        {/* <About /> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
