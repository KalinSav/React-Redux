import React from "react";
import CountryProfile from "../../CountryProfile.js";

class Venezuela extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: this.constructor.name,
      data: [
        {
          navLink: `${this.props.location.pathname}/keyFacts`,
          title: "Key Facts",
          tileId: 1,
          content: () => <div>Key Facts</div>
        },
        {
          navLink: `${this.props.location.pathname}/overview`,
          title: "Overview",
          tileId: 2,
          content: () => <div>Overview</div>
        },
        {
          navLink: `${this.props.location.pathname}/tips`,
          title: "Tips",
          tileId: 3,
          content: () => <div>Tips</div>
        },
        {
          navLink: `${this.props.location.pathname}/teachingStyle`,
          title: "Teaching Style",
          tileId: 4,
          content: () => <div>Teaching Style</div>
        },
        {
          navLink: `${this.props.location.pathname}/assignments`,
          title: "Assignments",
          tileId: 5,
          content: () => <div>Assignments</div>
        },
        {
          navLink: `${this.props.location.pathname}/plagiarism`,
          title: "Plagiarism",
          tileId: 6,
          content: () => <div>Plagiarism</div>
        },
        {
          navLink: `${this.props.location.pathname}/digitalTechnology`,
          title: "Digital Technology",
          tileId: 7,
          content: () => <div>Digital Technology</div>
        },
        {
          navLink: `${this.props.location.pathname}/regionalVariations`,
          title: "Regional Variations",
          tileId: 8,
          content: () => <div>Regional Variations</div>
        }
      ]
    };
  }

  render() {
    return <CountryProfile state={this.state} />;
  }
}

export default Venezuela;
