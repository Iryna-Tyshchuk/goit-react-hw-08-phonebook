import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #87ece9;

  > nav {
    display: flex;
    gap: 12px;
    text-transform: uppercase;
    align-items: center;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-weight: 400;
  }

  &.active {
    color: white;
    background-color: #19f1ea;
  }
`;
