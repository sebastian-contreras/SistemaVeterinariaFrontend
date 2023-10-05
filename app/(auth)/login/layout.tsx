import React from 'react'
import "../../../public/static/vendor/fontawesome-free/css/all.css";
import "app/globals.css";
import "bootstrap/dist/css/bootstrap.css"

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