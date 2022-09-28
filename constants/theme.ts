import ThemeType from "../types/themeType";
import COLORS from "./colors";

export const LIGHT: ThemeType = {
  BACKGROUND: COLORS.WHITE,
  TEXT: COLORS.GREY_1,
  TITLE: COLORS.BLACK,
  BORDER: COLORS.CLEAR,
  CARD: COLORS.CLEAR,
  ACCENT: COLORS.PURPLE,
  HERO: COLORS.WHITE,
};

export const DARK: ThemeType = {
  BACKGROUND: COLORS.DARK,
  TEXT: COLORS.GREY_2,
  TITLE: COLORS.WHITE,
  BORDER: COLORS.GREY_3,
  CARD: COLORS.GREY_3,
  ACCENT: COLORS.PURPLE,
  HERO: COLORS.BLACK,
};

const THEME = {
  LIGHT,
  DARK,
};

export const THEME_ENUM = {
  LIGHT: 0,
  DARK: 1,
};

export default THEME;
