const breadcrumbs = {
  style: {
    breadcrumbs: `padding: 10px 16px;
list-style: none;
font-size: calc(var(--base_font-size)-4px);
background: var(--color_secondary);
border-radius: 5px;`,
    "breadcrumbs > li": `display: inline;
font-size: 18px;
color: var(--color_desaturated);`,
    "breadcrumbs li+li:before": `padding: 8px;
color: black;
font-size: 16px;
content: '/';`,
    "breadcrumbs > li > a": `color: var(--color_main);
text-decoration: none;`,
    "breadcrumbs > li > a:hover": `color: #0275d8;
text-decoration: underline;`
  }
};

export default breadcrumbs;
