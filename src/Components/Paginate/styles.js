import styled from 'styled-components';

export const Container = styled.div`
position: relative;
font-size: .85em;
border-bottom: 1px solid #ccc;
padding-bottom: .5em;


.ctn-pagination {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;

  .pagination {
    padding: 0;
    margin: 0;
  }
}
`;