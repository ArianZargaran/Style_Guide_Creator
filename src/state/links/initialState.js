const links = {
  style: {
    "link primary-link": `.link {
  text-decoration: none;
  color: var(--color_main);
}

.link:hover {
  color: var(--color_desaturated);
}

.primary-link::before {
  content: "⇁";
  padding-right: 8px;
}`,
    "link secondary-link": `.secondary-link::before {
  content: "⇁";
  padding-right: 8px;
}`
  }
};

export default links;
