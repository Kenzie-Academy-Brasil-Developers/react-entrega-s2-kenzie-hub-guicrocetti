import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  gap: 1rem;
  background-color: var(--Gray-4);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    padding: 5rem;
    background-color: var(--Gray-3);
    width: 40%;
    min-width: 500px;
  }

  input {
    padding: 1.3rem;
    width: 100%;
    border-radius: 4px;
    background-color: var(--Gray-2);
    border: 1.5px solid var(--Gray-0);
  }

  button {
    background-color: var(--Color-primary);
    width: 100%;
    padding: 1.4rem;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    :hover{
      background-color: var(--Color-primary-Focus);
    }
  }

  .login-register{
    display: flex;
    flex-direction: column; 
    width: 100%;
    gap: 1rem;
    margin: 1rem 0;
    button {
      background-color: var(--Gray-1);
      :hover {
        background-color: var(--Gray-2);
      }
    }
  }

  label, h2, button, input {
    color: var(--Gray-0);
  }

  p {
    color: var(--Gray-1);
  }

  h2 {
    align-self: center;
  }

@media (max-width: 600px) {
  
}

`