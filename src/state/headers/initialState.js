const Headers = {
  style: {
    common: `.header, h1, h2, h3, h4, h5, h6 {
  letter-spacing: -1px;
  display: block;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  font-family: var(--header_font-family);
}`,
    "header header1": `.header1, h1 {
  font-size: var(--h1_font-size);
  margin-top: 0.67em;
  margin-bottom: 0.67em;
}`,
    "header header2": `.header2, h2 {
  font-size: var(--h2_font-size);
  margin-top: 0.83em;
  margin-bottom: 0.83em;
}`,
    "header header3": `.header3, h3 {
  font-size: var(--h3_font-size);
  margin-top: 1em;
  margin-bottom: 1em;
}`,
    "header header4": `.header4, h4 {
  font-size: var(--h4_font-size);
  margin-top: 1.33em;
  margin-bottom: 1.33em;
}`,
    "header header5": `.header5, h5 {
  font-size: var(--h5_font-size);
  margin-top: 1.67em;
  margin-bottom: 1.67em;
}
`,
    "header header6": `.header6, h6 {
  font-size: var(--h6_font-size);
  margin-top: 2.33em;
  margin-bottom: 2.33em;
 }`
  }
};

export default Headers;
