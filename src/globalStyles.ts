import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* background-color: #000; */
  background: rgb(75,75,80);
  background: linear-gradient(90deg, rgba(75,75,80,1) 0%, rgba(0,0,0,1) 48%, rgba(75,75,80,1) 100%);
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: orange;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;