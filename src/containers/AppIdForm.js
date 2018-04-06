import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAppId } from "../state/app_id/action-creators";

class AppIdForm extends Component {
  render() {
    const formComponent = this.props.formComponent.Form;
    const prefix = this.props.appId.prefix;
    const name = this.props.appId.name;
    const { handleSubmit } = this.props;

    return (
      <form
        className={formComponent["form-tag"]}
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <h2>Set Up YourApp</h2>
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
        <button type="submit">Submit</button>
      </form>
    );
  }

  renderFirstField(field) {
    return (
      <div className="row">
        <label className="label">{field.label}</label>
        <input
          placeholder={field.placeholder}
          className="input"
          type="text"
          {...field.input}
          autoFocus
        />
        <p>{field.meta.touched ? field.meta.error : ""}</p>
      </div>
    );
  }

  renderField(field) {
    return (
      <div className="row">
        <label className="label">{field.label}</label>
        <input
          placeholder={field.placeholder}
          className="input"
          type="text"
          {...field.input}
        />
        <p>{field.meta.touched ? field.meta.error : ""}</p>
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
