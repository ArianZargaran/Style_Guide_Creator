export const FETCH_APP_ID = "FETCH_APP_ID";

export function fetchAppId(el) {
  return {
    type: FETCH_APP_ID,
    payload: el
  };
}
