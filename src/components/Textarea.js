import React, { Component } from "react";

const DEFAULT_HEIGHT = 20;

export default class Textarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: DEFAULT_HEIGHT,
      value: this.props.children
    };

    this.setValue = this.setValue.bind(this);
    this.setFilledTextareaHeight = this.setFilledTextareaHeight.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    this.setFilledTextareaHeight();
  }

  setFilledTextareaHeight() {
    if (this.mounted) {
      const element = this.ghost;

      this.setState({
        height: element.clientHeight
      });
    }
  }

  setValue(event) {
    this.setState({ value: event.target.value });
  }

  getExpandableField() {
    const isOneLine = this.state.height <= DEFAULT_HEIGHT;
    const { height, value } = this.state;

    return (
      <textarea
        className="textarea"
        name="textarea"
        id="textarea"
        defaultValue={value}
        style={{
          height,
          resize: isOneLine ? "none" : null
        }}
        onChange={this.setValue}
        onKeyUp={this.setFilledTextareaHeight}
      />
    );
  }

  getGhostField() {
    return (
      <div
        className="textarea textarea--ghost"
        ref={c => (this.ghost = c)}
        aria-hidden="true"
      >
        {this.state.value}
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        {this.getExpandableField()}
        {this.getGhostField()}
      </div>
    );
  }
}

/*.container {
position: relative;
}

.textarea {
  outline: none;
  min - height: 20px;
  box - shadow: none;
  display: block;
  overflow: hidden;
  transition: height 1s ease-in;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.textarea--ghost {
  opacity: 0.3;
  display: block;
  white - space: pre - wrap;
  word - wrap: break-word;

  visibility: hidden;
  position: absolute;
  top: 0;
}
*/
