import * as C from './styles';

import { useEffect, useState } from 'react';
import { TitlePage, AreaLimit } from '../../Components/Template/styles';
import ProductItem from '../../Components/ProductItem';
import Paginate from '../../Components/Paginate';

import api from '../../Api';

import { useQueryString } from '../../Helpers/Hooks';
import { isNumber } from '../../Helpers';

function Page() {
  const query = useQueryString();
  const trataCurrentPage = () => isNumber(query.get('page')) ? +query.get('page') : 1;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(trataCurrentPage());
  const [perPage, setPerPage] = useState(0);
  const [pageTotalItens, setPageTotalIntes] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fnProducts = async () => {
      const data = await api.search(query.get('s'), trataCurrentPage());
      setProducts(data.produtos);
      setLoading(false);
      if (data.produtos.length > 0) {
        setCurrentPage(+data.currentPage);
        setPerPage(+data.perPage);
        setPageTotalIntes(+data.pageTotalItens);
      } else {
        setCurrentPage(1);
        setPerPage(0);
        setPageTotalIntes(0);
      }
    };
    fnProducts();
  }, [query.get('page')]);


  return (
    <C.Container>
      <AreaLimit>
        <TitlePage>Resultado da busca para '{query.get('s')}'</TitlePage>
        
        {products.length > 0 &&
          <>
            <Paginate 
              pageTotalItens={pageTotalItens}
              currentPage={currentPage}
              limit={perPage} 
              setPage={setCurrentPage} />

            <ul className='products-list'>
              {products.map(item => (
                <li key={item.slug}>
                  <ProductItem item={item} />
                </li>
              ))}
            </ul>

            <Paginate 
              pageTotalItens={pageTotalItens}
              currentPage={currentPage}
              limit={perPage}
              setPage={setCurrentPage} />
          </>
        }
        {!loading && products.length === 0 &&
          <p className="msg-not-items">Não existem produtos que correspondem com a busca.</p>
        }
      </AreaLimit>
    </C.Container>
  )
}

export default Page;