import { CitasPendientes, Veterinario } from "@/app/interfaces/interfaces";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import { CitaDtoPost } from "../../postDto/CitaDtoPost";
import { newHistoria } from "@/app/services/postData";
import { Button, Modal } from "react-bootstrap";
interface ModalProps {
  show: boolean;
  setShow: (open: boolean) => boolean | void;
  cita: CitasPendientes;
}

function ModalChangeHistoria({ show, setShow, cita }: ModalProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  async function onSubmitHistoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formRef.current != null) {
      setShow(false);
      const formData = new FormData(formRef.current);
      const value = Object.fromEntries(formData);
      let perfil = "USUARIO";
      const newCita: CitaDtoPost = {
        fecha: cita.fecha,
        consultorio: cita.consultorio,
        monto: cita.monto,
        veterinario: cita.veterinario.dni,
        mascota: cita.mascota.idMascotas,
        estado: true,
        titulo: value.titulo.toString(),
        descripcion:value.descripcion.toString(),
        imagenes:""
      };
      await newHistoria(newCita, cita.idCita);
      router.refresh();
    }
  }
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header>
        <Modal.Title>Historia {cita.idCita.toString()}</Modal.Title>
      </Modal.Header>
      <form onSubmit={onSubmitHistoria} ref={formRef}>
        <Modal.Body>

        <div className="mb-3 row">
  <label className="col-sm-3 ">Fecha</label>
  <div className="col-sm-9">
    <input type="text" className="form-control" placeholder={new Date(cita.fecha).toLocaleDateString()} disabled/>
  </div>
</div>

<div className="mb-3 row">
  <label className="col-sm-3 col-form-label">Consulta</label>
  <div className="col-sm-9">
    <input type="text" className="form-control" placeholder={cita.consultorio.toString()} disabled />
  </div>
</div>

<div className="mb-3 row">
  <label className="col-sm-3 col-form-label">Veterinario</label>
  <div className="col-sm-9">
    <input type="text" className="form-control" placeholder={cita.veterinario.nombre.toString()} disabled/>
  </div>
</div>

<div className="mb-3 row">
  <label className="col-sm-3 col-form-label">Mascota</label>
  <div className="col-sm-9">
    <input type="text" className="form-control" placeholder={cita.mascota.nombre.toString()} disabled/>
  </div>
</div>

<div className="mb-3 row">
  <label className="col-sm-3 col-form-label">Monto</label>
  <div className="col-sm-9">
    <input type="text" className="form-control" placeholder={cita.monto.toString()} disabled/>
  </div>
</div>
<div className="mb-3 row">
  <label className="col-sm-3 col-form-label">Titulo</label>
  <div className="col-sm-9">
    <input type="text" className="form-control" name="titulo"/>
  </div>
</div>
<div className="mb-3 row">
  <label className="col-sm-3 col-form-label">Descripcion</label>
  <div className="col-sm-9">
    <textarea  className="form-control"  name="descripcion"/>
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
              Guardar Historia
            </Button>
          </div>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default ModalChangeHistoria;
