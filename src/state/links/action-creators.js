export const CHANGE_LINKS_STYLES = "CHANGE_LINKS_STYLES";

export function changeLinksStyles(newStyles) {
  return {
    type: CHANGE_LINKS_STYLES,
    payload: newStyles
  };
}
