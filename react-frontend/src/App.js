import Pestañas from './Components/categories';
import Dummy from "./Components/test";
import React from 'react';
import './assets/css/bootstrap.css';

function App() {
  return(
    <div>
      <header className='bg-galaxy'>
        <img src='logoB.png' alt="Imagen que deberian haberme pasado." height="100"/>
      </header>
        <nav>
          <div className="nav nav-tabs bg-void" role="tablist" id='Categorias'>
            <Pestañas />
          </div>
        </nav>
      <body>
        <div className="tab-content" id="Contenido_Categorias">
            <Dummy />
        </div>
      </body>
    </div>
  )
}

export default App;
