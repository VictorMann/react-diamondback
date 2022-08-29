import { useDispatch } from 'react-redux';
import { setListCategories } from '../../redux/reducers/categoryReducer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as C from './styles';
import { AreaLimit } from '../Template/styles';

import api from '../../Api';
import { dataType } from '../../Helpers';

function Menu() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fn = async () => {
      let cats = await api.categories();
      dispatch(setListCategories(cats));
      setCategories(cats);
    };
    fn();
  }, []);

  return (
    <C.Container>
      <AreaLimit>
        <ul className='nav-main'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/diamondback'>Diamondback</Link></li>
          <li>
            <Link to='#'>Produtos</Link>
            {categories.length > 0 &&
              <ul className='nav-sub'>
                {categories.map(item => (
                  <li key={item.id}>
                    <Link to={`/${item.slug}`}>{item.nome}</Link>
                  </li>
                ))}
              </ul>
            }
          </li>
          <li>
            <Link to='#'>Lojas</Link>
            <ul className='nav-sub'>
              <li><Link to='/seja-um-revendedor'>Seja um Revendedor</Link></li>
              <li><Link to='/encontre-uma-loja'>Encontre uma Loja</Link></li>
            </ul>
          </li>
          <li><Link to='garantia'>Garantia</Link></li>
          <li><Link to='contato'>Contato</Link></li>
        </ul>
      </AreaLimit>
    </C.Container>
  )
}

export default Menu;