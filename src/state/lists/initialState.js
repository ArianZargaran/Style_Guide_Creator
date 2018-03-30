export default function() {
  return {
    Lists: {
      tag: [["ul", "ol"], ["ul", "ol"], ["ul", "ol"], ["ul", "ol"]],
      className: {
        listItem: ["ya-list ya-ul-list", "ya-list ya-ol-list"],
        listLinks: [
          "ya-list ya-ul-list ya-ul-list_linked",
          "ya-list ya-ol-list ya-ol-list_linked"
        ],
        listAnchor: [
          "ya-list ya-ul-list ya-ul-list-anchor",
          "ya-list ya-ol-list ya-ol-list-anchor"
        ],
        listAnchorSmall: [
          "ya-list  ya-ul-list ya-ul-list-anchor ya-list-small",
          "ya-list  ya-ol-list ya-ol-list-anchor ya-list-small"
        ]
      }
    }
  };
}
