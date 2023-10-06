"use client";
import { useState } from "react";
import {
  CitasPendientes,
  Mascotas,
  Persona,
} from "@/app/interfaces/interfaces";
import ModalAddCita from "./components/ModalAddCita";
import ModalChangeHistoria from "./components/ModalChangeHistoria";

function ChangeHistoria({ cita }: { cita: CitasPendientes }) {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <i  className="fas fa-solid fa-check pr-2" data-toggle="modal" onClick={handleShow}>
      </i>
      <ModalChangeHistoria show={show} setShow={setShow} cita={cita} />
    </>
  );
}

export default ChangeHistoria;
