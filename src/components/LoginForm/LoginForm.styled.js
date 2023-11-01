import styled from 'styled-components';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1em auto;
  gap: 1em;
  max-width: 400px;
  label {
    max-width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.1em;
  }
  span {
    margin-left: 0.5em;
  }
  .eye-password {
    position: absolute;
    font-size: 24px;
    margin-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }

  input {
    border: none;
    padding: 0.3em 0.5em;
    border-radius: 1em;
  }

  button {
    margin: 0 auto;
    width: 50%;
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
