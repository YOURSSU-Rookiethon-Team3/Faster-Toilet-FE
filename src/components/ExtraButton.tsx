import React, { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
}

interface ButtonContainerProps {
  isActive: boolean;
}

const ExtraButton = ({ children, isActive, onClick, ...props }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} isActive={isActive}>
      {children}
    </ButtonContainer>
  );
};

export default ExtraButton;

const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 152px;
  padding: 10px 0;
  text-align: center;
  background-color: ${(props) => (props.isActive ? "var(--primary)" : "#ffffff")};
  color: ${(props) => (props.isActive ? "#ffffff" : "var(--basic-button)")};
  font-size: 14px;
  font-weight: bold;
  border: 1px solid
    ${(props) => (props.isActive ? "var(--primary)" : "var(--basic-button)")};
  border-radius: 20px;
  margin: 5px;
`;
