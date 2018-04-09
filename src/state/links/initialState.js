const links = {
  style: {
    link: `link {
  text-decoration: none;
  color: var(--color_main);
  padding-right: 8px;
}`,
    link_primary: `link_primary:hover {
  color: var(--color_saturated);
}`,
    link_secondary: `link_secondary::before {
  content: "⇁ ";
}`
  }
};

export default links;
