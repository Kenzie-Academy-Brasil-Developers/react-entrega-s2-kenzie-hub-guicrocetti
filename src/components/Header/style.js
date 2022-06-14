import styled from "styled-components";

export const ContainerHead = styled.div`
  color: var(--color-primary);
  width: 28%;

  .button {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  button {
    background-color: var(--Gray-2);
    width: auto;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    text-align: center;
    :hover{
      background-color: var(--Color-primary-Focus);
    }
  }
`;
