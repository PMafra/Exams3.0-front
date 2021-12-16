/* eslint-disable import/no-cycle */
import styled from 'styled-components';
import { FaEthereum } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <StyledPageContainer>
      <StyledMainContent>
        <StyledMainTextContainer>
          <p>Main TextMain TextMain TextMain TextMain TextMain TextMain TextMain TextMain Text</p>
        </StyledMainTextContainer>
        <StyledPublicButtonsContainer>
          <StyledButton>Send</StyledButton>
          <Link to="/visualize">
            <StyledButton>
              Visualize
            </StyledButton>
          </Link>
        </StyledPublicButtonsContainer>
        <StyledPublicButtonsContainer>
          <StyledButton className="login">
            <EtherIcon />
            Login with Ethereum
          </StyledButton>
        </StyledPublicButtonsContainer>
      </StyledMainContent>
    </StyledPageContainer>
  );
}

const StyledPageContainer = styled.div`
  background: rgb(62,56,130); 
  background: linear-gradient(127deg, rgba(62,56,130,1) 0%, rgba(73,67,142,1) 0%, rgba(104,98,176,1) 7%, rgba(62,56,130,1) 39%, rgba(32,21,47,1) 100%);
  width: 100vw;
  height: 100vh;
`;
const StyledMainContent = styled.div`
  position: absolute;
  top: 150px;
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5vh;
`;
const StyledMainTextContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18vw;
  p {
    font-size: 55px;
    color:#ffffff;
    font-weight: 700;
    font-style: italic;
    line-height:65px;
    letter-spacing: 3px;
    text-align: center;
    max-width: 1300px;
  }
`;
const StyledPublicButtonsContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  gap: 18vw;
  .login {
    color: #434871;
  }
`;
const StyledButton = styled.div`
  padding: 0 20px;
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
  text-align: center;
  &:hover {
    opacity: 0.8;
  }
`;
const EtherIcon = styled(FaEthereum)`
  font-size: 40px;
  color: #434871;
`;

export {
  StyledPublicButtonsContainer,
  StyledButton,
  StyledPageContainer,
  StyledMainContent,
};
