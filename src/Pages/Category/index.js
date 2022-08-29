import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as C from './styles';

import { TitlePage, AreaLimit } from '../../Components/Template/styles';
import ProductItem from '../../Components/ProductItem';
import api from '../../Api';
import Paginate from '../../Components/Paginate';

import { useQueryString } from '../../Helpers/Hooks';
import { isNumber } from '../../Helpers';

function Page() {
  const query = useQueryString();
  const trataCurrentPage = () => isNumber(query.get('page')) ? +query.get('page') : 1;
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [currentPage, setCurrentPage] = useState(trataCurrentPage());
  const [perPage, setPerPage] = useState(0);
  const [pageTotalItens, setPageTotalIntes] = useState(0);

  useEffect(() => {
    const fnProducts = async () => {
      const data = await api.getCategoryProducts(category, trataCurrentPage());
      setProducts(data.produtos);
      setTitulo(data.titulo);
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
  }, [category, query.get('page')]);


  return (
    <C.Container>
      <AreaLimit>
        <TitlePage>{titulo}</TitlePage>
        
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
      </AreaLimit>
    </C.Container>
  )
}

export default Page;