import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Style from "react-style-tag";
import { connect } from "react-redux";

import Categories from "../containers/Categories";
import Home from "./Home";
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
import FormElements from "../containers/FormElements";

class Router extends Component {
  render() {
    const appId = this.props.appId.style;
    const logoClass = Object.keys(this.props.logo.style)[0];
    const logo = this.props.logo.style;
    const prefix = this.props.appId.prefix;
    const style = `${appId} .${prefix}${logo[logoClass]}`;

    return (
      <BrowserRouter>
        <div className="sgcreator-hook">
          <Style>{style}</Style>
          <Categories />
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
            <Route path="/form-elements" component={Form} />
            // Previous component needs to be changed back to FormElements
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    appId: state.appId,
    logo: state.logo
  };
}

export default connect(mapStateToProps)(Router);
