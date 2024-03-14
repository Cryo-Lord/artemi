import Pestañas from './Components/categories';
import Dummy from "./Components/test";
import React from 'react';
import './assets/css/bootstrap.css';

function App() {
  return(
    <div>
      <body>
        <nav>
          <div className="nav nav-tabs bg-void justify-content-center" role="tablist" id='nav-tab'>
            <Pestañas />
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
            <Dummy />
        </div>
      </body>
    </div>
  )
}

export default App;
