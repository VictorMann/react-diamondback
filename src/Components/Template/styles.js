import styled from "styled-components";

export const Container = styled.div`
border-top: 2px solid #ee4625;

a:hover,a:focus {
  text-decoration: none;
}

.alert {
  margin: 1em 0;
}

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
.ctn-fend {
  background: #2a2f33;
  color: white;
}
.fend {
  display: flex;
  padding-top: 2rem;
  margin-bottom: 1rem;
}
.fend a,
.fend legend {
  color: white;
}
.fend > * {
  flex: 1;
}
.fend ul li::first-letter {
  text-transform: uppercase;
}
.fend ul,
.fend legend {
  font-family: 'Fjalla One', sans-serif;
}
.fend ul li:first-child {
  font-size: 1.4em;
  margin-bottom: 1rem;
}
.fend ul a:hover {
  color: #ee4625;
}
.fend fieldset {
  // padding-left: 4rem;
}
.fend legend {
  border: none;
  margin-bottom: 1rem;
}
.fend .news-b {
  color: #ee4625;
}
.fend input {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
}
.copyright {
  font-size: .85em;
  color: #738696;
  border-top: 1px solid #444;
}
.copyright p {
  margin: 1rem 0;
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

export const TitlePage = styled.h1`
font-family: 'Fjalla One';
font-size: 2em;
margin-top: 1em;
margin-bottom: 1em;
`;