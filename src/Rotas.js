import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Diamondback from './Pages/Diamondback';
import Garantia from './Pages/Garantia';
import SejaRevendedor from './Pages/SejaRevendedor';
import Contato from './Pages/Contato';
import Category from './Pages/Category';
import NotFound from './Pages/NotFound';

function Rotas() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/diamondback' element={<Diamondback />} />
      <Route path='/garantia' element={<Garantia />} />
      <Route path='/seja-um-revendedor' element={<SejaRevendedor />} />
      <Route path='/contato' element={<Contato />} />
      <Route path='/:category' element={<Category />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Rotas;

