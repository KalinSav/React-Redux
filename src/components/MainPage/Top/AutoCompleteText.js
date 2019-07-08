import React from "react";

class AutocompleteText extends React.Component {
  constructor(props) {
    super(props);
    this.items = ["David", "Damien", "Sara", "Jane"];
    this.state = {
      suggestions: []
    };
  }

  onTextChange = e => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions }));
  };

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <input onChange={this.onTextChange} type="text" />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default AutocompleteText;
