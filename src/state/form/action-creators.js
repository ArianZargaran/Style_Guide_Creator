export const CHANGE_FORM_STYLES = "CHANGE_FORM_STYLES";

export function changeFormStyles(newStyles) {
  return {
    type: CHANGE_FORM_STYLES,
    payload: newStyles
  };
}
