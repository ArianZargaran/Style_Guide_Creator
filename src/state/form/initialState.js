const form = {
  style: {
    form: `display: inline-block;
min-width: 350px;
margin: 12px auto;
padding: 20px 30px;
border-radius: 5px;`,
    "form div": `display: flex;
flex-direction: column;`,

    "form button": `padding: 9px 12px;
background: none;
margin: 15px 0;
cursor: pointer;
background: var(--color_main);
font-size: var(--h4_font-size);
color: var(--color_background);
border-color: var(--color_main);`,

    "form button:hover, form button:focus": `outline: none;
  border: 1px solid var(--color_main);
  background: var(--color_desaturated);`,

    "form button:after": `content: " >>>";`,

    "form input, form textarea": `min-height: 2.5em;
vertical-align: middle;
margin: 10px;
padding: 5px 10px;
outline: none;
font-size: var(--h5_font-size);
border: var(--color_main);`,

    "form textarea": `resize: vertical;
border: 1px solid var(--color_secondary);
height: 350px;`
  }
};

export default form;
