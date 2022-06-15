import styled from "styled-components";

export const ContainerHead = styled.div`
  color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  width: 30%;
  min-width: 500px;

  button {
    background-color: var(--Gray-2);
    width: auto;
    max-width: 100px;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    text-align: center;
    :hover{
      background-color: var(--Gray-3);
    }
  }
`;
