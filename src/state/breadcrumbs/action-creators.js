export const CHANGE_BREADCRUMBS_STYLES = "CHANGE_BREADCRUMBS_STYLES";

export function changeButtonStyles(newStyles) {
  return {
    type: CHANGE_BREADCRUMBS_STYLES,
    payload: newStyles
  };
}
