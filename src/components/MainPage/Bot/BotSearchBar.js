import React from "react";
import { NavLink, HashRouter } from "react-router-dom";
import Countries from "./Continents/Countries";

class BotSearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.countries = Countries;
    this.state = {
      suggestions: [],
      text: ""
    };
  }

  onTextChange = e => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      const countryNames = this.countries.map(country => country.name);
      suggestions = countryNames.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionSelected(value) {
    this.props.onClick();
    const listOfCountryTiles = document.getElementById("listOfCountryTiles");
    if (listOfCountryTiles && listOfCountryTiles.style.display !== "none") {
      listOfCountryTiles.style.display = "none";
    }

    this.setState(() => ({
      text: value,
      suggestions: []
    }));
    console.log("tt");
  }

  findRoute(item) {
    const foundRoute = this.countries.find(element => {
      if (element.name === item) {
        return element.continent;
      }
      return null;
    });
    return foundRoute.continent;
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }

    return (
      <HashRouter>
        <ul>
          {suggestions.map(item => (
            <li key={item}>
              <NavLink to={`${this.findRoute(item)}/${item}`}>
                <span onClick={() => this.suggestionSelected(item)}>
                  {item}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </HashRouter>
    );
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <input value={text} onChange={this.onTextChange} type="text" />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default BotSearchBar;
