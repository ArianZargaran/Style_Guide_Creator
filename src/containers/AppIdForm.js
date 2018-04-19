import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAppId } from "../state/app_id/action-creators";
import "../style/Form.css";

class AppIdForm extends Component {
  constructor(props) {
    super(props);
    this.editorRefs = [];
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.editorRefs[0])
      .getElementsByTagName("input")[0]
      .focus();
  }

  render() {
    const { handleSubmit, children = "Form" } = this.props;
    return (
      <form
        className="sgcreator-form"
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <h2>{children}</h2>
        <Field
          ref={ed => (this.editorRefs[0] = ed)}
          withRef
          type="text"
          label="App Name"
          name="name"
          component={this.renderFirstField}
        />
        <Field
          ref={ed => (this.editorRefs[1] = ed)}
          withRef
          type="text"
          label="CSS classes prefix"
          name="prefix"
          component={this.renderField}
        />
        <Field
          ref={ed => (this.editorRefs[1] = ed)}
          withRef
          label="Global CSS variables"
          name={`style[":root"]`}
          component={this.renderTextArea}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

  renderFirstField = field => {
    return (
      <div>
        <label>{field.label}</label>
        <input ref={this.props.ref} type="text" {...field.input} autoFocus />
        <span className="sgcreator-error_message">
          {field.meta.touched ? field.meta.error : ""}
        </span>
      </div>
    );
  };

  renderField = field => {
    return (
      <div>
        <label>{field.label}</label>
        <input type="text" {...field.input} />
        <span className="sgcreator-error_message">
          {field.meta.touched ? field.meta.error : ""}
        </span>
      </div>
    );
  };

  renderTextArea = field => {
    return (
      <div>
        <label>{field.label}</label>
        <textarea {...field.input} />
        <span>{field.meta.touched ? field.meta.error : ""}</span>
      </div>
    );
  };

  onSubmit = values => {
    this.props.fetchAppId(values);
  };
}

function validate(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "Enter a title!";
  }
  if (!values.prefix) {
    errors.prefix = "Enter a prefix!";
  }
  return errors;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAppId }, dispatch);
}

AppIdForm = reduxForm({
  form: "AppIdForm",
  validate
})(AppIdForm);

AppIdForm = connect(
  state => ({
    initialValues: state.appId
  }),
  mapDispatchToProps
)(AppIdForm);

export default AppIdForm;
