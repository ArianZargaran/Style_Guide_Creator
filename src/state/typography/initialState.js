const typography = {
  style: {
    "small-text": `.small-text {
  font-size: calc(var(--base_font-size) - 4px);
}`,
    "base-text": `.base-text {
  font-size: calc(var(--base_font-size));
}`,
    "medium-text": `.medium-text {
  font-size: calc(var(--base_font-size) + 2px);
}`,
    "large-text": `.large-text {
  font-size: calc(var(--base_font-size) + 4px);
}`,
    "xlarge-text": `.xlarge-text {
  font-size: calc(var(--base_font-size) + 6px);
}`,
    "xxlarge-text": `.xxlarge-text {
  font-size: calc(var(--base_font-size) + 8px);
}`,
    "huge-text": `.huge-text {
  font-size: calc(var(--base_font-size) * 2);
}`
  }
};

export default typography;
