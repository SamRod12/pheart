'use client'
import React from 'react';
import { Heart } from './Heart';
import { FaHeart } from "react-icons/fa";
import { FaHeartCrack as FaHeartBroken }  from "react-icons/fa6";
import { Card } from '@/Card';

const ValentineModule = () => {
  const [heartClicked, setHeartClicked] = React.useState(false);
  const [confirmClicked, setConfirmClicked] = React.useState(false);

  const handleHeartClick = () => {
    setHeartClicked(!heartClicked);
    document.body.classList.toggle("heart-clicked");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-pink-200">
      <div className={`cursor-pointer relative animate-heart `} >
        <div className={`absolute inset-0 transition-transform transform `}>
          <div className="flex justify-center items-center w-full h-full">
            {!heartClicked && <Heart onClose={handleHeartClick}/>}
          </div>
        </div>
        {heartClicked && (
          <div className="flex justify-center items-center h-screen">
            <Card onClose={handleHeartClick} heartClick={heartClicked}>
              
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export {ValentineModule};
