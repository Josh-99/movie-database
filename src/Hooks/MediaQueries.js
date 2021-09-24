import { useMediaQuery } from "react-responsive";
const BREAKPOINT_VALUES = {
  MINIMUM: 320,
  MOBILESMALL: 375,
  MOBILELARGE: 425,
  XSMALL: 544,
  SMALL: 768,
  MEDIUM: 990,
  LARGE: 1200,
  XLARGE: 1440
};
export const useIsBelowSmallOnly = () => {
  return useMediaQuery({ maxWidth: BREAKPOINT_VALUES.SMALL - 1 });
};
export const useIsSmallAndAbove = () => {
  return useMediaQuery({ minWidth: BREAKPOINT_VALUES.SMALL });
};
