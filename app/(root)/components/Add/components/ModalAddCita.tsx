import { Mascotas, Persona, Veterinario } from "@/app/interfaces/interfaces";
import { useRouter } from "next/navigation";
import  { FormEvent, useRef } from "react";
import { CitaDtoPost } from "../../postDto/CitaDtoPost";
import { postNuevoTurno } from "@/app/services/postData";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
// import { fetchVeterinarios } from "@/app/services/fetchData";
interface ModalProps {
  show: boolean;
  setShow: (open: boolean) => boolean | void;
  mascota: Mascotas;
  datos:Veterinario[]
}

function ModalAddCita({ show, setShow, mascota,datos }: ModalProps) {
 

  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  async function onSubmitCita(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formRef.current != null) {
      setShow(false);
      const formData = new FormData(formRef.current);
      const value = Object.fromEntries(formData);
      const newCita: CitaDtoPost = {
        fecha: new Date(value.fecha.toString()),
        consultorio: value.consultorio.toString(),
        monto: Number(value.monto),
        veterinario: value.veterinario.toString(),
        mascota: mascota.idMascotas,
        estado: false,
      };
      let res = await postNuevoTurno(newCita);
      router.refresh();
      res.ok ? toast.success("Éxito!") : toast.error("Error");
      
    }
  }
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header>
        <Modal.Title>Nuevo Mascota</Modal.Title>
      </Modal.Header>
      <form onSubmit={onSubmitCita} ref={formRef}>
        <Modal.Body>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">Fecha de turno</label>
            <div className="col-sm-8">
              <Form.Control type="date" name="fecha" min={new Date().toISOString().slice(0, 10)} required/>
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">Consultorio</label>
            <select className="form-select col-sm-5" name="consultorio" required>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="A3">A3</option>
              <option value="A4">A4</option>
              <option value="A5">A5</option>
            </select>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">Veterinario</label>
            <div className="col-sm-5">
              <select className="form-select" name="veterinario">
                {datos.map((vet,index) => (
                  <option key={index}
                    value={vet.dni.toString()}
                  >{`${vet.matricula} - ${vet.nombre} ${vet.apellido}`}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Monto</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="monto" required/>
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
              Guardar Cita
            </Button>
          </div>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default ModalAddCita;
