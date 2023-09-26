"use client"
import React, { useState } from 'react'
import { Mascotas, Persona, Veterinario } from '@/app/interfaces/interfaces';
import ModalAddCita from './components/ModalAddCita';

function AddCita({mascota,datos}:{mascota:Mascotas,datos:Veterinario[]}) {
    const [show, setShow] = useState<boolean>(false);
    const handleShow = () => setShow(true);    

  return (
    <>
      <button
        data-toggle="modal"
        type="button"
        className="btn btn-primary btn-sm "
        onClick={handleShow}
      >
        Nuevo turno
      </button>
      <ModalAddCita datos={datos}  show={show} setShow={setShow} mascota={mascota}/>
    </>  )
}

export default AddCita