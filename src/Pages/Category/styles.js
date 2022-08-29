import styled from "styled-components";

export const Container = styled.div`
margin-bottom: 1em;
.products-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 2em;

  & > li {
    width: 25%;
  }
}
`;