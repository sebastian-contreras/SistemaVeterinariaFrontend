"use client"
import { Persona } from "@/app/interfaces/interfaces";
import { useRouter } from "next/navigation";
import React, { FormEvent, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { PersonaDtoPost } from "../postDto/PersonaDtoPost";
import { postNuevaPersona } from "@/app/services/postData";
import ModalAddPerson from "./components/ModalAddPerson";
import { toast } from "react-toastify";

function AddPerson({tipo}:{tipo:boolean}) {
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
        Nuevo cliente
      </button>
      <ModalAddPerson show={show} setShow={setShow} tipo={tipo}></ModalAddPerson>
    </>
  );
}

export default AddPerson;
