'use client'
import React from 'react';
import { Heart } from './Heart';
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
            "He creado esta carta con el único fin de darte una flor indestructible. 
            Puedes venir en cualquier momento a verla, en cualquier lugar, 
            en cualquier momento. Y recuerda que te amo y te amaré por siempre."
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export {ValentineModule};
