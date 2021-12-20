import styled from 'styled-components';
import { FaEthereum } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { StyledPageContainer, StyledMainContent, StyledGenericContainer } from '../assets/styles/PageContainerStyle';
import { StyledPublicButtonsContainer, StyledButton } from '../assets/styles/ButtonStyle';

export default function MainPage() {
  return (
    <StyledPageContainer>
      <StyledMainContent className="main">
        <StyledGenericContainer>
          <StyledMainText>The best exams database underground website</StyledMainText>
        </StyledGenericContainer>
        <StyledPublicButtonsContainer>
          <Link to="/send">
            <StyledButton className="main">
              Send
            </StyledButton>
          </Link>
          <Link to="/visualize">
            <StyledButton className="main">
              Visualize
            </StyledButton>
          </Link>
        </StyledPublicButtonsContainer>
        <StyledPublicButtonsContainer>
          <StyledButton className="main">
            <EtherIcon />
          </StyledButton>
        </StyledPublicButtonsContainer>
      </StyledMainContent>
    </StyledPageContainer>
  );
}

const StyledMainText = styled.p`
    font-size: 55px;
    color:#ffffff;
    font-weight: 700;
    font-style: italic;
    line-height:65px;
    letter-spacing: 3px;
    text-align: center;
    max-width: 1300px;
`;
const EtherIcon = styled(FaEthereum)`
  font-size: 40px;
  color: #434871;
`;
