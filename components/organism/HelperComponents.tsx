/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ArticleCardContainer = styled.ul`
 @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px 16px;
  }
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 8px;
  padding: 16px;
`;
