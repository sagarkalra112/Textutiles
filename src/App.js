//import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode,setMode]=useState('light');
  
  
  
  const toggleMode=()=>{
    if(mode==='light')
    {setMode('dark');
     document.body.style.backgroundcolor = 'black'
    
    }
    else
    {setMode('light');
    document.body.style.backgroundcolor = 'white'
    
    }

    }
  
  return (
    <>
    <Navbar title="TextUtils" aboutText= "About" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyse" mode={mode} />
    <About />
    </div>
  
    </>
    );
  }
export default App;
