import styled from 'styled-components';

export const ItemStyled = styled.li`
  padding: 0.4em 1em;
  display: flex;
  align-items: center;
  border: 1px solid #000;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  span + span {
    margin-left: 14px;
  }
  .wrapperBtn {
    margin-left: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: end;
    gap: 0.5em;
  }

  .deleteBtn,
  .updateBtn {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border-radius: 50%;
    cursor: pointer;
    font-size: 26px;
  }
  .updateBtn {
    border: 2px solid #00c006;
    transition: all 0.3s ease-in-out;
    font-size: 22px;
    color: #00c006;
    &:hover,
    &:focus {
      background-color: #00c006;
      color: white;
      box-shadow: 0px 0px 10px 5px rgba(0, 255, 0, 0.4);
    }
  }
  .deleteBtn {
    border: 2px solid #d60101;
    transition: all 0.3s ease-in-out;
    color: #d60101;

    &:hover,
    &:focus {
      background-color: #d60101;
      color: white;
      box-shadow: 0px 0px 10px 5px rgba(255, 0, 0, 0.4);
    }
  }
`;
