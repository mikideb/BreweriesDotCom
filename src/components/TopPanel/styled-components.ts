import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 0 2rem;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: #42bcf5;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  font-weight: 700;

  &:hover {
    background-color: #71bbde;
    transition: 0.3s;
  }
`;
