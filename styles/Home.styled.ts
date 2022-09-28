import styled from "styled-components";
import { SCREEN } from "../constants/screen";
import { TYPOGRAPHY } from "../constants/typography";

export const Container = styled.main`
  background-color: ${({ theme }) => theme.BACKGROUND};
  max-width: ${SCREEN.LAPTOP};
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 300px;
`;

export const Banner = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${({ theme }) => theme.CARD};
  background-image: url("/banner.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  position: relative;

  @media only screen and (max-width: ${SCREEN.TABLET}) {
    border-radius: 0;
  }
`;

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const Section = styled.section`
  padding: 21px;
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.img`
  width: 250px;
  top: 50px;
  position: relative;
`;

export const Title = styled.h1`
  font-size: ${TYPOGRAPHY.SIZE.TITLE};
  color: ${({ theme }) => theme.TITLE};
  margin-top: 75px;
`;

export const Bio = styled.p`
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  color: ${({ theme }) => theme.TEXT};
  max-width: 600px;
  margin: 0;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const Navigator = styled.nav`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.BORDER};
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  display: flex;
  gap: 15px;
`;

type TabProps = { isActive?: boolean };
export const Tab = styled.a<TabProps>`
  cursor: pointer;
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  color: ${({ theme }) => theme.TEXT};
  padding: 10px;
  font-weight: ${({ isActive }) => (isActive ? TYPOGRAPHY.WEIGHT.BOLD : TYPOGRAPHY.WEIGHT.REGULAR)};
  border-bottom: ${({ isActive, theme }) => (isActive ? `2px solid ${theme.TEXT}` : `2px solid ${theme.BACKGROUND}`)};
`;

export const Email = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  color: white;
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  padding: 10px;
  border: none;
  cursor: pointer;
  font-family: inherit;

  @media only screen and (max-width: ${SCREEN.TABLET}) {
    display: none;
  }
`;

export const EmailIcon = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  display: none;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${SCREEN.TABLET}) {
    display: flex;
  }
`;

export const TypingWrapper = styled.div`
  font-size: ${TYPOGRAPHY.SIZE.TITLE};
  color: ${({ theme }) => theme.HERO};
  align-self: flex-end;
  @media only screen and (max-width: ${SCREEN.TABLET}) {
    font-size: ${TYPOGRAPHY.SIZE.SUBTITLE};
  }
`;
