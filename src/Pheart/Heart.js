import React from "react";
import "@/Pheart/Pheart.css"
const Heart = ({onClose}) =>{
    return (
    
        <div className="heart" onClick={onClose}></div>
    
      );
}

export {Heart}