import styled from "styled-components";

export const Container = styled.div`
.breadcrumb {
  padding: 8px 0;
  margin: 0;
  background: initial;
  font-size: 1.2rem;
  color: #999;

  li:first-child {
    text-transform: capitalize;
  }

  a {
    color: inherit;

    &:hover {
      color: #555;
    }
  }
}
img {
  max-width: 100%;
}
.pr-header {
  display: flex;

  & > * {
    flex: 1;
  }

  .pr-img {
    img { cursor: pointer }
  }
  .pr-title {
    padding-left: 20px;

    .title {
      position: relative;
      padding-top: 2rem;
      font-family: 'Fjalla One', sans-serif;
      font-size: 2.8em;

      small {
        position: absolute;
        top: -5px;
        left: 0;
        font-size: .35em;
        color: #bbb;
      }
    }
  }
}

.pr-thumbnail {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;

  li {
    display: flex;
    align-items: center;
    width: 60px;
    height: 50px;
    margin-right: 5px;
    border: 3px solid #AAA;
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 120%;
      height: auto;
    }
  }
}
.pr-description {
  margin-bottom: 30px;

  .title {
    color: white;
    background: #535c63;
    font-size: .95em;
    text-transform: uppercase;

    span {
      display: inline-block;
      border-right: 1px dotted white;
      padding: 0.5em 1em;
    }
  }
}

.pr-rel {
  border-top: 2px solid #AAA;
  margin-bottom: 30px;

  .header-rel {
    text-transform: uppercase;
    font-size: .95em;
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;

    li {
      border: 2px solid #aaa;
      width: 24%;
      padding: .5em;
      
      figure {
        display: flex;
        align-items: center;
        height: 220px;
        overflow: hidden;
      }

      .title {
        color: #2a2f33;
        font-size: .95em;
      }
    }
  }
}
`;