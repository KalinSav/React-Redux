import React from "react";
import CountryProfile from "../../CountryProfile.js";

class Australia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: this.constructor.name,
      continent: "AustraliaNewZealand",
      data: [
        {
          navLink: "/AustraliaNewZealand/Australia/keyFacts",
          title: "Key Facts",
          tileId: 1,
          content: () => (
            <div>
              <p>
                Australia, officially the Commonwealth of Australia,[12] is a
                sovereign country comprising the mainland of the Australian
                continent, the island of Tasmania, and numerous smaller islands.
                It is the largest country in Oceania and the world's
                sixth-largest country by total area. The neighbouring countries
                are Papua New Guinea, Indonesia, and East Timor to the north;
                the Solomon Islands and Vanuatu to the north-east; and New
                Zealand to the south-east. The population of 25 million[6] is
                highly urbanised and heavily concentrated on the eastern
                seaboard.[13] Australia's capital is Canberra, and its largest
                city is Sydney. The country's other major metropolitan areas are
                Melbourne, Brisbane, Perth, and Adelaide.
              </p>

              <p>
                Indigenous Australians inhabited the continent for about 65,000
                years prior to European discovery[14] with the arrival of Dutch
                explorers in the early 17th century, who named it New Holland.
                In 1770, Australia's eastern half was claimed by Great Britain
                and initially settled through penal transportation to the colony
                of New South Wales from 26 January 1788, a date which became
                Australia's national day. The population grew steadily in
                subsequent decades, and by the time of an 1850s gold rush, most
                of the continent had been explored and an additional five
                self-governing crown colonies established. On 1 January 1901,
                the six colonies federated, forming the Commonwealth of
                Australia. Australia has since maintained a stable liberal
                democratic political system that functions as a federal
                parliamentary constitutional monarchy, comprising six states and
                ten territories.
              </p>

              <p>
                Being the oldest,[15] flattest[16] and driest inhabited
                continent,[17][18] with the least fertile soils,[19][20]
                Australia has a landmass of 7,617,930 square kilometres
                (2,941,300 sq mi).[21] A megadiverse country, its size gives it
                a wide variety of landscapes, with deserts in the centre,
                tropical rainforests in the north-east and mountain ranges in
                the south-east. Its population density, 2.8 inhabitants per
                square kilometre, remains among the lowest in the world.[22]
                Australia generates its income from various sources including
                mining-related exports, telecommunications, banking, and
                manufacturing.[23][24][25]
              </p>

              <p>
                Australia is a highly developed country, with the world's
                14th-largest economy. It has a high-income economy, with the
                world's tenth-highest per capita income.[26] It is a regional
                power and has the world's 13th-highest military expenditure.[27]
                Australia has the world's eighth-largest immigrant population,
                with immigrants accounting for 29% of the population.[28][29]
                Having the third-highest human development index and the
                eighth-highest ranked democracy globally, the country ranks
                highly in quality of life, health, education, economic freedom,
                civil liberties and political rights,[30] with all its major
                cities faring well in global comparative livability surveys.[31]
                Australia is a member of the United Nations, G20, Commonwealth
                of Nations, ANZUS, Organisation for Economic Co-operation and
                Development (OECD), World Trade Organization, Asia-Pacific
                Economic Cooperation, Pacific Islands Forum, and the ASEAN Plus
                Six mechanism.
              </p>
            </div>
          )
        },
        {
          navLink: "/AustraliaNewZealand/Australia/overview",
          title: "Overview",
          tileId: 2,
          content: () => <div>Overview</div>
        },
        {
          navLink: "/AustraliaNewZealand/Australia/tips",
          title: "Tips",
          tileId: 3,
          content: () => <div>Tips</div>
        },
        {
          navLink: "/AustraliaNewZealand/Australia/teachingStyle",
          title: "Teaching Style",
          tileId: 4,
          content: () => <div>Teaching Style</div>
        },
        {
          navLink: "/AustraliaNewZealand/Australia/assignments",
          title: "Assignments",
          tileId: 5,
          content: () => <div>Assignments</div>
        },
        {
          navLink: "/AustraliaNewZealand/Australia/plagiarism",
          title: "Plagiarism",
          tileId: 6,
          content: () => <div>Plagiarism</div>
        },
        {
          navLink: "/AustraliaNewZealand/Australia/digitalTechnology",
          title: "Digital Technology",
          tileId: 7,
          content: () => <div>Digital Technology</div>
        },
        {
          navLink: "/AustraliaNewZealand/Australia/regionalVariations",
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

export default Australia;
