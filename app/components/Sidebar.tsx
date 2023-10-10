"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { isAdmin } from "../services/session";
function Sidebar() {
  const { data } = useSession();
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-paw"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Pets System</div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item">
          <Link className="nav-link" href="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* SECCION GENERAL */}

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />
        {/* <!-- Heading --> */}
        <div className="sidebar-heading">General</div>
        <li className="nav-item">
          <Link className="nav-link" href="/mascotas">
            <i className="fas fa-solid fa-paw"></i>
            <span>Mascotas</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/clientes">
            <i className="fas fa-solid fa-user"></i>
            <span>Clientes</span>
          </Link>
        </li>
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* FIN SECCION GENERAL */}

        {/* SECCION MEDICINA */}
        {/* <!-- Heading --> */}
        {isAdmin(data?.user.rol)?(
        <>
        <div className="sidebar-heading">Veterinaria</div>
        <li className="nav-item">
          <Link className="nav-link" href="/veterinarios">
            <i className="fas fa-solid fa-user-nurse"></i>
            <span>Veterinarios</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/citaspendientes">
            <i className="fas fa-solid fa-receipt"></i>
            <span>Citas Pendientes</span>
          </Link>
        </li>
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />
        </>
        ):""}
        
        {/* FIN SECCION MEDICINA */}
      </ul>
      {/* <!-- Logout Modal--> */}
    </>
  );
}

export default Sidebar;
