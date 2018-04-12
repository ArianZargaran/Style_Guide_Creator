export const CHANGE_HIGHLIGHTS_STYLES = "CHANGE_HIGHLIGHTS_STYLES";

export function changeHighlightsStyles(newStyles) {
  return {
    type: CHANGE_HIGHLIGHTS_STYLES,
    payload: newStyles
  };
}
