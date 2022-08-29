import { Link } from 'react-router-dom';
import * as C from './styles';

function ProductItem({ item }) {
  return (
    <C.Container>
      <Link to={`/p/${item.slug}`}>
        <figure className='product-img'>
          <img src={item.image} alt={item.titulo} />
        </figure>
        <h3 className='product-name'>
          {item.titulo}
        </h3>
      </Link>
    </C.Container>
  )
}

export default ProductItem;