import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  input {
    max-width: 200px;
    border: none;
    border-radius: 20px;
    padding-left: 10px;
  }

  .saveButton {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: 2px solid #007bff;
    transition: all 0.3s ease-in-out;
    font-size: 22px;
    color: #007bff;
    &:hover,
    &:focus {
      background-color: #007bff;
      color: white;
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 255, 0.4);
    }
  }
`;
