import React from "react";
import { NavLink, HashRouter } from "react-router-dom";

class TopBanner extends React.Component {
  componentDidMount() {
    console.log("asd2");
    const NavLinks = document.querySelectorAll(".topBanner a");
    [].forEach.call(NavLinks, eachNavLink => {
      eachNavLink.addEventListener("click", () => this.handleClick());
    });
  }

  handleClick() {
    console.log("asd");
  }
  render() {
    return (
      <header>
        <div className="topBannerImage" />
        <div className="topBanner">
          <h1>International Students</h1>
          <h2>Online Learning Resource</h2>
          <HashRouter>
            <NavLink to="/Europe/Spain" replace>
              Spain
            </NavLink>
            <NavLink to="/Europe/France" replace>
              France
            </NavLink>
          </HashRouter>
        </div>
      </header>
    );
  }
}

export default TopBanner;
