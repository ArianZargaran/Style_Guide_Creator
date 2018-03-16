export const SELECT_EL = "select_el";

export function fetch_el(el) {
  return {
    type: SELECT_EL,
    payload: el
  };
}
