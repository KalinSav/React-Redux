import React from "react";
import CountryProfile from "../../CountryProfile.js";

class Nigeria extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: this.constructor.name,
      data: [
        {
          navLink: `${this.props.location.pathname}/keyFacts`,
          title: "Key Facts",
          tileId: 1,
          content: () => (
            <ul>
              <li>Population (2017) - 191 million</li>
              <li>GDP per capita (2016) - $2,176 [UK - $40,367]</li>
              <li>Official language - English</li>
              <li>Religions (2010) - Christian - 47%, Muslim - 46%</li>
              <li>Urban population (2017) - 49%</li>
            </ul>
          )
        },
        {
          navLink: `${this.props.location.pathname}/overview`,
          title: "Overview",
          tileId: 2,
          content: () => (
            <div>
              <p>
                The two Nigerian participants in this study were both studying
                on the MSc Science of Occupational Health and Safety programme.
              </p>
              <p>
                The official language in Nigeria is English, and so Nigerian
                students are familiar with learning in English, as well as
                writing and speaking English.
              </p>
              <p>
                Nigerian students generally approach their studies with a
                positive attitude and spirit of perseverance. They don't have
                access to as good facilities their home country and can value
                education more than perhaps UK students. In Nigeria everything
                is a struggle and so students studying in the UK want to make
                the most of the opportunity. Here the students see it as their
                right, rather than an opportunity. In general, the African
                students who come to the UK can be the best in their country,
                and have often won prestigious scholarships. This differs to
                international students from some other countries who are
                studying in the UK based upon their ability to pay.
              </p>
              <p>
                "For those on scholarships, and even those not on scholarships,
                you know what happens for you to come here, you really have to
                put in your best and make the most of every opportunity you
                have." (Nigerian postgraduate student)
              </p>
              <p>
                "In Ghana or Africa it's quite competitive...very very
                competitive...so when you come here, you've been taken out of a
                place and then come here, so it's like people are looking up to
                you to shine. And my scholarship has got conditions...you have
                to pass all of your exams. You don't have to fail on any of your
                papers or anything, else the scholarship will be withdrawn. So
                you have to just put in your best." (Ghanaian postgraduate
                student)
              </p>
              <p>
                Federal universities are subsidised and so cheaper. State
                universities are more expensive, and private universities even
                more so. Private universities tend to have larger classes
                because the universities wish to increase their income.
              </p>
              <p>
                WASSCI (West African Senior School Certificate Examination) is
                the general exam taken across the country by high school
                students (administered by the West African Examination Council -
                WAEC) (WAEC is a larger regional body and some students will
                take an equivalent national exam) and then an additional
                admission exam to attend university. When students take the
                final exams varies and depends upon how quickly they progress
                through school. The average age is 18.
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
          tileId: 3,
          content: () => (
            <ul>
              <li>
                Unlike many international students, Nigerians at all levels are
                familiar with being taught in, speaking and writing English.
                They will therefore not require additional support in this area.
              </li>
              <li>
                Nigerians often feel particularly grateful and even 'blessed' to
                by studying in the UK. They have often been awarded competitive
                scholarships in order to be here
              </li>
              <li>
                In Nigeria, students also cannot interrupt lecturers in class,
                and so postgraduate students are unlikely to be inclined to
                speak in class when arriving in the UK. Encouragement or an
                explanation of how students behave in class here can be helpful
                early on
              </li>
              <li>
                In Nigeria students cannot e-mail lectures and arrange an
                appointment. Early guidance on the availability of lecturers at
                Birmingham can be helpful
              </li>
            </ul>
          )
        },
        {
          navLink: `${this.props.location.pathname}/teachingStyle`,
          title: "Teaching Style",
          tileId: 4,
          content: () => (
            <div>
              <p>
                General student numbers were reported as being very high at
                Nigerian universities and very large classes were reported at
                undergraduate level. Sometimes classes are split into sub-groups
                and there would be around 150 in a sub-group. But as the years
                progress through the course the classes become smaller.
                Nevertheless, the total class size can still be 150 in the final
                year of the course.
              </p>
              <p>
                In terms of students' high school routine, the school day
                generally starts at 7:30am and finishes at 3:30pm. But this
                varies - one student reported 8am - 1pm.
              </p>
              <p>
                Nigerian students tend to be accustomed to to memorising large
                amounts of information and then regurgitating this knowledge in
                exams. Much of the teaching style involves dictating notes.They
                notice when they arrive in the UK that the emphasis is on
                understanding more and applying principles. Back home they are
                not generally taught to critically think and analyse.
              </p>
              <p>
                Much more interaction was reported in the teaching style in the
                UK than in Nigeria. The particular teaching style depends on the
                subject and style of the lecturer. But lectures were reported as
                being the most common form of teaching at undergraduate level in
                Nigeria, as well as lab work for certain subjects.
              </p>
              <p>
                Students at university in Nigeria address their instructors very
                formally. First names are not used and instructors are referred
                to as 'Dr' or 'Professor'. Some students initially find it
                difficult calling lecturers by first name when they arrive in
                the UK. Additionally, in Nigeria, students also cannot interrupt
                lecturers in class, and so postgraduate students are unlikely to
                be inclined to speak in class when arriving in the UK.
              </p>
              <p>
                Access to resources (Canvas etc) was reported to be better in
                the UK than in Nigeria. Access to lecturers was also reported to
                be much better in the UK. In Nigeria students cannot e-mail
                lectures and arrange an appointment. Lecturers in Nigeria were
                reported to not generally act in the students interest or
                prioritise students. They mainly work for their own interest.
              </p>
              <p>
                Access to online journals varies from place to place, and on
                different courses. Sometimes where there is not good online
                access they have to buy hard copies of articles. They find
                things a lot easier here and see the resources and facilities in
                the UK as a great opportunity.
              </p>
              <p>
                In Nigeria students pay for copies of handouts to cover the cost
                of photocopying. But some lecturers charge more and make money
                from this process. They will sometimes specify the particular
                photocopy centre they have to go to.
              </p>
            </div>
          )
        },
        {
          navLink: `${this.props.location.pathname}/assignments`,
          title: "Assignments",
          tileId: 5,
          content: () => (
            <div>
              <p>
                Assignments vary from course to course. Presentations can be
                common on some courses. MCQs were also reported, as well as
                scenario questions and in-class tests. Posters were reported,
                but this varied from course to course.
              </p>
              <p>
                Students in Nigeria do have take-home essays but they are very
                different to the style of essays in UK higher education. Essays
                here are more structured. The students reported initially fining
                it difficult to adapt to the style of essays here and
                particularly found that being set a formative essay was very
                helpful because it allowed them to improve afterwards.
              </p>
              <p>
                The students in the focus group preferred essays when they come
                to the UK, rather than exams. They find the level of attention
                difficult in examinations [note: this reason is in contrast with
                some students from other nationalities who would avoid exams for
                language reasons]. When picking modules their interest comes
                first, but then the assignment style can be a secondary
                influence.
              </p>
            </div>
          )
        },
        {
          navLink: `${this.props.location.pathname}/plagiarism`,
          title: "Plagiarism",
          tileId: 6,
          content: () => (
            <p>
              There is not much emphasis on plagiarism in Nigeria and there are
              no punishments for committing plagiarism. Students can be
              surprised at how seriously plagiarism is taken in the UK. In
              Nigeria the teachers like them to reference, but don't mind if the
              text is copied verbatim.
            </p>
          )
        },
        {
          navLink: `${this.props.location.pathname}/digitalTechnology`,
          title: "Digital Technology",
          tileId: 7,
          content: () => (
            <div>
              <p>
                The online teaching resources reported varied in Nigeria. One
                student reported that their previous university is currently
                test-running a Canvas-like system. However, the Internet
                connection is less reliable in some places and so difficult in
                practice sometimes.
              </p>
              <p>
                There are computer rooms in Nigerian schools, but few use them.
                The students reported using their phone to access the internet.
                There is no school wi-fi.
              </p>
            </div>
          )
        },
        {
          navLink: `${this.props.location.pathname}/regionalVariations`,
          title: "Regional Variations",
          tileId: 8,
          content: () => (
            <div>
              <p>
                There were no variations across the country reported at
                university level, but rather between types of university.
                Federal universities are of a similar quality across the
                country, and state universities tend to be seen as below federal
                institutions in quality. Private universities are of a similar
                quality across the country.
              </p>
              <p>
                However, a north/south divide in school quality was reported.
                The divide is not necessarily urban/rural in Nigeria, but the
                school quality does vary a lot. This is both between regions and
                public/private institutions. Some state governments are
                interested in investing more in education than others.
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

export default Nigeria;
