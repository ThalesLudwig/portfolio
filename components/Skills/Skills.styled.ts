import styled from "styled-components";
import { TYPOGRAPHY } from "../../constants/typography";

export const Container = styled.div`
  padding-top: 17px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 17px;
`;

export const Pill = styled.div`
  padding: 10px 30px;
  border: 1px solid ${({ theme }) => theme.BORDER};
  background-image: url("/banner.png");
  background-attachment: fixed;
  color: white;
  font-size: ${TYPOGRAPHY.SIZE.BODY_1};
  border-radius: 30px;
`;

export const Pills = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
  flex-wrap: wrap;
  margin-top: 20px;
`;
