"use client";
import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { NavDropdown } from "react-bootstrap";
import miniatura from '@/public/img/undraw_profile.svg'
import Image from "next/image";
function NavBar() {
  const [searchClient, setSearchClient] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/login" });
    router.push(data.url);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Evita la recarga de la página
    // Realiza la acción que deseas, en este caso, redireccionar a la página de perfil
    router.push(`/perfil/${searchClient}`);
  };
  const { data: session, status } = useSession();
  const usuarioLog = session?.user;
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* <!-- Sidebar Toggle (Topbar) --> */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        {/* <!-- Topbar Search --> */}
        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
        >
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Busca un cliente"
              aria-label="Search"
              aria-describedby="basic-addon2"
              value={searchClient}
              onChange={(e) => setSearchClient(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleSubmit}
              >
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        {/* <!-- Topbar Navbar --> */}
        <NavDropdown
          className="mr-2 d-none d-lg-inline text-gray-600 small"
          title={
<>
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                {session?.user.nombre} {session?.user.apellido}
              </span>
              <Image
              alt="miniatura" 
              className="img-profile rounded-circle"
                src={miniatura}
              />
    </>
          }
        >
          <NavDropdown.Item
            onClick={() => router.push(`/perfil/${session?.user.dni}`)}
          >
            Perfil
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={handleSignOut}>Sign Out</NavDropdown.Item>
        </NavDropdown>
      </nav>
    </>
  );
}

export default NavBar;
