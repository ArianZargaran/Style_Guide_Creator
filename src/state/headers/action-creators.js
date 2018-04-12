export const CHANGE_HEADERS_STYLES = "CHANGE_HEADERS_STYLES";

export function changeHeadersStyles(newStyles) {
  return {
    type: CHANGE_HEADERS_STYLES,
    payload: newStyles
  };
}
