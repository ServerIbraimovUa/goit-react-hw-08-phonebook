import styled from 'styled-components';

export const HeaderStyle = styled.header`
  border-bottom: 1px solid #000;
  font-size: 21px;
  nav {
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.2em;
      padding: 15px 0;
      text-decoration: none;
      color: #000;
      font-weight: 500;
      &.active {
        color: blue;
      }
    }
  }
`;
