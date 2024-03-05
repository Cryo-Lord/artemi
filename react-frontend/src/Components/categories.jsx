import { useEffect, useState } from "react"

function Pestañas() {
    
  const [categoriesData, setCategoriesData] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(
      res => res.json()
    ).then(
      data => { setCategoriesData(data) }
    )
  }, [])

  return (
    <>
      {(typeof categoriesData.servicios === "undefined") ? 
      (
        <p className="primary"> --- Cargando datos ----</p>
      ): (
        categoriesData.servicios.map((servicio, i) => (
          (servicio === "Home") ? (
            <button className='nav-link active' id={servicio + "-tab"} data-bs-toggle="tab" data-bs-target={"#"+servicio} type="button" role="tab" aria-controls={servicio} aria-selected="true"> 
              <strong>{servicio}</strong> 
            </button>
          ) : ( 
            <button className='nav-link' id={servicio+"-tab"} data-bs-toggle="tab" data-bs-target={"#"+servicio} type="button" role="tab" aria-controls={servicio} aria-selected="false">
              <strong>{servicio}</strong> 
            </button>
          )
        ))
      )}
    </>
  );
}

export default Pestañas
