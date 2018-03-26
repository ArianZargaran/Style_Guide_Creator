import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Categories from "./Categories";
import Home from "./Home";
import Typography from "./Typography";
import Buttons from "./Buttons";
import Links from "./Links";
import Lists from "./Lists";
import Icons from "./Icons";
import Logo from "./Logo";
import Breadcrumbs from "./Breadcrumbs";
import Table from "./Table";
import Grid from "./Grid";
import Highlights from "./Highlights";
import Colors from "./Colors";
import Headers from "./Headers";
// import ArticleSection from "./ArticleSection";
// import GuidesSection from "./GuidesSection";
import PageHeader from "./PageHeader";
import Quote from "./Quote";
import FeaturedIcons from "./FeaturedIcons";
import FeaturedSpotlight from "./FeaturedSpotlight";
import FeaturedList from "./FeaturedList";
import FeaturedBlock from "./FeaturedBlock";
import ArticleNavigation from "./ArticleNavigation";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="sgcreator-hook">
          <Categories />
          <Switch>
            <Route path="/article-navigation" component={ArticleNavigation} />
            <Route path="/featured-block" component={FeaturedBlock} />
            <Route path="/featured-list" component={FeaturedList} />
            <Route path="/featured-spotlight" component={FeaturedSpotlight} />
            <Route path="/featured-icons" component={FeaturedIcons} />
            <Route path="/quote" component={Quote} />
            <Route path="/page-header" component={PageHeader} />
            <Route path="/headers" component={Headers} />
            <Route path="/highlights" component={Highlights} />
            <Route path="/colors" component={Colors} />
            <Route path="/grid" component={Grid} />
            <Route path="/table" component={Table} />
            <Route path="/breadcrumbs" component={Breadcrumbs} />
            <Route path="/icons" component={Icons} />
            <Route path="/logo" component={Logo} />
            <Route path="/lists" component={Lists} />
            <Route path="/links" component={Links} />
            <Route path="/buttons" component={Buttons} />
            <Route path="/typography" component={Typography} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// <Route path="/guides-section" component={GuidesSection} />
// <Route path="/article-section" component={ArticleSection} />
