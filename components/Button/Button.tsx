import React from "react";
import { getRandomAvatar } from "../../helpers/getRandomAvatar";
import { Container } from "./Button.styled";

type Props = {
  children: any;
  onClick?: Function;
  isOutlined?: boolean;
};

const Button: React.FC<Props> = ({ children, onClick, isOutlined }) => {
  return (
    <Container isOutlined={!!isOutlined} onClick={() => onClick && onClick()}>
      {children}
    </Container>
  );
};

export default Button;
