import styled from "styled-components";

export const ButtonView = styled.button`
  outline: none;
  outline: none;
  background-color: ${(props) => (props.filled ? props.bg : "#fff")};
  color: ${(props) => (props.filled ? props.color : "#000")};
  border: ${(props) => (props.filled ? "none" : "3px solid #000")};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  height: 50px;
  width: 250px;
`;
