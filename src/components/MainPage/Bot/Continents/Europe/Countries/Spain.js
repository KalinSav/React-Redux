import React from "react";
import CountryProfile from "../../CountryProfile.js";

class Spain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: this.constructor.name,
      data: [
        {
          navLink: `${this.props.location.pathname}/keyFacts`,
          title: "Key Facts",
          content: () => <div>Helloo</div>
        },
        {
          navLink: `${this.props.location.pathname}/overview`,
          title: "Overview",
          content: () => <div>Helloo2</div>
        },
        {
          navLink: `${this.props.location.pathname}/tips`,
          title: "Tips",
          content: () => <div>Helloo2</div>
        },
        {
          navLink: `${this.props.location.pathname}/teachingStyle`,
          title: "Teaching Style",
          content: () => <div>Helloo2</div>
        },
        {
          navLink: `${this.props.location.pathname}/assignments`,
          title: "Assignments",
          content: () => <div>Helloo2</div>
        },
        {
          navLink: `${this.props.location.pathname}/plagiarism`,
          title: "Plagiarism",
          content: () => <div>Helloo2</div>
        },
        {
          navLink: `${this.props.location.pathname}/digitalTechnology`,
          title: "Digital Technology",
          content: () => <div>Helloo2</div>
        },
        {
          navLink: `${this.props.location.pathname}/regionalVariations`,
          title: "Regional Variations",
          content: () => <div>Helloo2</div>
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <CountryProfile state={this.state} />
      </div>
    );
  }
}

export default Spain;
