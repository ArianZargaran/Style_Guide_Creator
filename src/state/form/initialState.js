const form = {
  style: {
    form: `  display: inline-block;
  min-width: 350px;
  margin: 12px auto;
  padding: 20px 30px;
  border: 3px solid var(--color_main);
  border-radius: 5px;
}

form div {
  display: flex;
  flex-direction: column;
}

form button {
  padding: 5px;
  border: 2px solid var(--color_main);
  border-radius: 5px;
  background: none;
  cursor: pointer;
  color: var(--color_main);
  font-size: var(--h4_font-size);
}

form button:hover,
form button:focus {
  outline: none;
  border-color: var(--color_desaturated);
  background: var(--color_tertiary);
  color: var(--color_complementary);
}

form button:after {
  content: " >>>";
}

form input, form textarea {
  min-height: 2.5em;
  vertical-align: middle;
  margin: 5px;
  padding: 5px;
  font-size: var(--h5_font-size);
  outline-color: var(--color_complementary);
}

form textarea {
  resize: vertical;
  border: 1px solid var(--color_secondary);
  height: 350px;`
  }
};

export default form;
