import styled from "styled-components";
import { ELEVATION } from "../../constants/elevation";
import { SCREEN } from "../../constants/screen";
import { TYPOGRAPHY } from "../../constants/typography";

type ContainerType = {
  isOpen: boolean;
};

export const Container = styled.div<ContainerType>`
  position: absolute;
  width: 100%;
  max-width: 620px;
  height: 370px;
  z-index: ${ELEVATION.OVERLAY};
  background-color: green;
  top: 80px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  left: 50%;
  transform: translate(-50%, 0);
  border-radius: 10px;
  padding: 10px;
  background: rgba(237, 237, 237, 0.114);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(9.207px);
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    height: calc(100vh - 120px);
  }
`;

export const Input = styled.input`
  padding: 10px;
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  color: ${({ theme }) => theme.TEXT};
  background-color: ${({ theme }) => theme.CARD};
  border: none;
  outline: none;
  border-radius: 7px;
  flex: 1;
`;

export const InputWrapper = styled.div`
  color: ${({ theme }) => theme.TEXT};
  background-color: ${({ theme }) => theme.CARD};
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding-right: 15px;
  &:focus-within {
    outline: auto;
    outline-color: grey;
  }
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 15px 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
  gap: 5px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Message = styled.div`
  padding: 9px 16px;
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  border-radius: 10px;
  width: max-content;
  max-width: 70%;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  height: 100%;
`;

type MessageBotType = { hasAvatar?: boolean };
export const MessageBot = styled(Message)<MessageBotType>`
  background-color: ${({ theme }) => theme.ACCENT};
  color: white;
  align-self: flex-start;
  margin-left: ${({ hasAvatar }) => (hasAvatar ? "0" : "70px")};
`;

export const MessageAuthor = styled(Message)`
  background-color: ${({ theme }) => theme.CARD};
  color: ${({ theme }) => theme.TEXT};
  align-self: flex-end;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
`;

export const AvatarMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
