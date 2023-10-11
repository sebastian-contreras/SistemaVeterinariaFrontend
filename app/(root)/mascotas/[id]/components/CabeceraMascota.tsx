import { Mascotas } from '@/app/interfaces/interfaces'
function CabeceraMascota({mascota}:{mascota:Mascotas}) {
  return (
    <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-primary">
            Perfil de Mascota
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-xl-3 col-md-12 pb-5 col-3 pl-5 text-center">
              <img className="rounded-circle" width={180} height={180} alt="..." src={`${mascota.urlFoto}`}/>
            </div>
            <div className="col-xl-9 col-md-12">
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Nombre
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${mascota.idMascotas} - ${mascota.nombre}`}
                  readOnly
                />
              </div>

              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Nacimiento
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${mascota.fechaDeNacimiento} (${
                    new Date(Date.now()).getFullYear() -
                    new Date(mascota.fechaDeNacimiento).getFullYear()
                  })`}
                  readOnly
                />
              </div>
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Sexo
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${mascota.sexo}`}
                  readOnly
                />
              </div>
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Tipo
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${mascota.tipo}`}
                  readOnly
                />
              </div>
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Dueño
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${mascota.dueno.dni.toString()} - ${
                    mascota.dueno.nombre
                  } ${mascota.dueno.apellido}`}
                  readOnly
                />
              </div>
              <div className="input-group mb-3 col-9">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Contacto
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder={`${mascota.dueno.telefono}`}
                  readOnly
                />
              </div>
              <a
                className="btn btn-primary ml-3"
                href={`/perfil/${mascota.dueno.dni}`}
                role="button"
              >
                Ir al dueño
              </a>
            </div>
          </div>
        </div>
      </div>

  )
}

export default CabeceraMascota