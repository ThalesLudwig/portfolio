import styled from "styled-components";
import { SCREEN } from "../../constants/screen";
import { TYPOGRAPHY } from "../../constants/typography";

type props = {
  image?: string;
};

export const Container = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  height: 245px;
  width: 308px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.BORDER};
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    width: 100%;
    border-radius: 7px;
  }
`;

export const Background = styled.div<props>`
  background-image: ${({ image }) => `url(${image ? image : "/banner.png"})`};
  background-color: ${({ theme }) => theme.CARD};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px 12px 0 0;
  height: 103px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.BORDER};

  @media only screen and (max-width: ${SCREEN.MOBILE}) {
    border-radius: 7px 7px 0 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.TITLE};
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  margin: 0;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.TEXT};
  font-size: ${TYPOGRAPHY.SIZE.BODY_2};
  margin: 0;
  min-height: 36px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 5px;
  justify-content: flex-end;
  color: ${({ theme }) => theme.TITLE};
`;
