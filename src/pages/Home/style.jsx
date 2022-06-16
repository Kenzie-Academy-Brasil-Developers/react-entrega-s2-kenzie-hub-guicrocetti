import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  gap: 2rem;
  margin: 1rem auto;
  height: 73.5%;

  > div {
    flex-direction: row;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 1rem auto;
    height: 15.5%;
  }
`;
