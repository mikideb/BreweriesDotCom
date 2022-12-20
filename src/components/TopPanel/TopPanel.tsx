import { Wrapper, ButtonsContainer, StyledButton } from "./styled-components";

interface Props {
  setShouldShowAsRawJson: (flag: boolean) => void;
  shouldShowAsRawJson: boolean;
  handleSortByDistance: () => void;
  handleHideButtonClick: () => void;
}

export const TopPanel = ({
  setShouldShowAsRawJson,
  shouldShowAsRawJson,
  handleSortByDistance,
  handleHideButtonClick,
}: Props) => {
  const handleShowAsJsonClick = () =>
    setShouldShowAsRawJson(!shouldShowAsRawJson);

  return (
    <Wrapper>
      <h1>BREWERIES DOT COM</h1>
      <ButtonsContainer>
        <StyledButton onClick={handleHideButtonClick}>
          Show / Hide All Breweries List
        </StyledButton>
        <StyledButton onClick={handleSortByDistance}>
          Sort By Distance
        </StyledButton>
        <StyledButton onClick={handleShowAsJsonClick}>
          Show As Raw JSON / Regular Items
        </StyledButton>
      </ButtonsContainer>
    </Wrapper>
  );
};
