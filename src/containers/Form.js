import React, { Component } from "react";
import { connect } from "react-redux";

class Form extends Component {
  render() {
    const form = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Form</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(form).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_editorial-form"
              key={i}
            >
              <div className="sgcreator-sample-box">
                <form
                  className={`${prefix}${item}`}
                  onSubmit={this.onFormSubmit.bind(this)}
                >
                  <div>
                    <label for="name">Full Name</label>
                    <input type="text" id="name" />
                  </div>
                  <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" />
                  </div>
                  <div>
                    <span>
                      <input type="checkbox" id="terms" />
                      <label for="terms">Accept Terms & Conditions</label>
                    </span>
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </div>
              <div className="sgcreator-tag-box">
                {`<form class="${prefix}${item}">`}
                {<br />}
                {`    <div>`}
                {<br />}
                {`        <label for="full name">Full Name</label>`}
                {<br />}
                {`        <input type="text" id="full name" />`}
                {<br />}
                {`    </div>`}
                {<br />}
                {`    <div>`}
                {<br />}
                {`        <label for="password">Password</label>`}
                {<br />}
                {`        <input type="password" id="password" />`}
                {<br />}
                {`    </div>`}
                {<br />}
                {`    <div>`}
                {<br />}
                {`        <input type="checkbox" id="terms" required />`}
                {<br />}
                {`        <label for="terms">Accept Terms & Conditions</label>`}
                {<br />}
                {`    </div>`}
                {<br />}
                {`    <input type="submit" value="Submit">`}
                {<br />}
                {`</form>`}
              </div>
              <div className="sgcreator-css-box">
                <textarea>{`.${prefix}${form[item]}`}</textarea>
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
