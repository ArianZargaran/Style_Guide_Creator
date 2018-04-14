import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { changeIconsStyles } from "../state/icons/action-creators";
import "codemirror/mode/css/css";

class Icons extends Component {
  render() {
    const icons = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Icons</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(icons).map((item, i) => (
            <div
              className="sgcreator-item-box sgcreator-item-box_icons"
              key={i}
            >
              <div className="sgcreator-sample-box">
                <i className={`${prefix}-${item} fas fa-minus`} />
              </div>
              <div className="sgcreator-tag-box">
                {`<i class="${prefix}-${item} fas fa-minus"></i>`}
              </div>
              <div className="sgcreator-css-box">
                <CodeMirror
                  options={{ mode: "css", theme: "ttcn" }}
                  value={icons[item]}
                  onChange={(editor, data, value) =>
                    this.onEditorChange(item, value)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  onEditorChange = (item, value) => {
    console.log(item, value);
    this.props.changeIconsStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.icons,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeIconsStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Icons);
