import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  background-color: black;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 35vw;
  max-height: 95%;
  padding: 20px;
  gap: 10px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  font-family: 'Questrial', sans-serif;
  color: #676767;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  font-family: 'Questrial', sans-serif;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  font-family: 'Questrial', sans-serif;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  font-family: 'Questrial', sans-serif;
  a {
    text-decoration: none;
    color: #676767;
  }
`;