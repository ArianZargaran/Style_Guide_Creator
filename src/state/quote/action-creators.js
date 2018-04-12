export const CHANGE_QUOTE_STYLES = "CHANGE_QUOTE_STYLES";

export function changeQuoteStyles(newStyles) {
  return {
    type: CHANGE_QUOTE_STYLES,
    payload: newStyles
  };
}
