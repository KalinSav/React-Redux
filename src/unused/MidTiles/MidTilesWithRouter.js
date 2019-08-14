// import React from "react";
// import { Route, HashRouter, Switch } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import MidTile from "./MidTile.js";
// import ProjectSummary from "./ContentPages/ProjectSummary";
// import TopTips from "./ContentPages/TopTips";
// import KeyIssues from "./ContentPages/KeyIssues";

// class MidTiles extends React.Component {
//   state = {
//     midTiles: [
//       {
//         tileTitle: "Project Summary",
//         buttonText: "Find out more",
//         navLink: "/projectsummary",
//         component: ProjectSummary,
//         tileId: 1
//       },
//       {
//         tileTitle: "Top 10 Tips",
//         buttonText: "Find out more",
//         navLink: "/toptips",
//         component: TopTips,
//         tileId: 2
//       },
//       {
//         tileTitle: "Key Issues",
//         buttonText: "Find out more",
//         navLink: "/keyissues",
//         component: KeyIssues,
//         tileId: 3
//       }
//     ]
//   };
//   render() {
//     const routes = this.state.midTiles.map(tile => (
//       <Route key={tile.tileId} path={tile.navLink} component={tile.component} />
//     ));

//     return (
//       <HashRouter>
//         <section className="mid">
//           <Route path="/" exact render={() => <MidTile state={this.state} />} />
//           <Route
//             render={({ location }) => (
//               <TransitionGroup>
//                 <CSSTransition
//                   key={location.pathname}
//                   timeout={300}
//                   classNames="fade"
//                   exit={false}
//                 >
//                   <Switch location={location}>{routes}</Switch>
//                 </CSSTransition>
//               </TransitionGroup>
//             )}
//           />
//         </section>
//       </HashRouter>
//     );
//   }
// }

// export default MidTiles;
