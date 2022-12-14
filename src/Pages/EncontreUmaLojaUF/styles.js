import styled from "styled-components";

export const Container = styled.div`
.ctn-cartao {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3em;
  margin-bottom: 2em;
}
.cartao {
  border: 4px solid #999;
  text-align: center;
  background-color: #f5f5f5;
  padding: 1em;
  // margin: 1em;
  border-radius: 3px;
  transition-property: transform, box-shadow;
  transition: .3s;
}
.cartao:hover {
  transform: translate(-5px, -5px);
  box-shadow: 7px 7px 10px #7d7d7d59;
              
}
.cartao .title {
  text-align: center;
  background: linear-gradient(#7d7d7d59, #7d7d7d59) no-repeat center bottom;
  background-size: 15px 5px;
  padding: 0;
  margin: 0;
  padding-bottom: .7em;
  margin-bottom: .5em;
}
.cartao:hover .title {
  background-image: linear-gradient(#ee4725, #ee4725);
}
.cartao .body {
  display: inline-block;
  text-align: left;
  line-height: 1.6;
  margin: 0;
}
`;