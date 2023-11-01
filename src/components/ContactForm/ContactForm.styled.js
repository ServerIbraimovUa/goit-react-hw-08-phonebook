import styled from 'styled-components';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em auto;
  gap: 1em;
  max-width: 400px;
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.1em;
  }
  span {
    margin-left: 0.5em;
  }

  input {
    width: 100%;

    border: none;
    padding: 0.3em 0.5em;
    border-radius: 1em;
  }

  button {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.1em;
    padding: 0.3em 0.3em;
    border: none;
    border-radius: 1em;
    background-color: #53cccc;
    &:hover,
    &:focus {
      scale: 1.1;
    }
  }
`;
