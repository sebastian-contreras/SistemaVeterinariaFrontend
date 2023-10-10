import { Mascotas } from "@/app/interfaces/interfaces";
import { fetchMascotas } from "@/app/services/fetchData";
import TablaMascotas from "./components/TablaMascotas";
import Link from "next/link";
const getMascotas = async (page:number=0): Promise<Mascotas[]> => {
  return fetchMascotas(page);
};
async function Mascotas({ searchParams }: { searchParams: {page:number} }) {
  const mascotasres = await getMascotas(searchParams.page);

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
                          {/* PAGINACION */}

                          <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${!searchParams.page || searchParams.page==0 ? `disabled` : ``}`}>
                    <Link href={`?page=${!searchParams.page ? ``: (Number(searchParams.page) - 1) }`} className="page-link">Anterior</Link>
                  </li>
                  <li className={`page-item ${mascotasres.length<10 ? `disabled` : ``}`}>
                    <Link className="page-link" href={`?page=${!searchParams.page?`1`:(Number(searchParams.page) + 1)}`}>
                      Siguiente
                    </Link>
                  </li>
                </ul>
              </nav>

               {/* PAGINACION */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Mascotas;
