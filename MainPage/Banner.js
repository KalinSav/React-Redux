import React from "react";

class Banner extends React.Component {
  render() {
    const { bannerTitle } = this.props;
    return (
      <div className="banner">
        <h2>{bannerTitle}</h2>
      </div>
    );
  }
}

export default Banner;
