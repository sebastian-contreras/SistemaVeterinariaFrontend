import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import { MascotasDtoPost } from "../../postDto/MascotaDtoPost";
import { postNuevaMascota } from "@/app/services/postData";
import { Button, Form, Modal } from "react-bootstrap";
import { Persona } from "@/app/interfaces/interfaces";
import { toast } from "react-toastify";
import { SEXOMASCOTAS, TIPOMASCOTAS } from "@/app/enum/MASCOTAS";
interface ModalProps {
  show: boolean;
  setShow: (open: boolean) => boolean | void;
  dueno: Persona;
}
function ModalAddMascota({ show, setShow, dueno }: ModalProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  async function onSubmitPersona(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formRef.current != null) {
      setShow(false);
      const formData = new FormData(formRef.current);
      const value = Object.fromEntries(formData);
      let perfil = "USUARIO";
      const newMascota: MascotasDtoPost = {
        nombre: value.nombre.toString(),
        fechaDeNacimiento: new Date(value.fechaDeNacimiento.toString()),
        tipo: value.tipo.toString(),
        urlFoto: value.urlFoto.toString(),
        sexo: value.sexo.toString(),
        dueno: dueno.dni,
      };
      let res = await postNuevaMascota(newMascota);
      router.refresh();
      res.ok ? toast.success("Éxito!") : toast.error("Error");
    }
  }

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header>
        <Modal.Title>Nuevo Mascota</Modal.Title>
      </Modal.Header>
      <form onSubmit={onSubmitPersona} ref={formRef}>
        <Modal.Body>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">Nombre</label>
            <div className="col-sm-8">
              <input type="text" className="form-control" name="nombre" />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">
              Fecha de Nacimiento
            </label>
            <div className="col-sm-8">
              <Form.Control
                type="date"
                max={new Date().toISOString().slice(0, 10)}
                name="fechaDeNacimiento"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">Tipo</label>
            <select className="form-select" name="tipo">
              {Object.values(TIPOMASCOTAS)
              .filter((v)=>isNaN(Number(v)))
              .map((mascota, index) => (
                <option key={index} value={mascota}>
                  {mascota}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-4 col-form-label">Sexo</label>
            <div className="col-sm-8">
              <Form.Select className="form-select" name="sexo">
              {Object.values(SEXOMASCOTAS)
              .filter((v)=>isNaN(Number(v)))
              .map((sexo, index) => (
                <option key={index} value={sexo}>
                  {sexo}
                </option>
              ))}
              </Form.Select>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Foto principal</label>
            <input
              className="form-control"
              type="text"
              id="formFile"
              name="urlFoto"
            />
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
              Guardar Mascota
            </Button>
          </div>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default ModalAddMascota;
