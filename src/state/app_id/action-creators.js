export const FETCH_APP_ID = "FETCH_APP_ID";

export default function fetchAppId(el) {
  return {
    type: FETCH_APP_ID,
    payload: el
  };
}
