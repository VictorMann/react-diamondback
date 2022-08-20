import { BrowserRouter } from 'react-router-dom';

import Rotas from './Rotas';
import Template from './Components/Template';

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Rotas />
      </Template>
    </BrowserRouter>
  );
}

export default App;
