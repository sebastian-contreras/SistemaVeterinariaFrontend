import { Veterinario } from "@/app/interfaces/interfaces";
import { fetchVeterinarios } from "@/app/services/fetchData";
import TablaVeterinarios from "./components/TablaVeterinarios";
import AddPerson from "../components/Add/AddPerson";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useRouter } from "next/navigation";
import { ROL } from "@/app/enum/ROL";

const getVeterinarios = async():Promise<Veterinario[]> => {
  return fetchVeterinarios();
};
async function Veterinarios() {
  const veterinarios = await getVeterinarios();
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-primary">Veterinarios</h5>
        </div>
        {/* <!-- Page Heading --> */}
        <div className="row my-3">
          <div className="col-md-6">
            <div className="col-md-6">
            </div>
          </div>
          <div className="col-md-6 ms-auto">
              <AddPerson tipo={false}/>
          </div>
        </div>
      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
          <div className="table-responsive">
            <TablaVeterinarios veterinarios={veterinarios}/>
            
        </div>
      </div>
      </div>

    </>
  );
}

export default Veterinarios;
