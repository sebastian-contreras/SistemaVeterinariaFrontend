import { Persona } from "@/app/interfaces/interfaces";
import { fetchAllClientes } from "@/app/services/fetchData";
import TablaClientes from "./components/TablaClientes";
import AddPerson from "../components/Add/AddPerson";
import { Pagination } from "react-bootstrap";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { isAdmin } from "@/app/services/session";
import Search from "./components/Search";

const getClientes = async (page?:number): Promise<Persona[]> => {
  return await fetchAllClientes(page);
};

async function Clientes({ searchParams }: { searchParams: {page:number,q: string} }) {
  const session = await getServerSession(authOptions)
  const search = searchParams.q || null;
  let clientes : Persona[] = [];
  if(search == null || search.length <3){
    clientes = await getClientes(searchParams.page || 0);
  }else{
    const searchClientes = await getClientes();
    clientes = searchClientes.filter((elemento)=>elemento.dni.includes(search))
  }

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-primary">Clientes </h5>
        </div>
        {/* <!-- Page Heading --> */}
        <div className="row my-3">
          <div className="col-md-6">
            <div className="col-md-6">
              <Search/>
            </div>
          </div>
          <div className="col-md-6 ms-auto">
            {isAdmin(session?.user.rol)?
            <AddPerson tipo={true} />:""}
          </div>
        </div>

        {/* <!-- DataTales Example --> */}
        <div id="card-body">
          <div className=" shadow mb-4">
            <div className="table-responsive">
              <TablaClientes clientes={clientes} />

              {/* PAGINACION */}

              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${!searchParams.page || searchParams.page==0 ? `disabled` : ``}`}>
                    <Link href={`?page=${!searchParams.page ? ``: (Number(searchParams.page) - 1) }`} className="page-link">Anterior</Link>
                  </li>
                  <li className={`page-item ${clientes.length<10 ? `disabled` : ``}`}>
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
      </div>
    </>
  );
}

export default Clientes;
