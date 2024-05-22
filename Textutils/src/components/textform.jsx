import { useState } from "react"
import "./textform.css"
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Textform(){
  
    const[text,setText] = useState("")
   
    const handleOnChange = (e)=>{
        console.log("On change");
        setText(e.target.value);
        
    }

    const handleUpClick = ()=>{
        console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        toast.success("Converted to Uppercase", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    const handleLoClick = ()=>{
        console.log("Lower case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        toast.success("Converted to Lowercase", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
    }

    const handleClearClick = ()=>{
        console.log("Clear Text");
        let newText = "";
        setText(newText);
        toast.info('Clear whole text', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        toast.success("Text copied successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        toast.success("Remove extra space successfully", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
    }


    return(
        <>
        <nav>
            <p>TextUtils</p>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
        </nav>
        <section>
        <div>
        <h1 className="h1tag">TextUtils - Word Counter, Character Counter, Remove Extra Space</h1>
        <h2 className="text">Enter your text here:</h2>
        <textarea name="text" value={text} onChange={handleOnChange} id="mybox" rows={15} cols={150}></textarea>
        </div>
        <div className="buttons">
          <button className="btn1" disabled={text.length===0} onClick={handleUpClick} >Convert to Uppercase</button >
          <button className="btn1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn2" disabled={text.length===0} onClick={handleClearClick}>Clear Text</button>
          <button className="btn3" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
          <button className="btn1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="textsummary">
           <h1 className="h1tag2">Your Text Summary</h1>
           <p>Number of words: {text.split(/\s+/).filter((e)=>{return e.length!==0}).length}</p>
           <p>Number of Character: {text.length}</p>
           <p>Reading time: {0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length}</p>
           <h2 className="h2tag">Preview Document</h2>
           <textarea className="preview"  value={text}></textarea>
        </div>
        </section>
        <ToastContainer />
        </>
    )
}
