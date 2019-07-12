import React from "react";
import CountryProfile from "../../CountryProfile.js";

class France extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: this.constructor.name,
      data: [
        {
          navLink: `/Europe/France/keyFacts`,
          title: "Key Facts",
          tileId: 1,
          content: () => <div>Key Facts</div>
        },
        {
          navLink: `/Europe/France/overview`,
          title: "Overview",
          tileId: 2,
          content: () => <div>Overview</div>
        },
        {
          navLink: `/Europe/France/tips`,
          title: "Tips",
          tileId: 3,
          content: () => <div>Tips</div>
        },
        {
          navLink: `/Europe/France/teachingStyle`,
          title: "Teaching Style",
          tileId: 4,
          content: () => <div>Teaching Style</div>
        },
        {
          navLink: `/Europe/France/assignments`,
          title: "Assignments",
          tileId: 5,
          content: () => <div>Assignments</div>
        },
        {
          navLink: `/Europe/France/plagiarism`,
          title: "Plagiarism",
          tileId: 6,
          content: () => <div>Plagiarism</div>
        },
        {
          navLink: `/Europe/France/digitalTechnology`,
          title: "Digital Technology",
          tileId: 7,
          content: () => <div>Digital Technology</div>
        },
        {
          navLink: `/Europe/France/regionalVariations`,
          title: "Regional Variations",
          tileId: 8,
          content: () => <div>Regional Variations</div>
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

export default France;
