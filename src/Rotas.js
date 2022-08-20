import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

function Rotas() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Rotas;

