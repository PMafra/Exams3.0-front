import styled from 'styled-components';

const StyledPublicButtonsContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  gap: 18vw;
  .main {
    background-color: #bfbafc;
  }
  .professor {
    background-color: ${({ isProfessorFilter }) => (isProfessorFilter ? ('#bfbafc') : ('#878787'))};
  }
  .subject {
    background-color: ${({ isSubjectFilter }) => (isSubjectFilter ? ('#bfbafc') : ('#878787'))};
  }
`;
const StyledButton = styled.div`
  padding: 0 20px;
  width: 200px;
  height:70px;
  border-radius: 60px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;

export {
  StyledPublicButtonsContainer,
  StyledButton,
};
