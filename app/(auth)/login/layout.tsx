import "../../../public/static/vendor/fontawesome-free/css/all.css";
import "app/globals.css";
import "bootstrap/dist/css/bootstrap.css"
import { Metadata } from "next";
import favicon from "@/public/img/favicon.png"
export const metadata: Metadata = {
  title: "Pets System Login",
  description: "Identificacion de usuarios",
  icons: favicon.src
};


function LoginLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (<html>

      {children}
  </html>
    )
}

export default LoginLayout