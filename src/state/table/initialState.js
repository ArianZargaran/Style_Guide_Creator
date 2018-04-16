const table = {
  style: {
    table: `width: 80%;
max-width: 600px;
height: 320px;
border-collapse: collapse;
border: 1px solid var(--color_secondary);
margin: 50px auto;`,
    "table th": `background: var(--color_main);
height: 54px;
width: 25%;
font-weight: lighter;
text-shadow: 0 1px 0 var(--color_secondary);
color: white;
border: 1px solid var(--color_secondary);
box-shadow: inset 0px 1px 2px #568ebd;
transition: all 0.2s;`,
    "table tr": `border-bottom: 1px solid var(--color_desaturated);`,
    "table tr:last-child": `border-bottom: 1px solid var(--color_desaturated);`,
    "table td": `border-right: 1px solid var(--color_desaturated);
padding: 10px;
transition: all 0.2s;`,
    "table td:last-child": `border-right: 0px;`
  }
};

export default table;
