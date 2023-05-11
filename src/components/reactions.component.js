import React, { Component, useState } from "react";
import KafkaService from "../services/kafka.service";



//function Reactions()  {
const Reactions = () => {

//function AddTutorial() {
/*
   constructor(props) {
    super(props);
    this.saveLike = this.saveLike.bind(this);
  }
  */

  function saveLike(e, status) {
  
   let data = {
     id: 0,
     status: status
   };

   console.log(JSON.stringify(data));
	  
   KafkaService.reaction("i-love-adsoftsito");
   e.preventDefault();  
  }


  //render() { 
 return (
        
          <div className="form-group">
            
            <button onClick={(e) => {
	          e.preventDefault();  
		  saveLike(e, 1)
		    
		  }
	      }
	     className="btn btn-success">
               Love
            </button>
		
          </div>
        )
//}
}

export default Reactions;
