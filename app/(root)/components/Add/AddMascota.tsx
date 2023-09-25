"use client"
import React, { useState } from 'react'
import ModalAddMascota from './components/ModalAddMascota';
import { Persona } from '@/app/interfaces/interfaces';

function AddMascota({dueno}:{dueno:Persona}) {
    const [show, setShow] = useState<boolean>(false);
    const handleShow = () => setShow(true);    

  return (
    <>
      <button
        data-toggle="modal"
        type="button"
        className="btn btn-primary "
        onClick={handleShow}
      >
        Nueva mascota
      </button>
      <ModalAddMascota show={show} setShow={setShow} dueno={dueno}/>
    </>  )
}

export default AddMascota