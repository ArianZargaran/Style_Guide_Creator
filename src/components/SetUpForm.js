import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class SetUpForm extends Component {
  render() {
    const formComponent = this.props.formComponent.Form;
    const { handleSubmit } = this.props;

    return (
      <form
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
        className={formComponent.className["form-tag"]}
      >
        <h2>Set Up YourApp</h2>
        <Field label="App Name" name="name" component={this.renderFirstField} />
        <Field
          label="CSS classes prefix"
          name="prefix"
          component={this.renderField}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

  renderFirstField(field) {
    return (
      <div className="ya-row">
        <label className="ya-label">{field.label}</label>
        <input className="ya-input" type="text" {...field.input} autoFocus />
        <p>{field.meta.touched ? field.meta.error : ""}</p>
      </div>
    );
  }

  renderField(field) {
    return (
      <div className="ya-row">
        <label className="ya-label">{field.label}</label>
        <input className="ya-input" type="text" {...field.input} />
        <p>{field.meta.touched ? field.meta.error : ""}</p>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
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
    formComponent: state.formComponent
  };
}

SetUpForm = connect(mapStateToProps)(SetUpForm);

export default reduxForm({
  validate,
  form: "SetUpForm"
})(SetUpForm);
