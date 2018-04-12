import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAppId } from "../state/app_id/action-creators";

class AppIdForm extends Component {
  render() {
    const prefix = this.props.appId.prefix;
    const form = Object.keys(this.props.formComponent.style)[0];
    const name = this.props.appId.name;
    const style = this.props.appId.style;
    const { handleSubmit, children = "Form" } = this.props;

    return (
      <form
        className={`${prefix}${form}`}
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <h2>{children}</h2>
        <Field
          label="App Name"
          name="name"
          placeholder={name}
          component={this.renderFirstField}
        />
        <Field
          label="CSS classes prefix"
          name="prefix"
          placeholder={prefix}
          component={this.renderField}
        />
        <Field
          label="Global CSS variables"
          name="style"
          placeholder={style}
          component={this.renderTextArea}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

  renderFirstField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input
          placeholder={field.placeholder}
          type="text"
          {...field.input}
          autoFocus
        />
        <span className="sgcreator-error_message">
          {field.meta.touched ? field.meta.error : ""}
        </span>
      </div>
    );
  }

  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input placeholder={field.placeholder} type="text" {...field.input} />
        <span className="sgcreator-error_message">
          {field.meta.touched ? field.meta.error : ""}
        </span>
      </div>
    );
  }

  renderTextArea(field) {
    return (
      <div>
        <label>{field.label}</label>
        <textarea placeholder={field.placeholder} {...field.input} />
        <span>{field.meta.touched ? field.meta.error : ""}</span>
      </div>
    );
  }

  onSubmit(values) {
    this.props.fetchAppId(values);
  }
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

function mapStateToProps(state) {
  return {
    formComponent: state.formComponent,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAppId }, dispatch);
}

AppIdForm = connect(mapStateToProps, mapDispatchToProps)(AppIdForm);

export default reduxForm({
  form: "AppIdForm",
  validate
})(AppIdForm);
