"use client"
import React, { useState } from 'react'
import FormMascota from './FormMascota'

function NuevaMascota({nombre,documento}:{nombre:String,documento:String}) {
  const [Show, setShow] = useState(false)
  return (
<div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-primary">Nuevo Mascota de {nombre} - {documento}</h5>
      </div>
      <div className="card-body">
        <FormMascota />
      </div>
    </div>  )
}

export default NuevaMascota