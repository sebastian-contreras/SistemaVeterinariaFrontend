"use client";
import React from "react";
import "jquery"
import Link from "next/link";
import Script from "next/script";
import ImportBsj from "./ImportBsj";

function Sidebar() {
  
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
        <div className="sidebar-brand-text mx-3">
          Pets System
        </div>
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

      {/* FIN SECCION MEDICINA */}

    </ul>
    {/* <!-- Logout Modal--> */}
    <div
        className="modal fade"
        id="logoutModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
