import styled from 'styled-components';

export default styled.h1`
  font-size: 32px;
  text-align: center;
  font-family: ${(props) => props.theme.headerFont};
  color: ${(props) => props.theme.mainColour};
`;
