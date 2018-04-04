export const FETCH_APP_NAME = "FETCH_APP_NAME";

export default function fetchAppName(el) {
  return {
    type: FETCH_APP_NAME,
    payload: el
  };
}
