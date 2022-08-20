import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Menu from '../Menu';
import * as C from './styles';

function Page({ children }) {
  const user = useSelector(state => state.user);
  return (
    <C.Container>
      <C.AreaLimit>
        <header className='page-topo'>
          <Link to="/" className='logo' title='Diamondback'>
            <img src="/assets/imgs/logo.png" alt="logo diamondback" />
          </Link>
          <form className='form-search'>
            <input type="text" name="s" placeholder={user.name} />
            <button>
              <span className='glyphicon glyphicon-search'></span>
            </button>
          </form>
        </header>
      </C.AreaLimit>

      <Menu />

      {children}
      
      <footer>
        Rodapé
      </footer>
    </C.Container>
  )
}

export default Page;