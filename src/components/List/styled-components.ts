import styled from "styled-components";

export const StyledList = styled.div<{ isVisible?: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;
