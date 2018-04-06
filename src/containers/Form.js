import React, { Component } from "react";
import { connect } from "react-redux";

import "../style/Form.css";

class Form extends Component {
  render() {
    const form = this.props.category.Form;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>{Object.keys(this.props.category)[0]}</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(form).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_editorial-form"
              itemID={i}
              key={i}
            >
              <div className="sgcreator-sample-box">
                <form
                  className={form[item]}
                  onSubmit={this.onFormSubmit.bind(this)}
                >
                  <label for="full name">Full Name</label>
                  <input type="text" id="full name" />
                  <br />
                  <label for="password">Password</label>
                  <input type="password" id="password" />
                  <br />
                  <input type="checkbox" id="terms" />
                  <label for="terms">Accept Terms & Conditions</label>
                  <br />
                  <input type="submit" value="Submit" />
                </form>
              </div>
              <div className="sgcreator-tag-box">
                {`<form class="${prefix}${form[item]}">`}
                {<br />}
                {`    <label for="full name">Full Name</label>`}
                {<br />}
                {`    <input type="text" id="full name" />`}
                {<br />}
                {<br />}
                {`    <label for="password">Password</label>`}
                {<br />}
                {`    <input type="password" id="password" />`}
                {<br />}
                {<br />}
                {`    <input type="checkbox" id="terms" required />`}
                {<br />}
                {`    <label for="terms">Accept Terms & Conditions</label>`}
                {<br />}
                {<br />}
                {`    <input type="submit" value="Submit">`}
                {<br />}
                {`</form>`}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  onFormSubmit(e) {
    e.preventDefault();
  }
}

function mapStateToProps(state) {
  return {
    category: state.formComponent,
    appId: state.appId
  };
}

export default connect(mapStateToProps)(Form);
