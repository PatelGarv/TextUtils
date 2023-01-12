import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  

  const showAlert= (message,type) =>{
    setAlert({
      msg: message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.color = "white";
      document.body.style.backgroundColor = "rgb(28 20 62)";
      setMode("dark");
      showAlert("Dark mode has been Enabled","success");
    } else {
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      setMode("light");
      showAlert("Light mode has been Enabled","success");

    }
  };

  const greenClick = () =>{
    document.body.style.color = "white";
      document.body.style.backgroundColor = "#3D5656";
      setMode("dark");
  }
  

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} greenClick={greenClick}/>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <div className="my-3">
          <h1>Enter Text to Analyse</h1>
        </div>

        <TextForm mode={mode} />

      </div>
    </>
  );
}

export default App;
