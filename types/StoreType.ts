import { ThemeProps } from "../config/themeSlice";
import { LocationProps } from "../config/locationSlice";

export type StoreType = {
  theme: ThemeProps;
  location: LocationProps;
};

export default StoreType;
