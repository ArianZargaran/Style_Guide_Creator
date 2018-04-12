export const CHANGE_LISTS_STYLES = "CHANGE_LISTS_STYLES";

export function changeListsStyles(newStyles) {
  return {
    type: CHANGE_LISTS_STYLES,
    payload: newStyles
  };
}
