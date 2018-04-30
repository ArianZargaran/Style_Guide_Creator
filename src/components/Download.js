import React, { Component } from "react";

export default class Download extends Component {
  constructor(props) {
    super(props);
    this.btnRef = React.createRef();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="sgcreator-download ">
        <a
          ref={ref => (this.btnRef = ref)}
          onClick={this.downloadStyle.bind(
            this,
            data,
            this.btnRef,
            "style.css"
          )}
        >
          <i className="fas fa-download"> </i> Download CSS
        </a>
      </div>
    );
  }

  downloadStyle(data, el, filename) {
    el.setAttribute(
      "href",
      "data:text/css;charset=utf-8," + encodeURIComponent(data)
    );
    el.setAttribute("download", filename);
  }
}
