export const CHANGE_FICONS_STYLES = "CHANGE_FICONS_STYLES";

export function changeFiconsStyles(newStyles) {
  return {
    type: CHANGE_FICONS_STYLES,
    payload: newStyles
  };
}
