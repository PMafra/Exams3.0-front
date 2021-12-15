import styled from 'styled-components';

export default function MainPage() {
  return (
    <StyledPageContainer>
      <StyledTopLogoContainer>
        Logo aqui
      </StyledTopLogoContainer>
      <StyledTopBarContainer>
        <StyledOption>About</StyledOption>
        <StyledOption>Profile</StyledOption>
        <StyledOption>Contacts</StyledOption>
        <StyledOption>Home</StyledOption>
      </StyledTopBarContainer>
      <StyledMainTextContainer>
        <p>Main TextMain TextMain TextMain TextMain TextMain TextMain TextMain TextMain Text</p>
      </StyledMainTextContainer>
      <StyledPublicButtonsContainer>
        <StyledButton>Send</StyledButton>
        <StyledButton>Visualize</StyledButton>
      </StyledPublicButtonsContainer>
    </StyledPageContainer>
  );
}

const StyledPageContainer = styled.div`
  background: rgb(62,56,130); 
  background: linear-gradient(127deg, rgba(62,56,130,1) 0%, rgba(73,67,142,1) 0%, rgba(104,98,176,1) 7%, rgba(62,56,130,1) 39%, rgba(32,21,47,1) 100%);
  width: 100vw;
`;
const StyledTopLogoContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: blue;
  height: 120px;
`;
const StyledTopBarContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const StyledOption = styled.div`
  color: #ffffff;
  font-size: 18px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
  &:hover {
    background-color: #bfbafc;
    border-radius: 60px;
  }
`;
const StyledMainTextContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18vw;
  p {
    font-size: 40px;
    color:#ffffff;
    font-weight: 700;
    font-style: italic;
    line-height:60px;
    letter-spacing: 3px;
    text-align: center;
    max-width: 1000px;
  }
`;
const StyledPublicButtonsContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  gap: 18vw;
`;
const StyledButton = styled.div`
  width: 200px;
  height:70px;
  border-radius: 60px;
  background-color: #bfbafc;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
