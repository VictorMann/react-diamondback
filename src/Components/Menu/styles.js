import styled from "styled-components";

export const Container = styled.div`
background-color: #2a2f33;
background-repeat: no-repeat;
background-position: 0 bottom;
background-image: repeating-linear-gradient(135deg,#2a2f33, #ef4725 100px, #2a2f33 100px, #2a2f33 200px);
background-size: 100% 1px;

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-family: 'Fjalla One', sans-serif;
  font-size: 1.4em;
}

.nav-main {
  display: flex;
  justify-content: space-between;

  & > li {
    position: relative;

    &:hover .nav-sub {
      display: block;
    }

    &:hover > a {
      color: #c7c7c7;
    }

    a {
      color: white;
      padding: 0.18em 0.5em;
      transition: color .1s;
    }
  }

  .nav-sub {
    display: none;
    background-color: #fff;
    position: absolute;
    border: 2px solid #2a2f33;
    border-top: none;
    border-bottom-right-radius: 10px;
    overflow: hidden;
    font-size: .94em;
    z-index: 100;

    a {
      width: 9.5em;
      color: #2a2f33;

      &:hover {
        background-color: #ECECEC;
      }
    }
  }
}
`;