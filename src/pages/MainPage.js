/* eslint-disable import/no-cycle */
import styled from 'styled-components';
import { FaEthereum } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { StyledPageContainer, StyledMainContent } from '../assets/styles/PageContainerStyle';

export default function MainPage() {
  return (
    <StyledPageContainer>
      <StyledMainContent className="main">
        <StyledMainTextContainer>
          <p>The best exams database underground website</p>
        </StyledMainTextContainer>
        <StyledPublicButtonsContainer>
          <Link to="/send">
            <StyledButton>
              Send
            </StyledButton>
          </Link>
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
