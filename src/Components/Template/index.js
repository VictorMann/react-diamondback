import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Menu from '../Menu';
import * as C from './styles';

function Page({ children }) {
  const cat = useSelector(state => state.cat);
  return (
    <C.Container>
      <C.AreaLimit>
        <header className='page-topo'>
          <Link to="/" className='logo' title='Diamondback'>
            <img src="/assets/imgs/logo.png" alt="logo diamondback" />
          </Link>
          <form className='form-search'>
            <input type="text" name="s" placeholder="O que você procura?" />
            <button>
              <span className='glyphicon glyphicon-search'></span>
            </button>
          </form>
        </header>
      </C.AreaLimit>

      <Menu />

      {children}
      
      <footer className="ctn-fend">
        
        <C.AreaLimit>
          <div className="fend">
            <ul className="list-unstyled">
              <li>Institucional</li>
              <li><Link to="/diamondback">Diamondback</Link></li>
              <li><Link to="/garantia">Garantia</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
            <ul className="list-unstyled">
              <li>Produtos</li>
              {cat.list.map(item => (
                <li key={item.id}>
                  <Link to={`/${item.slug}`}>{item.nome}</Link>
                </li>
              ))}
            </ul>
            <ul className="list-unstyled">
              <li>Lojas</li>
              <li><Link to="/seja-um-revendedor">Seja um revendedor</Link></li>
              <li><Link to="/encontre-uma-loja">Encontre uma loja</Link></li>
            </ul>
            <form id="form-newsletter">
              <fieldset>
                <legend>Novidades</legend>
                <p>
                  Cadastre-se para receber novidades
                  exclusivas da <span className="news-b">Diamondback Brasil</span>
                </p>
                <input type="email" className="form-control" name="email" placeholder="seu email aqui" required />
                <input type="submit" className="btn btn-primary" value="Enviar" />
              </fieldset>
            </form>
          </div>
        </C.AreaLimit>

        <div className="copyright">
          <C.AreaLimit>
            <div className="clearfix">
              <p className="pull-left">Trabalhamos exclusivamente com o seguimento B2B distribuindo nossos produtos.</p>
              <p className="pull-right">Todos os direitos reservados</p>
            </div>
          </C.AreaLimit>
        </div>

      </footer>
    </C.Container>
  )
}

export default Page;