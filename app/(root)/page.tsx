import { getServerSession } from "next-auth";
import Veterinario from "./components/dashboard/Veterinario";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { ROL } from "../enum/ROL";
import Administrador from "./components/dashboard/Administrador";

export default async function Home() {
  const session  = await getServerSession(authOptions)

  const dashboardRender = ()=>{
    if(session){
      if(session.user.rol == ROL.ADMINISTRADOR) return <Administrador session={session}/>
      if(session.user.rol == ROL.VETERINARIO) return <Veterinario session={session}/>
    }
  }
  
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>
      {dashboardRender()}
      
    </>
  );
}
