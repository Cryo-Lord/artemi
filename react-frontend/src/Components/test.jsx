import { useEffect, useState } from "react";

function InterDummy(props){

    let ingreso = props.categoria

    const [uniData, setUniData] = useState([{}])

    useEffect(()=>{
        fetch("/api/Marketing").then(
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
                <p />Resultado: {uniData.ingreso}
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
                    (servicio == "Home")?(
                    <div className="tab-pane fade show active" id={servicio} role="tabpanel" aria-labelledby={servicio+"-tab"}> 
                        <div className="card m-4">
                            <div className="h1 card-header bg-galaxy text-sparkle text-center">
                                ¡Bienvenido a Artemi Studios!
                            </div>
                            <div className="card-body text-galaxy">
                                Texto largo
                            </div>
                        </div>
                    </div>
                ):((servicio == "Sobre nosotros")?(
                    <div className="tab-pane fade" id={servicio} role="tabpanel" aria-labelledby={servicio+"-tab"}> 
                        <div className="card m-3">
                            <div className="card-header bg-void text-sparkle">
                                {servicio}
                            </div>
                            <div className="card-body bg-galaxy text-sparkle">
                                Somos una empresa dedicada a propocionar de servicios de diseño y soluciones digitales
                            </div>
                        </div>
                    </div>
                    ):(
                        <div className="tab-pane fade" id={servicio} role="tabpanel" aria-labelledby={servicio+"-tab"}> 
                            <InterDummy categoria={servicio} /> 
                        </div>
                    )
                    )
                ))
            )}
        </div>
    )

}

export default Dummy