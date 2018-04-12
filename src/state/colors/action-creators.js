export const CHANGE_COLORS_STYLES = "CHANGE_COLORS_STYLES";

export function changeColorsStyles(newStyles) {
  return {
    type: CHANGE_COLORS_STYLES,
    payload: newStyles
  };
}
