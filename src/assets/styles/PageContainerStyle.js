import styled from 'styled-components';

const StyledPageContainer = styled.div`
  background: rgb(62,56,130); 
  background: linear-gradient(127deg, 
    rgba(62,56,130,1) 0%, 
    rgba(73,67,142,1) 0%, 
    rgba(104,98,176,1) 7%, 
    rgba(62,56,130,1) 39%, 
    rgba(32,21,47,1) 100%);
  width: 100vw;
  height: 100vh;
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5vh;
  }
  .exams {
    display: flex;
    flex-direction: column;
    gap: 2vh;
  }
`;
const StyledMainContent = styled.div`
  position: absolute;
  top: 150px;
  height: calc(100vh - 150px);
  .main {
    margin-top: 3vh;
  }
  .exams {
    gap: 5vh;
    text-align: left;
  }
  .no-content {
    text-align: center;
    gap: 6vh;
    p {
        font-size: 25px;
        color: #ffffff;
    }
  }
`;
const StyledGenericContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export {
  StyledPageContainer,
  StyledMainContent,
  StyledGenericContainer,
};
