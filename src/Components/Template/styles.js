import styled from "styled-components";

export const Container = styled.div`
border-top: 2px solid #ee4625;

.page-topo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  .logo {
    width: 250px;
    img {width: 100%}
  }

  .form-search {
    position: relative;
    
    display: flex;
    width: 250px;
    
    input, button {
      border: none;
      outline: none;
      background: transparent;
    }

    input {
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 7px;
      padding-right: 2.6em;
      font-size: .95em;
      width: 100%;
      box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
      transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

      &::placeholder {
        color: #999;
      }

      &:focus {
        border-color: #66afe9;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%);
      }
    }

    button {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      display: inline-block;
      font-size: 17px;
      color: #aaa;
      padding-right: .5em;

      span {
        vertical-align: -1px;
      }

    }
  }
}
`;

export const AreaLimit = styled.div`
padding: 0 15px;
margin-right: auto;
margin-left: auto;

@media (min-width: 992px) {
  width: 970px;
}
@media (min-width: 1200px) {
  width: 1170px;
}
`;