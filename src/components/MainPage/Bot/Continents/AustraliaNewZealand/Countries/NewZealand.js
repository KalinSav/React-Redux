import React from "react";
import CountryProfile from "../../CountryProfile.js";

class NewZealand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: "New Zealand",
      continent: "AustraliaNewZealand",
      data: [
        {
          navLink: "/AustraliaNewZealand/NewZealand/keyFacts",
          title: "Key Facts",
          tileId: 1,
          content: () => (
            <div>
              <p>
                New Zealand (Māori: Aotearoa [aɔˈtɛaɾɔa]) is a sovereign island
                country in the southwestern Pacific Ocean. The country
                geographically comprises two main landmasses—the North Island
                (Te Ika-a-Māui), and the South Island (Te Waipounamu)—and around
                600 smaller islands. New Zealand is situated some 2,000
                kilometres (1,200 mi) east of Australia across the Tasman Sea
                and roughly 1,000 kilometres (600 mi) south of the Pacific
                island areas of New Caledonia, Fiji, and Tonga. Because of its
                remoteness, it was one of the last lands to be settled by
                humans. During its long period of isolation, New Zealand
                developed a distinct biodiversity of animal, fungal, and plant
                life. The country's varied topography and its sharp mountain
                peaks, such as the Southern Alps, owe much to the tectonic
                uplift of land and volcanic eruptions. New Zealand's capital
                city is Wellington, while its most populous city is Auckland.
              </p>
              <p>
                Sometime between 1250 and 1300, Polynesians settled in the
                islands that later were named New Zealand and developed a
                distinctive Māori culture. In 1642, Dutch explorer Abel Tasman
                became the first European to sight New Zealand. In 1840,
                representatives of the United Kingdom and Māori chiefs signed
                the Treaty of Waitangi, which declared British sovereignty over
                the islands. In 1841, New Zealand became a colony within the
                British Empire and in 1907 it became a dominion; it gained full
                statutory independence in 1947 and the British monarch remained
                the head of state. Today, the majority of New Zealand's
                population of 4.9 million is of European descent; the indigenous
                Māori are the largest minority, followed by Asians and Pacific
                Islanders. Reflecting this, New Zealand's culture is mainly
                derived from Māori and early British settlers, with recent
                broadening arising from increased immigration. The official
                languages are English, Māori, and NZ Sign Language, with English
                being very dominant.
              </p>
              <p>
                A developed country, New Zealand ranks highly in international
                comparisons of national performance, such as quality of life,
                health, education, protection of civil liberties, and economic
                freedom. New Zealand underwent major economic changes during the
                1980s, which transformed it from a protectionist to a
                liberalised free-trade economy. The service sector dominates the
                national economy, followed by the industrial sector, and
                agriculture; international tourism is a significant source of
                revenue. Nationally, legislative authority is vested in an
                elected, unicameral Parliament, while executive political power
                is exercised by the Cabinet, led by the prime minister,
                currently Jacinda Ardern. Queen Elizabeth II is the country's
                monarch and is represented by a governor-general, currently Dame
                Patsy Reddy. In addition, New Zealand is organised into 11
                regional councils and 67 territorial authorities for local
                government purposes. The Realm of New Zealand also includes
                Tokelau (a dependent territory); the Cook Islands and Niue
                (self-governing states in free association with New Zealand);
                and the Ross Dependency, which is New Zealand's territorial
                claim in Antarctica. New Zealand is a member of the United
                Nations, Commonwealth of Nations, ANZUS, Organisation for
                Economic Co-operation and Development, ASEAN Plus Six,
                Asia-Pacific Economic Cooperation, the Pacific Community and the
                Pacific Islands Forum.
              </p>
            </div>
          )
        },
        {
          navLink: "/AustraliaNewZealand/NewZealand/overview",
          title: "Overview",
          tileId: 2,
          content: () => <div>Overview</div>
        },
        {
          navLink: "/AustraliaNewZealand/NewZealand/tips",
          title: "Tips",
          tileId: 3,
          content: () => <div>Tips</div>
        },
        {
          navLink: "/AustraliaNewZealand/NewZealand/teachingStyle",
          title: "Teaching Style",
          tileId: 4,
          content: () => <div>Teaching Style</div>
        },
        {
          navLink: "/AustraliaNewZealand/NewZealand/assignments",
          title: "Assignments",
          tileId: 5,
          content: () => <div>Assignments</div>
        },
        {
          navLink: "/AustraliaNewZealand/NewZealand/plagiarism",
          title: "Plagiarism",
          tileId: 6,
          content: () => <div>Plagiarism</div>
        },
        {
          navLink: "/AustraliaNewZealand/NewZealand/digitalTechnology",
          title: "Digital Technology",
          tileId: 7,
          content: () => <div>Digital Technology</div>
        },
        {
          navLink: "/AustraliaNewZealand/NewZealand/regionalVariations",
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

export default NewZealand;
