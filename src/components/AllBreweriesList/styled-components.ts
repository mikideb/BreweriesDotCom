import styled from "styled-components";

export const Wrapper = styled.div<{ isVisible: boolean }>`
  visibility: ${({ isVisible }) => (isVisible ? "initial" : "hidden")};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
