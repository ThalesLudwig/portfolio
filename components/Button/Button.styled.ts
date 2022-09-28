import styled from "styled-components";
import { TYPOGRAPHY } from "../../constants/typography";

type props = {
  isOutlined: boolean;
};

export const Container = styled.button<props>`
  padding: 11px;
  border: 1px solid ${({ theme }) => theme.BORDER};
  color: ${({ theme }) => theme.TEXT};
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  cursor: pointer;
  background-color: ${({ theme, isOutlined }) => (isOutlined ? theme.BACKGROUND : theme.CARD)};
  border-radius: 10px;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  height: 45px;
  max-height: 45px;
  min-width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    transform: translateY(-3px);
  }
`;
