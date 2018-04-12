export const CHANGE_TYPOGRAPHY_STYLES = "CHANGE_TYPOGRAPHY_STYLES";

export function changeTypographyStyles(newStyles) {
  return {
    type: CHANGE_TYPOGRAPHY_STYLES,
    payload: newStyles
  };
}
