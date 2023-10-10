import { ROL } from "@/app/enum/ROL";
import { Credencial } from "@/app/interfaces/interfaces";
import { newCredencial } from "@/app/services/postData";
import { useRouter } from "next/navigation";
import  { FormEvent, useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
// import { fetchVeterinarios } from "@/app/services/fetchData";
interface ModalProps {
  show: boolean;
  setShow: (open: boolean) => boolean | void;
  dni:string
}

function ModalAddCredencial({ show, setShow,dni }: ModalProps) {
 

  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  async function onSubmitCred(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formRef.current != null) {
      setShow(false);
      const formData = new FormData(formRef.current);
      const value = Object.fromEntries(formData);
      let rol = ROL.VETERINARIO;
      const newCred: Credencial = {
        dni: dni,
        username: value.username.toString(),
        password: value.password.toString(),
        perfilRol: rol,
      };
      await newCredencial(newCred);
      router.refresh();
      
    }
  }
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header>
        <Modal.Title>Nueva Credencial</Modal.Title>
      </Modal.Header>
      <form onSubmit={onSubmitCred} ref={formRef}>
        <Modal.Body>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input
                name="username"
                type="text"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input name="password" type="password" className="form-control" required />
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
              Guardar Credencial
            </Button>
          </div>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default ModalAddCredencial;
