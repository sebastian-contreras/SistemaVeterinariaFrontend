import Cabecera from './components/Cabecera'
function loading() {
  return (
    <Cabecera hasCredential={false} perfil={{dni:'',nombre:'',apellido:'',email:'',direccion:'',perfilRol:"USUARIO",telefono:'',matricula:''}}/>
  )
}

export default loading