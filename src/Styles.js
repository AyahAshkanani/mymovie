import styled, { createGlobalStyle } from "styled-components";
// import { Link, NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.mainColor};
    }
`;

export const MovieWrapper = styled.div`
  margin: 20px;
  p {
    text-align: left;
    font-weight: bold;
    font-style: oblique;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-style: italic;
  font-size: 75px;
  margin-top: -25px;
  padding-top: 4%;
`;

export const Detail = styled.h3`
  text-align: center;
  font-weight: bold;
  font-style: italic;
  font-size: 25px;
  margin-top: -25px;
  padding-bottom: 20px;
  padding-top: 5px;
`;

export const List = styled.h4`
  text-align: left;
  font-weight: bold;
  font-style: italic;
  font-size: 40px;
  margin-top: -25px;
  padding-top: 4%;
  color: blue;
`;

export const SearchBarStyled = styled.input`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  padding: 0.5rem;
  ${"" /* margin: 1rem auto; */}
  display: block;
  width: 50%;
  ${"" /* border: 1px solid #b0b0b0; */}
  ${"" /* border-radius: 4px; */}
`;

export const DeleteButtonStyled = styled.button`
  color: white;
  background-color: black;
  width: 90px;
  
  margin-bottom:20px;
  border-radius: 5px;
  &:hover {
    color: black;
    background-color: white;
  }

`;

export const UpdateButtonStyled = styled.button`
  color: black;
  background-color: white;
  width: 90px;
  border-radius: 5px;
  &:hover {
    color: white;
    background-color: black;
  }
`;

export const AddButtonStyled = styled.button`
  color: ${(props) => props.theme.red};
`;
