export const CHANGE_BUTTON_STYLES = "CHANGE_BUTTON_STYLES";

export function changeButtonStyles(newStyles) {
  return {
    type: CHANGE_BUTTON_STYLES,
    payload: newStyles
  };
}
