import React from "react";
import CountryProfile from "../../CountryProfile.js";

class Venezuela extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: this.constructor.name,
      data: [
        {
          navLink: "/SouthAmerica/Venezuela/keyFacts",
          title: "Key Facts",
          tileId: 1,
          content: () => (
            <div>
              <p>
                Venezuela (/ˌvɛnəˈzweɪlə/ (About this soundlisten); American
                Spanish: [beneˈswela] (About this soundlisten)), officially the
                Bolivarian Republic of Venezuela (Spanish: República Bolivariana
                de Venezuela),[8] is a country on the northern coast of South
                America, consisting of a continental landmass and a large number
                of small islands and islets in the Caribbean Sea. The capital
                and largest urban agglomeration is the city of Caracas. It has a
                territorial extension of 916,445 km2 (353,841 sq mi). The
                continental territory is bordered on the north by the Caribbean
                Sea and the Atlantic Ocean, on the west by Colombia, Brazil on
                the south, Trinidad and Tobago to the north-east and on the east
                by Guyana. The Venezuelan government maintains a claim against
                Guyana to Guayana Esequiba, an area of 159,542 km2 (61,600 sq
                mi). For its maritime areas, Venezuela exercises sovereignty
                over 71,295 km2 (27,527 sq mi) of territorial waters, 22,224 km2
                (8,581 sq mi) in its contiguous zone, 471,507 km2 (182,050 sq
                mi) of the Caribbean Sea and the Atlantic Ocean under the
                concept of exclusive economic zone, and 99,889 km2 (38,567 sq
                mi) of continental shelf. This marine area borders those of 13
                states. The country has extremely high biodiversity and is
                ranked seventh in the world's list of nations with the most
                number of species.[9] There are habitats ranging from the Andes
                Mountains in the west to the Amazon basin rain-forest in the
                south via extensive llanos plains, the Caribbean coast and the
                Orinoco River Delta in the east.
              </p>
              <p>
                The sovereign state is a federal presidential republic
                consisting of 23 states, the Capital District (covering
                Caracas), and federal dependencies (covering Venezuela's
                offshore islands). Venezuela also claims all Guyanese territory
                west of the Essequibo River, a 159,500-square-kilometre (61,583
                sq mi) tract dubbed Guayana Esequiba or the Zona en Reclamación
                (the "zone under dispute").[10] Venezuela is among the most
                urbanized countries in Latin America;[11][12] the vast majority
                of Venezuelans live in the cities of the north, especially in
                the capital (Caracas) which is also the largest city in
                Venezuela.
              </p>
              <p>
                The territory now known as Venezuela was colonized by Spain in
                1522 amid resistance from indigenous peoples. In 1811, it became
                one of the first Spanish-American territories to declare
                independence, which was not securely established until 1821,
                when Venezuela was a department of the federal republic of Gran
                Colombia. It gained full independence as a country in 1830.
                During the 19th century, Venezuela suffered political turmoil
                and autocracy, remaining dominated by regional caudillos
                (military strongmen) until the mid-20th century. Since 1958, the
                country has had a series of democratic governments. Economic
                shocks in the 1980s and 1990s led to several political crises,
                including the deadly Caracazo riots of 1989, two attempted coups
                in 1992, and the impeachment of President Carlos Andrés Pérez
                for embezzlement of public funds in 1993. A collapse in
                confidence in the existing parties saw the 1998 election of
                former coup-involved career officer Hugo Chávez and the launch
                of the Bolivarian Revolution. The revolution began with a 1999
                Constituent Assembly, where a new Constitution of Venezuela was
                written. This new constitution officially changed the name of
                the country to Bolivarian Republic of Venezuela (Spanish:
                República Bolivariana de Venezuela).
              </p>
              <p>
                Oil was discovered in the early 20th century, and today,
                Venezuela has the world's largest known oil reserves and has
                been one of the world's leading exporters of oil. Previously,
                the country was an underdeveloped exporter of agricultural
                commodities such as coffee and cocoa, but oil quickly came to
                dominate exports and government revenues. The 1980s oil glut led
                to an external debt crisis and a long-running economic crisis.
                Inflation peaked at 100% in 1996 and poverty rates rose to 66%
                in 1995[13] as (by 1998) per capita GDP fell to the same level
                as 1963, down a third from its 1978 peak.[14] The recovery of
                oil prices in the early 2000s gave Venezuela oil funds not seen
                since the 1980s.[15] The Venezuelan government under Hugo Chávez
                then established populist social welfare policies that initially
                boosted the Venezuelan economy and increased social spending,
                temporarily[16] reducing economic inequality and poverty in the
                early years of the regime.[20] In 2013, Hugo Chávez died,
                shortly after being elected to a fourth term, and was succeeded
                by Nicolás Maduro, elected by a narrow majority in a widely
                disputed election. Maduro continued the populist policies of
                Chávez, but with disasterous results. [21] The nation's economy
                collapsed because of their excesses—including a uniquely extreme
                fossil fuel subsidy[22]—and are widely blamed for destabilizing
                the nation's economy. The destabilized economy led to a crisis
                in Venezuela, resulting in hyperinflation, an economic
                depression,[23] shortages of basic goods[24] and drastic
                increases in unemployment,[25] poverty,[26] disease, child
                mortality, malnutrition and crime. These factors have
                precipitated the Venezuelan migrant crisis where more than three
                million people have fled the country.[27] By 2017, Venezuela was
                declared to be in default regarding debt payments by credit
                rating agencies.[28][29] In 2018, the country's economic
                policies led to extreme hyperinflation, with estimates expecting
                an inflation rate of 1,370,000% by the end of the year and
                10,000,000% in 2019[30][31] Venezuela is a charter member of the
                UN, OAS, UNASUR, ALBA, Mercosur, LAIA and OEI.
              </p>
            </div>
          )
        },
        {
          navLink: "/SouthAmerica/Venezuela/overview",
          title: "Overview",
          tileId: 2,
          content: () => <div>Overview</div>
        },
        {
          navLink: "/SouthAmerica/Venezuela/tips",
          title: "Tips",
          tileId: 3,
          content: () => <div>Tips</div>
        },
        {
          navLink: "/SouthAmerica/Venezuela/teachingStyle",
          title: "Teaching Style",
          tileId: 4,
          content: () => <div>Teaching Style</div>
        },
        {
          navLink: "/SouthAmerica/Venezuela/assignments",
          title: "Assignments",
          tileId: 5,
          content: () => <div>Assignments</div>
        },
        {
          navLink: "/SouthAmerica/Venezuela/plagiarism",
          title: "Plagiarism",
          tileId: 6,
          content: () => <div>Plagiarism</div>
        },
        {
          navLink: "/SouthAmerica/Venezuela/digitalTechnology",
          title: "Digital Technology",
          tileId: 7,
          content: () => <div>Digital Technology</div>
        },
        {
          navLink: "/SouthAmerica/Venezuela/regionalVariations",
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

export default Venezuela;
