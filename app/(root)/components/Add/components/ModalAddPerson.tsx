import React, { FormEvent, useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { PersonaDtoPost } from "../../postDto/PersonaDtoPost";
import { postNuevaPersona } from "@/app/services/postData";
import { useRouter } from "next/navigation";
import { Persona } from "@/app/interfaces/interfaces";
interface ModalProps {
  show: boolean;
  setShow: (open: boolean) => boolean | void;
  tipo: boolean;
}

export default function ModalAddPerson({ show, setShow, tipo }: ModalProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  async function onSubmitPersona(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formRef.current != null) {
          setShow(false);
          const formData = new FormData(formRef.current);
          const value = Object.fromEntries(formData);
          let perfil = "USUARIO";
          const newPersona: PersonaDtoPost = {
            dni: value.dni.toString(),
            nombre: value.nombre.toString(),
            apellido: value.apellido.toString(),
            telefono: value.telefono.toString(),
            email: value.email.toString(),
            matricula: null,
            direccion: value.direccion.toString(),
            perfilRol: perfil,
          };
          if (!tipo) {
            newPersona.perfilRol = "VETERINARIO";
            newPersona.matricula = value.matricula.toString();
          }
          await postNuevaPersona(newPersona);
          router.refresh();
    }

  }

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header>
        <Modal.Title>Nuevo {tipo ? "cliente" : "veterinario"}</Modal.Title>
      </Modal.Header>
      <form onSubmit={onSubmitPersona} ref={formRef}>
        <Modal.Body>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Dni</label>
            <div className="col-sm-10">
              <input name="dni" type="text" className="form-control" required />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Nombre</label>
            <div className="col-sm-10">
              <input
                name="nombre"
                type="text"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Apellido</label>
            <div className="col-sm-10">
              <input
                name="apellido"
                type="text"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Telefono</label>
            <div className="col-sm-10">
              <input
                name="telefono"
                type="text"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Direccion</label>
            <div className="col-sm-10">
              <input
                name="direccion"
                type="text"
                className="form-control"
                required
              />
            </div>
          </div>

          {tipo ? (
            ""
          ) : (
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Matricula</label>
              <div className="col-sm-10">
                <input
                  name="matricula"
                  type="text"
                  className="form-control"
                  required
                />
              </div>
            </div>
          )}

          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                name="email"
                type="text"
                className="form-control"
                placeholder="email@example.com"
                required
              />
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <div className="mt-3">
            <Button
              className="mx-2"
              variant="secondary"
              onClick={() => setShow(false)}
            >
              Close
            </Button>
            <Button type="submit" variant="primary">
              Guardar {tipo ? "cliente" : "veterinario"}
            </Button>
          </div>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
