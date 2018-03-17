import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import Router from "./components/Router";
// import Home from "./components/Home";
//import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles/sgcreator/sgcreator-hook.css";
import "./styles/sgcreator/sgcreator-list.css";
import "./styles/sgcreator/sgcreator-section.css";
import "./styles/StyleGuide.css";

// import Typography from "./components/Typography";
// import Buttons from "./components/Buttons";
// import Links from "./components/Typography";
// import Lists from "./components/Buttons";
// import Icons from "./components/Typography";
// import Breadcrumbs from "./components/Buttons";
// import Table from "./components/Typography";
// import Grids from "./components/Buttons";
// import Highlights from "./components/Typography";
// import Colors from "./components/Buttons";
// import EditorialHeader from "./components/Typography";
// import ArticleSection from "./components/Buttons";
// import GuidesSection from "./components/Typography";
// import PageHeader from "./components/Buttons";
// import Quote from "./components/Typography";
// import FeturedIcons from "./components/Buttons";
// import FeturedSpotlight from "./components/Typography";
// import FeaturedList from "./components/Buttons";
// import FeaturedBlog from "./components/Typography";
// import Navigation from "./components/Buttons";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

// <BrowserRouter>
//   <div>
//     <Switch>
//       <Route path="/navigation" component={Navigation} />
//       <Route path="/featured-blog" component={FeaturedBlog} />
//       <Route path="/featured-list" component={FeaturedList} />
//       <Route path="/fetured-spotlight" component={FeturedSpotlight} />
//       <Route path="/featured-icons" component={FeturedIcons} />
//       <Route path="/quote" component={Quote} />
//       <Route path="/page-header" component={PageHeader} />
//       <Route path="/guides-section" component={GuidesSection} />
//       <Route path="/article-section" component={ArticleSection} />
//       <Route path="/editorial-header" component={EditorialHeader} />
//       <Route path="/highlights" component={Highlights} />
//       <Route path="/colors" component={Colors} />
//       <Route path="/grids" component={Grids} />
//       <Route path="/table" component={Table} />
//       <Route path="/breadcrumbs" component={Breadcrumbs} />
//       <Route path="/icons" component={Icons} />
//       <Route path="/lists" component={Lists} />
//       <Route path="/links" component={Links} />
//       <Route path="/buttons" component={Buttons} />
//       <Route path="/typography" component={Typography} />
//       <Route path="/" component={Home} />
//     </Switch>
//   </div>
// </BrowserRouter>
