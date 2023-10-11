import AddCredencial from "@/app/(root)/components/Add/AddCredencial";
import { ROL } from "@/app/enum/ROL";
import { Persona } from "@/app/interfaces/interfaces";
import Image from "next/image";
import "./Cabecera.css";
function Cabecera({
  perfil,
  hasCredential,
}: {
  perfil: Persona;
  hasCredential: boolean;
}) {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-primary">
          Perfil de {perfil.perfilRol.toLocaleLowerCase()}
        </h5>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-xl-3 col-md-12 pb-5 text-center">
            <div className="imginiciales mx-auto">
              <span className="bold">
                {perfil.nombre[0]}
                {perfil.apellido[0]}
              </span>
            </div>
          </div>
          <div className="col-xl-9 col-md-12">
            <div className="input-group mb-3 col-9">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Nombre
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder={`${perfil.nombre} ${perfil.apellido}`}
                readOnly
              />
            </div>
            <div className="input-group mb-3 col-9">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Documento
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder={`${perfil.dni}`}
                readOnly
              />
            </div>
            <div className="input-group mb-3 col-9">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Telefono
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder={`${perfil.telefono}`}
                readOnly
              />
            </div>
            <div className="input-group mb-3 col-9">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Email
              </span>
              <input
                type="email"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder={`${perfil.email}`}
                readOnly
              />
            </div>
            <div className="input-group mb-3 col-9">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Direccion
              </span>
              <input
                type="email"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder={`${perfil.direccion}`}
                readOnly
              />
            </div>
            {perfil.perfilRol === "VETERINARIO" ? (
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Matricula
                </span>
                <input
                  type="email"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${perfil.matricula}`}
                  readOnly
                />
              </div>
            ) : (
              ""
            )}
            <div className="ml-3">
              {!hasCredential && perfil.perfilRol == ROL.VETERINARIO ? (
                <AddCredencial dni={perfil.dni.toString()} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cabecera;
