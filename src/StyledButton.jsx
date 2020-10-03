import React from "react";
import styled from "styled-components/macro";

const CustomButton = styled.button`
width:4rem;
  border-radius: 1rem;
  border-color: transparent;
  background: ${(props) => props.color};
  color: white;
  padding: 0.5rem;
  margin: 0.2rem;
  float: ${(props) => props.align};
  outline:none;
`;

const StyledButton = ({ ...props }) => {
  return <CustomButton align={props.align} color={props.color} onClick={props.onClick}>{props.children}</CustomButton>;
};

export default StyledButton;
