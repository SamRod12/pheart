import React from 'react';
import { FaTimes  } from "react-icons/fa";
import "./Card.css";
import Image from "next/image";
import { Modal } from '@/Modal';

const Card = ({ children, onClose , heartClick}) => {
    
    const[openModal, setOpenModal] = React.useState(false);
    const openCloseModal = (value) => {
        setOpenModal(!value);
        
    }
    const onOpenModal = () => openCloseModal(openModal)
        return (
            
            <div className={`card relative ${heartClick ? 'animate-pop-out' : ''}`}>
                <div className="circle absolute top-0 right-0 bg-red-500 w-12 h-12 rounded-full">
                    
                </div>
                <div className="circle absolute bottom-0 left-0 bg-blue-500 w-12 h-12 rounded-full">
                
                </div>

                <div className="card-inner p-6 flex flex-col justify-between h-full">
                    <div className='header-card'>
                        <button onClick={onClose} className="Icon-delete Icon figure absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none">
                            <FaTimes className="h-5 w-5" />
                        </button>
                        <div className="text-center">
                            <h2 className="text-lg font-semibold text-gray-800">Para mi amor</h2>
                        </div>
                    </div>
                    <div className="body-card flex justify-center">
                        <textarea
                            className="w-full h-auto bg-transparent border-none"
                            value={children || "Texto por defecto"}
                            readOnly
                        />
                    </div>
                    <div className="footer-card text-right" > 
                        <p className="text-gray-700">Con cariño tu esposo: Leo</p>
                        <Image
                        src="/orchid.svg"
                        alt="orchid"
                        width={100}
                        height={24}
                        className='orchid'
                        onClick= {onOpenModal}
                        priority
                        />
                    </div>
                </div>

                {openModal && (
                    <Modal>
                        <Image
                            src="/orchid.svg"
                            alt="orchid"
                            width={100}
                            height={24}
                            className='orchid-modal'
                            onClick= {onOpenModal}
                            priority
                        />
                    </Modal>
                )}
            </div>
        
        );
    };

export {Card};