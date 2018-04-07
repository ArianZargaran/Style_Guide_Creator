import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Style from "react-style-tag";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAppId } from "../state/app_id/action-creators";

class AppIdForm extends Component {
  render() {
    const prefix = this.props.appId.prefix;
    const name = this.props.appId.name;
    const style = this.props.appId.style;
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
        <Field
          label="Global CSS variables"
          name="style"
          placeholder={style}
          component={this.renderTextArea}
        />
        <button type="submit">Submit</button>

        <Style>{style}</Style>
      </form>
    );
  }

  renderFirstField(field) {
    return (
      <div className="row">
        <label className="label">{field.label}</label>
        <input
          placeholder={field.placeholder}
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
        <input placeholder={field.placeholder} type="text" {...field.input} />
        <p>{field.meta.touched ? field.meta.error : ""}</p>
      </div>
    );
  }

  renderTextArea(field) {
    return (
      <div className="row">
        <label className="label">{field.label}</label>
        <textarea placeholder={field.placeholder} {...field.input} />
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
