import styled from "styled-components";

export const ContainerHead = styled.div`
  color: var(--color-primary);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  padding-top: 4rem;
  background-color: var(--Gray-4);

  > div {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }


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
