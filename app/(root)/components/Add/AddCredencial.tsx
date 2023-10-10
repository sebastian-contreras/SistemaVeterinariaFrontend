"use client"
import React, { useState } from 'react'
import { Mascotas, Persona, Veterinario } from '@/app/interfaces/interfaces';
import ModalAddCita from './components/ModalAddCita';
import ModalAddCredencial from './components/ModalAddCredencial';

function AddCredencial({dni}:{dni:string}) {
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
        Otorgar Credencial
      </button>
      <ModalAddCredencial show={show} setShow={setShow} dni={dni}/>

    </>  )
}

export default AddCredencial