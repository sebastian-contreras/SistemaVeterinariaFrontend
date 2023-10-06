import { Mascotas } from "@/app/interfaces/interfaces";
import { fetchMascotas } from "@/app/services/fetchData";
import TablaMascotas from "./components/TablaMascotas";
const getMascotas = async (): Promise<Mascotas[]> => {
  return fetchMascotas();
};
async function Mascotas() {
  const mascotasres = await getMascotas();

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-primary">Mascotas</h5>
        </div>
        {/* <!-- Page Heading --> */}
        <div className="row my-3">
          <div className="col-md-6">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="inputPassword"
                placeholder="Search"
              />
            </div>
          </div>

        </div>
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          {/* <div className="card-body"> */}
          <div className="table-responsive">
            <TablaMascotas mascotas={mascotasres}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mascotas;
