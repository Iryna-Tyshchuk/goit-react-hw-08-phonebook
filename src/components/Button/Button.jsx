import styled from 'styled-components';

export const Button = styled.button`
  text-transform: capitalize;
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[2]}px;
  margin: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[3]}px;

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => {
    return p.disabled ? p.theme.colors.muted : '#19f1ea';
  }};
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: #15ccc6;
  }
`;
