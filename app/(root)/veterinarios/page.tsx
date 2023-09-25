import Modaljs from "@/app/components/Modaljs";
import { Veterinario } from "@/app/interfaces/interfaces";
import Link from "next/link";
import React from "react";
import FormPersona from "../components/FormPersona";
import { fetchVeterinarios } from "@/app/services/fetchData";
import TablaVeterinarios from "./components/TablaVeterinarios";
import AddPerson from "../components/Add/AddPerson";

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
              <input
                type="text"
                className="form-control"
                id="inputPassword"
                placeholder="Search"
              />
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
