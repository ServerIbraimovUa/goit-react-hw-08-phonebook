import styled from 'styled-components';

export const DivStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8em;
  margin-left: auto;

  p {
    border: 1px solid #000;
    border-radius: 1em;
    padding: 0.2em 0.5em;
  }

  button {
    width: 50%;
    padding: 0.3em 0.5em;
    border: none;
    border-radius: 1em;
    background-color: #53cccc;
    &:hover,
    &:focus {
      scale: 1.1;
    }
  }
`;
