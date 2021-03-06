const buttons = {
  style: {
    button: `text-decoration: none;
text-align: center;
outline: var(--color_complementary);
font-size: var(--base_font-size);
margin: 15px 0;
padding: 13px 10px;
border-radius: 2px;
min-width: 120px;
display: inline-block;
border: 2px solid var(--color_desaturated);`,

    "button:hover": `border: 2px solid var(--color_desaturated);
background: var(--color_desaturated);
color: var(--color_background);
cursor: pointer;`,

    button_primary: `border: 2px solid var(--color_main);
color: var(--color_background);
background: var(--color_main);`,

    button_secondary: `border: 2px solid var(--color_main);
color: var(--color_main);
background: var(--color_background);`,

    "button_inverted-block": `border: 2px solid var(--color_tertiary);
color: var(--color_tertiary);
background: var(--color_background);`
  }
};

export default buttons;
