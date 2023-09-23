'use client'
import { useEffect } from "react";
import React from 'react'

function ImportBsj() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
    require("jquery/dist/jquery")
  }, []);
  return (
   <></>
  )
}

export default ImportBsj