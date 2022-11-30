import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 18em;
  margin-right: 18em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

export const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 18em;
  margin-right: 18em;
`;