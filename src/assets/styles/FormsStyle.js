import styled from 'styled-components';

const StyledFormContainer = styled.div`
  width: 100vw;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4vh;
  .inputs-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3vh;
    h2 {
      color: #ffffff;
      font-size: 30px;
      margin-bottom:1vh;
    }
    .input-box {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    .x-icon {
      font-size: 45px;
      color: red;
      cursor: pointer;
    }
    }
  }
  input {
      width: 350px;
      height: 40px;
      border-radius: 20px;
      border: none;
      padding: 0 15px;
      font-size: 20px;
      :focus {
        outline: none;
      }
    }
  .submit-button {
    width: 200px;
    height:70px;
    border-radius: 60px;
    background-color: #bfbafc;
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    cursor: pointer;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover {
      opacity: 0.8;
    }
  }
  .input-with-message {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export {
  StyledFormContainer,
  StyledForm,
};
