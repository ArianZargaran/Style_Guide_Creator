export const CHANGE_LOGO_STYLES = "CHANGE_LOGO_STYLES";

export function changeLogoStyles(newStyles) {
  return {
    type: CHANGE_LOGO_STYLES,
    payload: newStyles
  };
}
