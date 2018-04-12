export const CHANGE_ICONS_STYLES = "CHANGE_ICONS_STYLES";

export function changeIconsStyles(newStyles) {
  return {
    type: CHANGE_ICONS_STYLES,
    payload: newStyles
  };
}
