import styled from "styled-components";
import { SCREEN } from "../../constants/screen";
import { TYPOGRAPHY } from "../../constants/typography";

export const Container = styled.div`
  margin: 25px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${SCREEN.TABLET}) {
    margin: 25px 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
`;

export const Title = styled.b`
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  color: ${({ theme }) => theme.TITLE};
  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    display: none;
  }
`;

export const ChatInput = styled.div`
  padding: 11px;
  border: 1px solid ${({ theme }) => theme.BORDER};
  color: ${({ theme }) => theme.TEXT};
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  cursor: pointer;
  background-color: ${({ theme }) => theme.BACKGROUND};
  border-radius: 10px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 200px;
  min-width: 380px;
  @media only screen and (max-width: ${SCREEN.TABLET}) {
    display: none;
  }
`;

export const ChatIcon = styled.span`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.CARD};
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatMobile = styled.div`
  display: none;
  @media only screen and (max-width: ${SCREEN.TABLET}) {
    display: flex;
  }
`;
