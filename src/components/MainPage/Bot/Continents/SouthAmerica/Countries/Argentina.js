import React from "react";
import CountryProfile from "../../CountryProfile.js";

class Argentina extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: this.constructor.name,
      continent: "SouthAmerica",
      data: [
        {
          navLink: "/SouthAmerica/Argentina/keyFacts",
          title: "Key Facts",
          tileId: 1,
          content: () => (
            <div>
              <p>
                Argentina (Spanish: [aɾxenˈtina]), officially the Argentine
                Republic[A] (Spanish: República Argentina), is a country located
                mostly in the southern half of South America. Sharing the bulk
                of the Southern Cone with Chile to the west, the country is also
                bordered by Bolivia and Paraguay to the north, Brazil to the
                northeast, Uruguay and the South Atlantic Ocean to the east, and
                the Drake Passage to the south. With a mainland area of
                2,780,400 km2 (1,073,500 sq mi),[B] Argentina is the
                eighth-largest country in the world, the fourth largest in the
                Americas, and the largest Spanish-speaking nation. The sovereign
                state is subdivided into twenty-three provinces (Spanish:
                provincias, singular provincia) and one autonomous city (ciudad
                autónoma), Buenos Aires, which is the federal capital of the
                nation (Spanish: Capital Federal) as decided by Congress.[18]
                The provinces and the capital have their own constitutions, but
                exist under a federal system. Argentina claims sovereignty over
                part of Antarctica, the Falkland Islands (Spanish: Islas
                Malvinas), and South Georgia and the South Sandwich Islands.
              </p>
              <p>
                The earliest recorded human presence in modern-day Argentina
                dates back to the Paleolithic period.[19] The Inca Empire
                expanded to the northwest of the country in Pre-Columbian times.
                The country has its roots in Spanish colonization of the region
                during the 16th century.[20] Argentina rose as the successor
                state of the Viceroyalty of the Río de la Plata,[21] a Spanish
                overseas viceroyalty founded in 1776. The declaration and fight
                for independence (1810–1818) was followed by an extended civil
                war that lasted until 1861, culminating in the country's
                reorganization as a federation of provinces with Buenos Aires as
                its capital city. The country thereafter enjoyed relative peace
                and stability, with several waves of European immigration,
                mainly Italians and Spaniards, radically reshaping its cultural
                and demographic outlook; 62.5% of the population has full or
                partial Italian ancestry,[10][22] and the Argentine culture has
                significant connections to the Italian culture.[23] The
                almost-unparalleled increase in prosperity led to Argentina
                becoming the seventh wealthiest nation in the world by the early
                20th century.
              </p>
              <p>
                Following the Great Depression in the 1930s, Argentina descended
                into political instability and economic decline that pushed it
                back into underdevelopment,[26] though it remained among the
                fifteen richest countries for several decades.[24] Following the
                death of President Juan Perón in 1974, his widow, Isabel
                Martínez de Perón, ascended to the presidency. She was
                overthrown in 1976 by a U.S.-backed coup which installed a
                right-wing military dictatorship. The military government
                persecuted and murdered numerous political critics, activists,
                and leftists in the Dirty War, a period of state terrorism that
                lasted until the election of Raúl Alfonsín as President in 1983.
                Several of the junta's leaders were later convicted of their
                crimes and sentenced to imprisonment.
              </p>
              <p>
                Argentina is a prominent regional power in the Southern Cone and
                Latin America, and retains its historic status as a middle power
                in international affairs.[27][28][29] Argentina has the second
                largest economy in South America, the third-largest in Latin
                America, and membership in the G-15 and G-20 major economies. It
                is also a founding member of the United Nations, World Bank,
                World Trade Organization, Mercosur, Union of South American
                Nations, Community of Latin American and Caribbean States and
                the Organization of Ibero-American States. Despite its history
                of economic instability, it ranks second highest in the Human
                Development Index in Latin America and it is classified as a
                World Bank middle income economy by the World Bank.
              </p>
            </div>
          )
        },
        {
          navLink: "/SouthAmerica/Argentina/overview",
          title: "Overview",
          tileId: 2,
          content: () => <div>Overview</div>
        },
        {
          navLink: "/SouthAmerica/Argentina/tips",
          title: "Tips",
          tileId: 3,
          content: () => <div>Tips</div>
        },
        {
          navLink: "/SouthAmerica/Argentina/teachingStyle",
          title: "Teaching Style",
          tileId: 4,
          content: () => <div>Teaching Style</div>
        },
        {
          navLink: "/SouthAmerica/Argentina/assignments",
          title: "Assignments",
          tileId: 5,
          content: () => <div>Assignments</div>
        },
        {
          navLink: "/SouthAmerica/Argentina/plagiarism",
          title: "Plagiarism",
          tileId: 6,
          content: () => <div>Plagiarism</div>
        },
        {
          navLink: "/SouthAmerica/Argentina/digitalTechnology",
          title: "Digital Technology",
          tileId: 7,
          content: () => <div>Digital Technology</div>
        },
        {
          navLink: "/SouthAmerica/Argentina/regionalVariations",
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

export default Argentina;
