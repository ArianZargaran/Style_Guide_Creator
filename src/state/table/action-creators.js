export const CHANGE_TABLE_STYLES = "CHANGE_TABLE_STYLES";

export function changeTableStyles(newStyles) {
  return {
    type: CHANGE_TABLE_STYLES,
    payload: newStyles
  };
}
