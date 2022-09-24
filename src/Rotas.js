import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Diamondback from './Pages/Diamondback';
import Garantia from './Pages/Garantia';
import SejaRevendedor from './Pages/SejaRevendedor';
import Contato from './Pages/Contato';
import Category from './Pages/Category';
import Produto from './Pages/Produto';
import EncontreUmaLoja from './Pages/EncontreUmaLoja';
import EncontreUmaLojaUF from './Pages/EncontreUmaLojaUF';
import NotFound from './Pages/NotFound';

function Rotas() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/diamondback' element={<Diamondback />} />
      <Route path='/garantia' element={<Garantia />} />
      <Route path='/seja-um-revendedor' element={<SejaRevendedor />} />
      <Route path='/contato' element={<Contato />} />
      <Route path='/encontre-uma-loja' element={<EncontreUmaLoja />} />
      <Route path='/encontre-uma-loja/:uf' element={<EncontreUmaLojaUF />} />
      <Route path='/:category' element={<Category />} />
      <Route path='/p/:slug' element={<Produto />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default Rotas;

