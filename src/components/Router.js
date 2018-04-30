import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Categories from "../containers/Categories";
import InitialSection from "./InitialSection";
import Typography from "../containers/Typography";
import Buttons from "../containers/Buttons";
import Links from "../containers/Links";
import Lists from "../containers/Lists";
import Icons from "../containers/Icons";
import Logo from "../containers/Logo";
import Form from "../containers/Form";
import Breadcrumbs from "../containers/Breadcrumbs";
import Table from "../containers/Table";
import Colors from "../containers/Colors";
import Headers from "../containers/Headers";
import Quote from "../containers/Quote";
import Highlights from "../containers/Highlights";
import FeaturedIcons from "../containers/FeaturedIcons";

class Router extends Component {
  render() {
    const { state } = this.props;
    let style = "";

    Object.keys(state).forEach(itemGroup => {
      if (!state[itemGroup].style) return;
      const isAppId = itemGroup === "appId";

      Object.keys(state[itemGroup].style).forEach(item => {
        const prefix = isAppId ? "" : `.${state.appId.prefix}-`;
        style += `${prefix}${item}{ ${state[itemGroup].style[item]} }\n\n`;
      });
    });

    return (
      <BrowserRouter>
        <div className="sgcreator-hook">
          <style>{style}</style>
          <Route
            path="/"
            render={props => <Categories data={style} {...props} />}
          />
          <Switch>
            <Route path="/quote" component={Quote} />
            <Route path="/featured-icons" component={FeaturedIcons} />
            <Route path="/headers" component={Headers} />
            <Route path="/highlights" component={Highlights} />
            <Route path="/colors" component={Colors} />
            <Route path="/table" component={Table} />
            <Route path="/breadcrumbs" component={Breadcrumbs} />
            <Route path="/icons" component={Icons} />
            <Route path="/logo" component={Logo} />
            <Route path="/lists" component={Lists} />
            <Route path="/links" component={Links} />
            <Route path="/buttons" component={Buttons} />
            <Route path="/typography" component={Typography} />
            <Route path="/form" component={Form} />
            <Route path="/" component={InitialSection} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(Router);
