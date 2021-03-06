const quote = {
  style: {
    quote: `background: var(--color_secondary);
font-size: calc(var(--h1_font-size));
padding: 1px 20px 20px 20px;
position: relative;
z-index: 2;`,

    "quote p::before": `content: "“";
font-size: calc(var(--h1_font-size) + 100px);
position: absolute;
color: var(--color_background);
z-index: -1;
top: -10px;
left: 0;
opacity: 0.5;`,

    "quote p::after": `content: "”";
font-size: calc(var(--h1_font-size) + 100px);
position: absolute;
color: var(--color_background);
z-index: -1;
bottom: -110px;
right: 0;
opacity: 0.5;`
  }
};

export default quote;
