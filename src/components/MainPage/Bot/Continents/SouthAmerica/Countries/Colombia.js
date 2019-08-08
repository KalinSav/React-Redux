import React from "react";
import CountryProfile from "../../CountryProfile.js";

class Colombia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: this.constructor.name,
      continent: "SouthAmerica",
      data: [
        {
          navLink: "/SouthAmerica/Colombia/keyFacts",
          title: "Key Facts",
          tileId: 1,
          content: () => (
            <div>
              <p>
                Colombia (/kəˈlʌmbiə/ (About this soundlisten) kə-LUM-bee-ə,
                /-ˈlɒm-/ -⁠LOM-; Spanish: [koˈlombja] (About this soundlisten)),
                officially the Republic of Colombia (Spanish: About this
                soundRepública de Colombia (help·info)),[Note 1] is a sovereign
                state largely situated in the northwest of South America, with
                territories in North America. Colombia shares a border to the
                west with Panama, to the east with Brazil and Venezuela, and to
                the south with Ecuador and Peru.[11] It shares its maritime
                limits with Costa Rica, Nicaragua, Honduras, Jamaica, Haiti, and
                the Dominican Republic.[12] Colombia is a unitary,
                constitutional republic comprising thirty-two departments, with
                the capital in Bogotá.
              </p>
              <p>
                Colombia has been inhabited by various American Indian peoples
                since at least 12,000 BCE, including the Muisca, Quimbaya, and
                the Tairona, along with the Inca Empire that expanded to the
                southwest of the country. The Spanish arrived in 1499 and by the
                mid-16th century annexed part of the region, establishing the
                New Kingdom of Granada, with Santafé de Bogotá as its capital.
                Independence from Spain was achieved in 1819, but by 1830 the
                "Gran Colombia" Federation was dissolved, with what is now
                Colombia and Panama emerging as the Republic of New Granada. The
                new nation experimented with federalism as the Granadine
                Confederation (1858), and then the United States of Colombia
                (1863), before the Republic of Colombia was finally declared in
                1886. Panama seceded in 1903, leading to Colombia's present
                borders. Beginning in the 1960s, the country suffered from an
                asymmetric low-intensity armed conflict and political violence,
                both of which escalated in the 1990s. Since 2005, there has been
                significant improvement in security, stability, and rule of law.
              </p>
              <p>
                Colombia is the most ethnically and linguistically diverse
                country per capita, with its rich cultural heritage reflecting
                influences by various Amerindian peoples, European settlement,
                forced African labor, and immigration from Europe and the
                greater Middle East. Urban centres are concentrated in the
                Andean highlands and the Caribbean coast.
              </p>
              <p>
                Colombia is the most densely biodiverse country per square
                kilometer,[14] and is part of the world's 17 megadiverse
                countries; its territory encompasses Amazon rainforest,
                grasslands, deserts, islands and coastlines along both the
                Caribbean and Pacific.
              </p>
              <p>
                Colombia is a regional power in the Americas.[4] It is part of
                the CIVETS group of leading emerging markets and a member of the
                UN, the WTO, the OAS, the Pacific Alliance, and other
                international organizations.[15] Colombia's diversified economy
                is the fourth largest in Latin America, with macroeconomic
                stability and favorable long-term growth prospects.
              </p>
            </div>
          )
        },
        {
          navLink: "/SouthAmerica/Colombia/overview",
          title: "Overview",
          tileId: 2,
          content: () => <div>Overview</div>
        },
        {
          navLink: "/SouthAmerica/Colombia/tips",
          title: "Tips",
          tileId: 3,
          content: () => <div>Tips</div>
        },
        {
          navLink: "/SouthAmerica/Colombia/teachingStyle",
          title: "Teaching Style",
          tileId: 4,
          content: () => <div>Teaching Style</div>
        },
        {
          navLink: "/SouthAmerica/Colombia/assignments",
          title: "Assignments",
          tileId: 5,
          content: () => <div>Assignments</div>
        },
        {
          navLink: "/SouthAmerica/Colombia/plagiarism",
          title: "Plagiarism",
          tileId: 6,
          content: () => <div>Plagiarism</div>
        },
        {
          navLink: "/SouthAmerica/Colombia/digitalTechnology",
          title: "Digital Technology",
          tileId: 7,
          content: () => <div>Digital Technology</div>
        },
        {
          navLink: "/SouthAmerica/Colombia/regionalVariations",
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

export default Colombia;
