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
          (servicio === "Marketing") ? (
            <button className='nav-link active' id={"nav-"+servicio+"-tab"} data-bs-toggle="tab" data-bs-target={"#nav"+servicio} type="button" role="tab" aria-controls={"nav-"+servicio} aria-selected="true"> 
              <strong>{servicio}</strong> 
            </button>
          ) : ( 
            <button className='nav-link' id={"nav-"+servicio+"-tab"} data-bs-toggle="tab" data-bs-target={"#nav"+servicio} type="button" role="tab" aria-controls={"nav-"+servicio} aria-selected="false">
              <strong>{servicio}</strong> 
            </button>
          )
        )) /*<nav>
             <div class="nav nav-tabs" id="nav-tab" role="tablist">
             <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
             <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
             <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
             <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" disabled>Disabled</button>
             </div>*/
      )}
    </>
  );
}

export default Pestañas
