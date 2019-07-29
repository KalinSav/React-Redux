import React from "react";

class TopText extends React.Component {
  render() {
    return (
      <article className="topText">
        <p>
          Welcome to this
          <strong> International Student Online Learning Resource</strong>. The
          resource has been developed for all staff who have regular contact
          with international students, but particularly those engaged in
          teaching activities. The aim of the resource is to provide an
          opportunity for staff to gain a greater understanding of the learning
          background and experiences of students visiting the school from
          outside the UK. The content of the resource is largely based upon the
          findings of focus group research conducted with groups of
          international students from different countries and studying on a
          range of programmes in the School of Geography, Earth and
          Environmental Sciences. The project was funded by the University of
          Birmingham's Educational Enhancement Fund.
        </p>
        <p>
          The site aims to be as intuitive as possible and is designed to enable
          easy access to information related to the
          <strong> learning background of international cohorts</strong>. Below
          are links to various pages where key findings of the project are
          summarised. This includes overall lessons learnt across the groups, as
          well as country-specific information gathered from the research. It
          was evident from the focus groups that students come to the University
          of Birmingham from a variety of educational contexts and that a more
          nuanced country-specific understanding of these backgrounds can be
          beneficial in appreciating students' perspective and needs.
        </p>
        {/* <p>
          Nevertheless, because of the particular composition of the focus
          groups, there is a greater amount of information about some countries
          than others. The site is not designed as a comprehensive resource but
          as a starting point for further conversation with students. The
          resource is also designed for users to browse sections of particular
          interest, rather than read comprehensively, and so there are some
          information overlaps in places.
        </p> */}
      </article>
    );
  }
}

export default TopText;
