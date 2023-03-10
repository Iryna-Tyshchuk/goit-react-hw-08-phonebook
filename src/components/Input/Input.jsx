import styled from 'styled-components';
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'palevioletred'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 200px;
  height: 20px;
  &:active {
    border: none;
  }
`;
