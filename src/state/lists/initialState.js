const lists = {
  style: {
    listItem: {
      "list ul-list": `
.list > li {
  padding-left: 40px;
}

.list > li > a:hover {
  cursor: pointer;
  color: var(--color_desaturated);
}

.ul-list {
  list-style-type: inherit;
}`,
      "list ol-list": `.ol-list {
  list-style-type: decimal-leading-zero;
}

.ol-list-anchor > li {
  list-style-type: lower-alpha;
}`
    },
    listLinks: {
      "list ul-list ul-list_linked": `.ul-list_linked li, .ul-list-anchor li {
  list-style: none;
}

.ul-list_linked > li::before {
  content: "•";
  padding-right: 8px;
}
`,
      "list ol-list ol-list_linked": `.ul-list_linked,
.ul-list-anchor,
.ol-list_linked,
.ol-list-anchor {
  color: var(--color_main);
}`
    },
    listAnchor: {
      "list ul-list ul-list-anchor": `.ul-list-anchor > li::before {
        content: "⇁";
        padding-right: 8px;
      }`,
      "list ol-list ol-list-anchor": ``
    },
    listAnchorSmall: {
      "list ul-list ul-list-anchor list-small": `.list-small {
  font-size: calc(var(--base_font-size) - 4px);
}`,
      "list ol-list ol-list-anchor list-small": ``
    }
  }
};

export default lists;
