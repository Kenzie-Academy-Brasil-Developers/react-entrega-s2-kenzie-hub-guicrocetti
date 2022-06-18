import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  height: 100%;

  h1,
  h2,
  h3,
  h4 {
    color: white;
  }

  p {
    color: var(--Gray-1);
  }

  > div {
    flex-direction: row;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--Gray-4);
    height: 118px;
    border-top: 1px solid var(--Gray-2);
    border-bottom: 1px solid var(--Gray-2);
  }

  .Box {
    background-color: var(--Gray-4);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 2rem;
  }

  .Paper {
    background-color: var(--Gray-4);
    width: 60%;
  }

  .Stack {
    padding: 2rem;
    background-color: var(--Gray-3);
    width: 100%;
  }

  .Item {
    background-color: var(--Gray-4);
    padding: 1rem;
    :hover {
      background-color: var(--Gray-2);
    }
  }

  .Icon,
  .IconAdd {
    color: var(--Gray-1);
    font-size: 28px;
    :hover {
      cursor: pointer;
      color: var(--Negative);
    }
  }

  .IconAdd {
    :hover {
      color: var(--Success);
    }
  }

  .Icon {
    pointer-events: none;
    :hover {
      color: var(--Negative);
    }
  }
  /* 
  @media (max-width: 1100px) {
    .MuiPaper-root {
      width: 80%;
    }
    .Paper {
      width: 80%;
    } */

  @media (max-width: 800px) {
    .Paper {
      width: 80%;
    }
    .Icon,
    .IconAdd {
      font-size: xx-large;
    }
  }

  @media (max-width: 600px) {
    .Paper {
      width: 100%;
    }
    .Icon,
    .IconAdd {
      font-size: xx-large;
    }
    .MuiGrid-root {
      display: flex;
      justify-content: flex-start;
    }
    .MuiGrid-item {
      font-size: 30px;
      padding: 0.2rem;
    }
    .MuiGrid-grid-xs-1 {
      position: absolute;
      max-width: 100%;
      width: 100%;
    }
    .tech-header{
      display: flex;
      justify-content: space-between;
    }
    .Edit-Button {
      /* position: fixed; */
      width: 100%;
      max-width: 100% !important;
      height: 80px;
      cursor: pointer;
      border-radius: 0;
      > svg {
        display: none;
      }
    }
  }
`;
