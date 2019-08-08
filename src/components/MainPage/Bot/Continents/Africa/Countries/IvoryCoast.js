import React from "react";
import CountryProfile from "../../CountryProfile.js";

class IvoryCoast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: "Ivory Coast",
      continent: "Africa",
      data: [
        {
          navLink: "/Africa/IvoryCoast/keyFacts",
          title: "Key Facts",
          tileId: 1,
          content: () => (
            <ul>
              <li>Population (2017) - 24 million</li>
              <li>GDP per capita (2016) - $1,535 [UK - $40,367]</li>
              <li>Official language - French</li>
              <li>
                Religions (2009) - Christian - 25%, Muslim - 40%, traditional
                religions - 25%
              </li>
              <li>Urban population (2017) - 56%</li>
            </ul>
          )
        },
        {
          navLink: "/Africa/IvoryCoast/overview",
          title: "Overview",
          tileId: 2,
          content: () => (
            <div>
              <p>
                The Ivory Coast students included in this study were all
                undergraduate BSc Geology students in their first year of study.
              </p>
              <p>
                Ivory Coast students reported being resourceful and familiar
                with adapting to various educational contexts. They tend to find
                that the resources and teaching in the UK are an improvement
                upon their experience. The main issue they face is related to
                language, with the official language of the Ivory Coast being
                French.
              </p>
              <p>
                Most Ivory Coast students will have undertaken a foundation year
                here in the UK. Some may also have attended a business studies
                related foundation year in Ivory Coast (and sometimes elsewhere
                - for example, France) before coming to the UK.
              </p>
              <p>
                The main differences reported in the form of teaching between
                high school in the Ivory Coast and university in the UK is the
                use of PowerPoint here and the emphasis on more independent
                research and study.
              </p>
              <p>
                Unlike students from many other countries, Ivory Coast students
                are generally more familiar with writing essays. At school they
                are taught to structure an essay in a similar way to UK
                students, and are also taught to develop an argument.
              </p>
              <p>
                There are differences between prestigious and other schools in
                Ivory Coast. The highest performing students go to more
                prestigious schools, but both are funded by the government.
                There are also private schools which tend to be better
                resourced. However, the results may not be better - they often
                take students who have been expelled from public schools and
                teachers are less strict. Even the richest parents will send
                their students to public schools.
              </p>

              <blockquote>
                <p>
                  "Basically, we are used to adapt ourselves...So when we came
                  here it wasn't too much to do because it was much more easier
                  than adapting in the Ivory Coast...because we had all the
                  resources we needed and teacher was available if we needed
                  them....Basically it's easier for us to adapt. The much more
                  thing we need to focus on is the language, because our English
                  is much more the problem. It wasn't the staff...And I think
                  there is this problem: make research on our own... independent
                  study. We are not used to it. "
                </p>
                <footer>(Ivory Coast undergraduate student)</footer>
              </blockquote>
            </div>
          )
        },
        {
          navLink: "/Africa/IvoryCoast/tips",
          title: "Tips",
          tileId: 3,
          content: () => (
            <ul>
              <li>
                Ivory Coast students may require guidance with independent
                research and study (eg. undertaking literature reviews). This is
                not a practice they are generally accustomed to
              </li>
              <li>
                The official language of the Ivory Coast is French, and so
                students come from a non-English speaking educational background
              </li>
              <li>
                Ivory Coast students are generally more familiar with writing
                UK-style essays (including developing an argument). They are
                therefore likely to require less support in this area than most
                other international students
              </li>
              <li>
                Ivory Coast undergraduate students may be less accustomed to
                using computers for every-day assignment purposes. Some guidance
                with the use of basic software may be appreciated at times
              </li>
              <li>
                Ivory Coast students are generally not familiar with producing
                factual posters. Extra support may be required here
              </li>
              <li>
                Ivory Coast has a north-south divide in terms of school quality.
                Students for some areas of the country may therefore have had a
                less privileged educational background to others
              </li>
            </ul>
          )
        },
        {
          navLink: "/Africa/IvoryCoast/teachingStyle",
          title: "Teaching Style",
          tileId: 4,
          content: () => (
            <div>
              <p>
                Class sizes tend to be around 30-40 in high school, but it
                depends upon the particular subject path students have taken.
                From the ages of 16-18 classes are laid out in rows and students
                are in pairs. Each lesson students tend to sit at the same desk
                throughout the year.
              </p>
              <p>
                At the end of high school students undertake a large exam (the
                'baccalaureate') which lasts 3-5 days.
              </p>
              <p>
                In terms of resources, schools in the Ivory Coast tend to have a
                computer room and a library. Computers are used for certain
                projects, but not everyday. Largely pens and paper are used. But
                again, this depends upon the school. For less prestigious
                schools there may not be any computers. One student reported
                needing to use a computer in a cafe and payment being required.
              </p>
              <p>
                The main learning resource used is textbooks; usually one for
                each subject. Extra materials are available which can be bought.
                Students would generally get higher marks from making use of the
                additional resources.
              </p>
              <p>
                In prestigious schools the assessments are more difficult than
                other schools. If there are not enough teachers the amount of
                assessments will vary. In prestigious schools teachers also tend
                to be more experienced and knowledgable. When teachers start in
                their career they go to normal schools but they can be promoted
                to more prestigious schools where they can earn higher salaries.
              </p>
              <p>
                Teachers are addressed formally as ‘Sir’ or ‘Madam’ and do not
                tend to know students' names unless they are particularly good
                or bad students. Teachers are generally seen as an authority in
                class.
              </p>
              <p>
                Lectures are the main form of teaching. The participants also
                reported in-class exercises and sometimes group work. There is
                no self-study, and students are given what they need to learn
                and do so either at home or in the class. They don't tend to do
                any additional research outside of this provided information.
                The tests are on what has been taught in class.
              </p>
              <p>
                Students sometimes question the teacher in some subjects - eg.
                philosophy. But in others they remember facts - geography,
                history etc.
              </p>
              <p>
                The teacher does not use PowerPoint. They write on a board for
                some subjects, and otherwise just talk and students copy what
                they say.
              </p>
              <p>
                French is the national language in the Ivory Coast but students
                learn English from different ages. The participants reported
                learning English from the age of around 11. At home with their
                family they tend to speak a variety of local languages,
                depending upon where they are from. There are over 60 languages
                in across country.
              </p>
              <blockquote>
                <p>
                  "In Ivory Coast [at high school] the teacher gives you
                  everything and you have to memorise it."
                </p>
                <footer> (Ivory Coast undergraduate student)</footer>
              </blockquote>
              <blockquote>
                <p>
                  "When I came here it was kind of difficult for me, because I
                  am not used to reading...And it's English, the books are in
                  English, so I have to translate what's going on in French
                  first to understand what's going on...It's still hard. I'm
                  used to it, but I always struggle."
                </p>
                <footer>(Ivory Coast undergraduate student)</footer>
              </blockquote>
            </div>
          )
        },
        {
          navLink: "/Africa/IvoryCoast/assignments",
          title: "Assignments",
          tileId: 5,
          content: () => (
            <div>
              <p>
                The most common forms of assignment reported were in-class tests
                (including short answers) and occasionally essays for some
                subjects. Unlike students from many other countries, Ivory Coast
                students are taught to structure an essay in a similar way to UK
                students and are also taught to develop an argument in the
                essay. Consequently, the participants reported no problems with
                essays. The Foundation Year also helped them to develop their
                essay writing skills. The only difficulty reported was writing
                in English.
              </p>
              <p>
                Ivory Coast students are also familiar with giving group
                presentations and being marked on their presentations skills.
                However, they may not be familiar with using PowerPoint, and so
                additional guidance can be helpful in these circumstances.
              </p>
              <p>
                The participants noted that they are not familiar with producing
                factual posters.
              </p>
            </div>
          )
        },
        {
          navLink: "/Africa/IvoryCoast/plagiarism",
          title: "Plagiarism",
          tileId: 6,
          content: () => (
            <p>
              Ivory Coast students reported that they are taught to reference
              pictures at school, and some are taught that they are not supposed
              to use Wikipedia. They do not learn about plagiarism specifically
              until pre-sessional courses and the foundation year. Nevertheless,
              whilst students are aware of plagiarism, the participants reported
              sometimes knowingly plagiarising to speed up and finish their
              work.
            </p>
          )
        },
        {
          navLink: "/Africa/IvoryCoast/digitalTechnology",
          title: "Digital Technology",
          tileId: 7,
          content: () => (
            <div>
              <p>
                Participants reported there being a computer room in school, but
                that it was only used occasionally for Facebook and not
                education purposes. It was a kind of cafe which they would have
                to pay to use it - but it was not expensive. Some have computers
                at home in Ivory Coast and others do not. They tend not to have
                iPads. Nevertheless,they are familiar with using computers and
                did not report any problems with using computers when they
                arrive in the UK. But the internet in Ivory Coast can be slow
                and unreliable.
              </p>
              <p>
                Now most people in Ivory Coast have a smart phone and many own
                PCs. The main social media sites in Ivory Coast are Facebook and
                WhatsApp, but they don't tend to use these for sharing
                information or learning.
              </p>
              <p>
                Students are asked to make videos in the Foundation Year and so
                some will have experience in video making.
              </p>
              <p>
                Some will learn to use PowerPoint in school, and it is also
                taught in some pre-sessional courses.
              </p>
            </div>
          )
        },
        {
          navLink: "/Africa/IvoryCoast/regionalVariations",
          title: "Regional Variations",
          tileId: 8,
          content: () => (
            <div>
              <p>
                Urban schools tend to be better resourced and there are not
                enough teachers in rural areas. Teachers tend to move to the
                cities. Due to the greater urbanisation being in the south of
                the country there is a north-south divide in terms of school
                quality.
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

export default IvoryCoast;
