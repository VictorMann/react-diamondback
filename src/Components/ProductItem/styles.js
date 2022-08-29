import styled from 'styled-components';

export const Container = styled.div`
text-align: center;
padding: 3px;
margin: 0 5px;
margin-bottom: 15px;
border: 2px solid transparent;

img {
  max-width: 100%;
}
.product-img {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 270px;
  margin: 0;
}
.product-name {
  color: #333;
  font-size: 1.1em;
  transition: color .3s;
}

&:hover .product-name {
  color: #ef4625;
}
`;