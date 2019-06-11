import React from "react";
import CountryProfile from "../../CountryProfile.js";

class Ghana extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: this.constructor.name,
      data: [
        {
          navLink: `${this.props.location.pathname}/keyFacts`,
          title: "Key Facts",
          content: () => (
            <ul>
              <li>Population (2017) - 29 million</li>
              <li>GDP per capita (2016) - $1,514 [UK - $40,367]</li>
              <li>Official language - English</li>
              <li>Religions (2010) - Christian - 71%, Muslim - 18%</li>
              <li>Urban population (2016) - 55%</li>
            </ul>
          )
        },
        {
          navLink: `${this.props.location.pathname}/overview`,
          title: "Overview",
          content: () => (
            <div>
              <p>
                The information in this section is largely based on the
                perspective of one postgraduate Ghanaian student studying for an
                MSc in Applied and Petroleum Micropalaeontology. However, some
                information was provided by Nigerian students in the same focus
                group and agreed to be similar in Ghana.
              </p>
              <p>
                The official language in Ghana is English and students are
                taught in English at school. Class sizes at school are similar
                to the UK, but the quality of education varies between public
                and private schools.
              </p>
              <p>
                The teaching style in Ghana at both school and undergraduate
                level generally involves memorising information and then
                regurgitating in exams. Students from Ghana will therefore
                generally be unfamiliar with teaching styles which involve more
                emphasis on the understanding of principles and critical
                thinking. Students from Ghana are also likely to be less
                accustomed to interacting with the teacher in class.
              </p>
              <p>
                There are six or seven universities in Ghana and they are all
                located in the regional capitals (urban areas).
              </p>
              <p>
                Plagiarism is commonly committed in Ghana at undergraduate level
                and this is not seen as a problem by lecturers.
              </p>
              <p>
                Ghanaian students are generally familiar with digital resources
                and report no particular problems.
              </p>
              <p>
                Nigerians and Ghanians feel that they have quite a lot in
                common. The two countries see themselves as 'brothers'.
              </p>
            </div>
          )
        },
        {
          navLink: `${this.props.location.pathname}/tips`,
          title: "Tips",
          content: () => (
            <ul>
              <li>
                In Ghana it is very disrespectful to call a lecturer by their
                first name - lecturers can expel students from class if they do
                so. Early guidance on how to address lecturers and other staff
                members in the UK can be helpful
              </li>
              <li>
                Much of the teaching style in Ghana involves dictating notes.
                Students may therefore require some additional explanation of
                the teaching and learning styles in the UK
              </li>
              <li>
                Ghanaian students are generally unfamiliar with critical
                thinking. Additional support in this area can be helpful
              </li>
              <li>
                Essays are uncommon in Ghana, even at undergraduate level, and
                so additional explanation of what is required can be useful for
                students
              </li>
              <li>
                There is little emphasis on plagiarism in Ghana and there are no
                punishments for committing plagiarism. Students will often copy
                and paste from a web sites and this is generally seen as fine.
                Ghanaian students can therefore benefit from clarification in
                this area
              </li>
            </ul>
          )
        },
        {
          navLink: `${this.props.location.pathname}/teachingStyle`,
          title: "Teaching Style",
          content: () => (
            <div>
              <p>
                In Ghana the school day starts at 7:30am and finishes at 3:30pm.
              </p>
              <p>
                At undergraduate is level the class size is large - generally
                over 100 students - and so Ghanaian students are accustomed to
                much larger classes than are typical for postgraduate courses in
                the UK.
              </p>
              <p>
                Ghanaian students tend to be familiar with memorising large
                amounts of information and then regurgitating this knowledge in
                exams. Much of the teaching style involves dictating notes.They
                notice when they arrive in the UK that the emphasis is on
                understanding more and applying the principles. Back home they
                are not taught to critically think and analyse.
              </p>
              <p>
                Access to online journals at Ghanaian universities varies from
                place to place and on different courses. Sometimes where there
                is not good online access they have to buy hard copies of
                articles. They find things a lot easier here and see the
                resources and facilities in the UK as a great opportunity.
              </p>
              <p>
                In Ghana it is very disrespectful to call a lecturer by their
                first name - lecturers will expel students from class if they
                call them by first name. They are addressed formally
                (eg.'professor') and most are authoritative and not friendly.
                They think that if they are friendly with students they will be
                taken advantage of.
              </p>
              <p>
                Much more interaction was reported in the teaching style in the
                UK than in Ghana. Nevertheless, the teaching style in Ghana
                depends on the subject and style of the lecturer. Lectures were
                reported as being the most common form of teaching, as well as
                lab work for certain subjects.
              </p>
            </div>
          )
        },
        {
          navLink: `${this.props.location.pathname}/assignments`,
          title: "Assignments",
          content: () => (
            <p>
              At undergraduate level in Ghana exam style assessments were
              reported by the participants, as well as in-class assignments.
              Essays are less common. However, the particular mix of assignments
              does vary by course. Group projects were not frequently set.
            </p>
          )
        },
        {
          navLink: `${this.props.location.pathname}/plagiarism`,
          title: "Plagiarism",
          content: () => (
            <p>
              There is little emphasis on plagiarism in Ghana and there are no
              punishments for committing plagiarism. Ghanaian postgraduate
              students can be surprised at how seriously plagiarism is taken
              here. Students will commonly plagiarise in Ghana - eg. copy and
              paste from a web site - and this is generally seen as fine. The
              teacher is interested that students have the right information,
              whether they wrote it themselves or not. Plagiarism is not really
              an issue.
            </p>
          )
        },
        {
          navLink: `${this.props.location.pathname}/digitalTechnology`,
          title: "Digital Technology",
          content: () => (
            <div>
              <p>
                Ghanaian universities currently have systems whereby students
                can access their grades online and some also are beginning to
                implement Canvas-like online learning systems.
              </p>
              <p>Lecturers use PowerPoint in Ghana.</p>
              <p>
                There is wi-fi access on Ghanaian campuses, but the reception is
                not strong.
              </p>
              <p>
                Computers are available in designated locations on campus (eg.
                the main library) and the participants also reported having
                computers available in schools from an early age.
              </p>
            </div>
          )
        },
        {
          navLink: `${this.props.location.pathname}/regionalVariations`,
          title: "Regional Variations",
          content: () => (
            <div>
              <p>
                The quality of schools varies significantly across Ghana. Public
                schools tend to be lower quality. Private school quality is
                generally better. Class size at school (11-16) is about 30. The
                WASSCI (West African Senior School Certificate Examination) is
                the general exam taken across the country.
              </p>
              <p>
                There are six or seven universities in Ghana and they are all
                located in the regional capitals (urban areas).
              </p>
            </div>
          )
        }
      ]
    };
  }

  render() {
    return <CountryProfile state={this.state} />;
  }
}

export default Ghana;
