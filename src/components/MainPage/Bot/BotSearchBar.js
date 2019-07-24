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
    if (document.querySelector(".searchSuggestions")) {
      document.querySelector(".searchSuggestions").style.visibility = "visible";
    }
  };

  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
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
        <ul className="searchSuggestions">
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
        <input
          type="text"
          className="inputBox"
          placeholder="Search country..."
          value={text}
          onChange={this.onTextChange}
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default BotSearchBar;
