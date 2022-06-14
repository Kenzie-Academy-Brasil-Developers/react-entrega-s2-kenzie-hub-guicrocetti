import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  background-color: var(--Gray-4);
  padding: 5rem;

  form {
    display: flex;
    width: 28%;
    min-width: 500px;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    padding: 5rem;
    background-color: var(--Gray-3);
    margin-top: 1rem;
  }

  input, select {
    padding: 1.3rem;
    width: 100%;
    border-radius: 4px;
    background-color: var(--Gray-2);
    border: 1.5px solid var(--Gray-0);
  }

  button {
    background-color: var(--Color-primary-Negative);
    width: 100%;
    padding: 1.4rem;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 1rem;
    :hover{
      background-color: var(--Color-primary-Focus);
    }
  }

  label, h2, button, input, select {
    color: var(--Gray-0);
  }

  p {
    color: var(--Gray-1);
    align-self: center;
  }

  h2 {
    align-self: center;
  }

`