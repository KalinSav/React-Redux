import React from "react";
import CountryProfile from "../../CountryProfile.js";

class Brazil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: this.constructor.name,
      continent: "SouthAmerica",
      data: [
        {
          navLink: "/SouthAmerica/Brazil/keyFacts",
          title: "Key Facts",
          tileId: 1,
          content: () => (
            <div>
              <p>
                Brazil (Portuguese: Brasil; Portuguese pronunciation:
                [bɾaˈziw]),[nt 1] officially the Federative Republic of Brazil
                (Portuguese: República Federativa do Brasil, About this
                soundlisten (help·info)),[9] is the largest country in both
                South America and Latin America. At 8.5 million square
                kilometers (3.2 million square miles)[10] and with over 208
                million people, Brazil is the world's fifth-largest country by
                area and the fifth most populous. Its capital is Brasília, and
                its most populated city is São Paulo. The federation is composed
                of the union of the 26 states, the Federal District, and the
                5,570 municipalities. It is the largest country to have
                Portuguese as an official language and the only one in the
                Americas;[11][12] it is also one of the most multicultural and
                ethnically diverse nations, due to over a century of mass
                immigration from around the world.
              </p>
              <p>
                Bounded by the Atlantic Ocean on the east, Brazil has a
                coastline of 7,491 kilometers (4,655 mi).[14] It borders all
                other South American countries except Ecuador and Chile and
                covers 47.3% of the continent's land area.[15] Its Amazon River
                basin includes a vast tropical forest, home to diverse wildlife,
                a variety of ecological systems, and extensive natural resources
                spanning numerous protected habitats.[14] This unique
                environmental heritage makes Brazil one of 17 megadiverse
                countries, and is the subject of significant global interest and
                debate regarding deforestation and environmental protection.
              </p>

              <p>
                Brazil was inhabited by numerous tribal nations prior to the
                landing in 1500 of explorer Pedro Álvares Cabral, who claimed
                the area for the Portuguese Empire. Brazil remained a Portuguese
                colony until 1808, when the capital of the empire was
                transferred from Lisbon to Rio de Janeiro. In 1815, the colony
                was elevated to the rank of kingdom upon the formation of the
                United Kingdom of Portugal, Brazil and the Algarves.
                Independence was achieved in 1822 with the creation of the
                Empire of Brazil, a unitary state governed under a
                constitutional monarchy and a parliamentary system. The
                ratification of the first constitution in 1824 led to the
                formation of a bicameral legislature, now called the National
                Congress. The country became a presidential republic in 1889
                following a military coup d'état. An authoritarian military
                junta came to power in 1964 and ruled until 1985, after which
                civilian governance resumed. Brazil's current constitution,
                formulated in 1988, defines it as a democratic federal
                republic.[16] Due to its rich culture and history, the country
                ranks thirteenth in the world by number of UNESCO World Heritage
                Sites.
              </p>
              <p>
                Brazil is considered an advanced emerging economy.[18] It has
                the ninth largest GDP in the world by nominal, and eight by PPP
                measures.[19][20] It is one of the world's major breadbaskets,
                being the largest producer of coffee for the last 150 years.[21]
                It is classified as an upper-middle income economy by the World
                Bank[22] and a newly industrialized country,[23][24] with the
                largest share of global wealth in Latin America. Brazil is a
                regional power and sometimes considered a great[25][26][27] or a
                middle power in international affairs.[27][28][29][30][31][26]
                On account of its international recognition and influence, the
                country is subsequently classified as an emerging power[32] and
                a potential superpower by several analysts.[33][34][35] Brazil
                is a founding member of the United Nations, the G20, BRICS,
                Union of South American Nations, Mercosul, Organization of
                American States, Organization of Ibero-American States and the
                Community of Portuguese Language Countries.
              </p>
            </div>
          )
        },
        {
          navLink: "/SouthAmerica/Brazil/overview",
          title: "Overview",
          tileId: 2,
          content: () => <div>Overview</div>
        },
        {
          navLink: "/SouthAmerica/Brazil/tips",
          title: "Tips",
          tileId: 3,
          content: () => <div>Tips</div>
        },
        {
          navLink: "/SouthAmerica/Brazil/teachingStyle",
          title: "Teaching Style",
          tileId: 4,
          content: () => <div>Teaching Style</div>
        },
        {
          navLink: "/SouthAmerica/Brazil/assignments",
          title: "Assignments",
          tileId: 5,
          content: () => <div>Assignments</div>
        },
        {
          navLink: "/SouthAmerica/Brazil/plagiarism",
          title: "Plagiarism",
          tileId: 6,
          content: () => <div>Plagiarism</div>
        },
        {
          navLink: "/SouthAmerica/Brazil/digitalTechnology",
          title: "Digital Technology",
          tileId: 7,
          content: () => <div>Digital Technology</div>
        },
        {
          navLink: "/SouthAmerica/Brazil/regionalVariations",
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

export default Brazil;
