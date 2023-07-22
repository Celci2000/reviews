import React ,{useState} from 'react'
import reviews from './data.js'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa'

import './App.css'

function App() {
  const [index, setIndex]= useState(0)
  const {name,job ,image,text}= reviews[index]
  
  function checkNumber(e){
    if(e>reviews.length-1){ return 0

    }
    else if(e<0)
    { return reviews.length-1
    }
    else{
      return e
    }


  }

    function handlePrev(){
      setIndex((state)=> {
        let newIndex =state-1
        return checkNumber(newIndex)
      })
      

    }
    function  handleNext(){
      setIndex((state)=>{
        let newIndex=state+1
        return checkNumber(newIndex)      
      })
    
    }
    function showRandom(){
      let newIndex= Math.floor(Math.random()*reviews.length)
      console.log(newIndex)
      if(newIndex==index ){
     newIndex=index+1
    }
    return setIndex(checkNumber(newIndex))
    }

return (
    <div className="App">
      <div className="main">
        
        <img  className="image"src={image} alt={job}/>
     
        <h4 className="name">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        
        <div className="back-forth">
        <button className="prevEle" onClick={handlePrev}><FaChevronLeft />
        </button>

           <button className="nextEle" onClick ={handleNext}><FaChevronRight /></button></div>
<button className="btn" onClick={showRandom}>surprise me</button>
      
      </div>
      </div>
  
  
    
  );
}

export default App;
