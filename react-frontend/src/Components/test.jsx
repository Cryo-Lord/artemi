import { useEffect, useState } from "react";

function InterDummy(props){

    let ingreso = props.categoria

    const [uniData, setUniData] = useState([{}])

    useEffect(()=>{
        fetch("/api/servicio").then(
            res => res.json()
        ).then(
            data => { setUniData(data) }
        )
    }, [])

    return (
    <>
    {(typeof uniData[ingreso] === "undefined") ? ( //Intenta aplicar un loop antes del typeof
        <div className="card m-1">
            <div className="card-header bg-sparkle text-white">
                Error 404 
            </div>
            <div className="card-body text-galaxy">
                No se pudo encontrar los datos de: {ingreso}
                <hr />
                <p />Resultado: {uniData[ingreso]}
            </div>
        </div>
    ):(
    uniData[ingreso].map((contenido, i) => (
        <div className="card m-3">
            <div className="card-header bg-sparkle text-white">
                {contenido}
            </div>
            <div className="card-body text-galaxy">
                Lorem Ipsum Naro Tadem
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-sparkle">
                Click me :)
                </button>
            </div>
        </div>
        ))
     )}
    
    </>)
}

function Dummy() {
    
    const [dummiesData, setDummiesData] = useState([{}])
  
    useEffect(()=>{
      fetch("/api").then(
        res => res.json()
      ).then(
        data => { setDummiesData(data) }
      )
    }, [])
  
    return (
        <div className="container">
            {(typeof dummiesData.servicios === "undefined") ? 
            (
                <div className="tab-pane fade show active" id="undefined" role="tabpanel" aria-labelledby="undefined-tab"> undefined </div>
            ): (
            dummiesData.servicios.map((servicio, i) => (
                (servicio === "Marketing")?(
                <div className="tab-pane fade show active" id={"nav-"+servicio} role="tabpanel" aria-labelledby={"nav-"+servicio+"-tab"}> 
                    <InterDummy categoria={servicio} />
                </div>
                ):(
                <div className="tab-pane fade" id={"nav-"+servicio} role="tabpanel" aria-labelledby={"nav-"+servicio+"-tab"} tabindex="0"> 
                    <InterDummy categoria={servicio} /> 
                </div>
                )))
                /*</nav>
                  <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">...</div>
                  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>
                  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
                  <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
                  </div>*/
            )}
        </div>
    )

}

export default Dummy