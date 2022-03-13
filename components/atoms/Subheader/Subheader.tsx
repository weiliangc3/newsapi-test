import styled from 'styled-components';

export default styled.h2`
  font-size: 16px;
  font-family: ${(props) => props.theme.subheaderFont};
  color: ${(props) => props.theme.mainColour};
`;
