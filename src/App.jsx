import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";

import React, { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Router, Routes } from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
      document.title = 'TextUtils';
    }else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled!", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }, 1500);
    }
  }

  const handleRedMode = () => {
    if(mode === 'eyeComfort'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
      document.title = 'TextUtils';
    }else{
      setMode('eyeComfort');
      document.body.style.backgroundColor = '#e8dab2';
      showAlert("Eye comfort has been enabled!", "success");
      document.title = 'TextUtils - Eye Comfort Mode';
    }
  }
  return (
    // <>
      // <Router>
        // <Navbar title="Text Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode} redMode={handleRedMode}/>
        // {/* <Navbar /> */}
        // <Alert alert={alert}/>
        // <div className="container my-3">
        // <Routes>

            // {/* exact keyword:  users --> comonent1,  when we want to access component2 and we have not use exact keyword before path the it show result of component1
                                // users/home --> comonent2 */}
          
            // <Route exact path="/about" element={<About/>}/>
            // <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Get your text in Capital letter" mode={mode} />}/>
        // </Routes>
        // {/* <TextForm showAlert={showAlert} heading="Get your text in Capital letter" mode={mode} /> */}
        // {/* <About/> */}
        // </div>
      // </Router>
    // </>
    <>
      {/* <Navbar title="Text Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode} redMode={handleRedMode}/> */}
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} redMode={handleRedMode}/>
      {/* <Navbar /> */}
      <Alert alert={alert}/>
      <div className="container my-3">        
        <TextForm showAlert={showAlert} heading="Get your text in Capital letter" mode={mode} />
        {/* <About/> */}
      </div>
  </>
  );
}

export default App;