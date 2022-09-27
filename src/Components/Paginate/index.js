import * as C from './styles';
import { Link, useLocation } from 'react-router-dom';
import { useQueryString } from '../../Helpers/Hooks';

function Paginate({ currentPage, limit, pageTotalItens, setPage }) {
  const location = useLocation();
  const query = useQueryString();
  const pageAtual = (currentPage * limit) - limit + 1;
  const pageLimit = (currentPage * limit) > pageTotalItens ? pageTotalItens : (currentPage * limit);
  const totalPages = Math.ceil(pageTotalItens / limit);

  const handleClick = page => setPage(page);

  const queryString = (page) => {
    query.set('page', page);
    return query.toString();
  };

  return (
    pageTotalItens > 0
    ? 
      <C.Container>
        {(pageTotalItens > limit)
        ?
          <span>
            itens {pageAtual} para {pageLimit} de {pageTotalItens} total
          </span>
        : 
          <span>
            {pageTotalItens} item(ns)
          </span>
        }
        {totalPages > 1 &&
          <div className='ctn-pagination'>
            <ul className="pagination">
              <li className={currentPage === 1 ? 'disabled':''}>
                {currentPage !== 1
                ?
                  <Link 
                    to={`${location.pathname}?${queryString(currentPage-1)}`}
                    onClick={e => handleClick(currentPage-1)}>
                      «
                  </Link>
                :
                  <span>«</span>
                }
              </li>

              {new Array(totalPages).fill(0).map((_,index) => (
                <li key={index} className={currentPage === (index + 1) ? 'active':''}>
                  <Link 
                    to={`${location.pathname}?${queryString(index+1)}`}
                    onClick={e => handleClick(index+1)}>
                      {index + 1}
                    </Link>
                </li>
              ))}

              <li className={currentPage === totalPages ? 'disabled':''}>
                {currentPage !== totalPages
                ?
                  <Link 
                    to={`${location.pathname}?${queryString(currentPage+1)}`}
                    onClick={e => handleClick(currentPage+1)}>
                      »
                    </Link>
                :
                  <span>»</span>
                }
              </li>
            </ul>
          </div>
        }
      </C.Container>
    : ''
  )
}

export default Paginate;