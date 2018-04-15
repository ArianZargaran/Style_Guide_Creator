import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { changeFiconsStyles } from "../state/featured_icons/action-creators";
import "codemirror/mode/css/css";

class FeaturedIcons extends Component {
  render() {
    const ficons = this.props.category.style;
    const prefix = this.props.appId.prefix;

    return (
      <section className="sgcreator-representation_section">
        <h1>Featured Icons</h1>
        <div className="sgcreator-representation_wrapper">
          {Object.keys(ficons).map(
            (item, i, arr) =>
              i === 0 ? (
                <div className="sgcreator-item-box" key={i}>
                  <div className="sgcreator-sample-box" />
                  <div className="sgcreator-tag-box">
                    {`Properties common for all Featured Icons`}
                  </div>
                  <div className="sgcreator-css-box">
                    <p className="sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                    <CodeMirror
                      options={{ mode: "css", theme: "neo" }}
                      value={ficons[item]}
                      onChange={(editor, data, value) =>
                        this.onEditorChange(item, value)
                      }
                    />
                    <p className="sgcreator-selector_close">}</p>
                  </div>
                </div>
              ) : (
                <div className="sgcreator-item-box" key={i}>
                  <div className="sgcreator-sample-box">
                    <a href="#">
                      <span className="fa-stack fa-2x">
                        <i className="fas fa-circle fa-stack-2x" />
                        <i
                          className={`${prefix}-${
                            arr[0]
                          } fas fa-terminal fa-stack-1x fa-inverse`}
                        />
                      </span>
                    </a>
                  </div>
                  <div className="sgcreator-tag-box">
                    {`<span class="fa-stack fa-2x">`}
                    {<br />}
                    {`    <i class="fas fa-circle fa-stack-2x"></i>`}
                    {<br />}
                    {`    <i class="${prefix}-${
                      arr[0]
                    } ${prefix}-${item}"></i>`}
                    {<br />}
                    {`</span>`}
                  </div>
                  <div className="sgcreator-css-box">
                    <p className="sgcreator-selector_open">{`.${prefix}-${item} {`}</p>
                    <CodeMirror
                      options={{ mode: "css", theme: "neo" }}
                      value={ficons[item]}
                      onChange={(editor, data, value) =>
                        this.onEditorChange(item, value)
                      }
                    />
                    <p className="sgcreator-selector_close">}</p>
                  </div>
                </div>
              )
          )}
        </div>
      </section>
    );
  }

  onEditorChange = (item, value) => {
    console.log(item, value);
    this.props.changeFiconsStyles({
      [item]: value
    });
  };
}

function mapStateToProps(state) {
  return {
    category: state.featured_icons,
    appId: state.appId
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeFiconsStyles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedIcons);
