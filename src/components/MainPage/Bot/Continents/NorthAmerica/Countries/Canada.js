import React from "react";
import CountryProfile from "../../CountryProfile.js";

class Canada extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: this.constructor.name,
      continent: "NorthAmerica",
      data: [
        {
          navLink: "/NorthAmerica/Canada/keyFacts",
          title: "Key Facts",
          tileId: 1,
          content: () => (
            <div>
              <p>
                Canada (Canadian French: [kanadɑ] About this soundlisten
                (help·info)) is a country in the northern part of North America.
                Its ten provinces and three territories extend from the Atlantic
                to the Pacific and northward into the Arctic Ocean, covering
                9.98 million square kilometres (3.85 million square miles),
                making it the world's second-largest country by total area. Its
                southern border with the United States, stretching some 8,891
                kilometres (5,525 mi), is the world's longest bi-national land
                border. Canada's capital is Ottawa, and its three largest
                metropolitan areas are Toronto, Montreal, and Vancouver.
              </p>
              <p>
                As a whole, Canada is sparsely populated, the majority of its
                land area being dominated by forest and tundra. Its population
                is highly urbanized, with over 80 percent of its inhabitants
                concentrated in large and medium-sized cities, and 70 percent of
                citizens residing within 100 kilometres (62 mi) of the southern
                border. Canada's climate varies widely across its vast area,
                ranging from arctic weather in the north, to hot summers in the
                southern regions, with four distinct seasons.
              </p>
              <p>
                Various indigenous peoples have inhabited what is now Canada for
                thousands of years before European colonization. Beginning in
                the 16th century, British and French expeditions explored and
                later settled along the Atlantic coast. As a consequence of
                various armed conflicts, France ceded nearly all of its colonies
                in North America in 1763. In 1867, with the union of three
                British North American colonies through Confederation, Canada
                was formed as a federal dominion of four provinces. This began
                an accretion of provinces and territories and a process of
                increasing autonomy from the United Kingdom. This widening
                autonomy was highlighted by the Statute of Westminster of 1931
                and culminated in the Canada Act of 1982, which severed the
                vestiges of legal dependence on the British parliament.
              </p>
              <p>
                Canada is a parliamentary democracy and a constitutional
                monarchy in the Westminster tradition, with Elizabeth II as its
                queen and a prime minister who serves as the chair of the
                Cabinet and head of government. The country is a realm within
                the Commonwealth of Nations, a member of the Francophonie and
                officially bilingual at the federal level. It ranks among the
                highest in international measurements of government
                transparency, civil liberties, quality of life, economic
                freedom, and education. It is one of the world's most ethnically
                diverse and multicultural nations, the product of large-scale
                immigration from many other countries. Canada's long and complex
                relationship with the United States has had a significant impact
                on its economy and culture.
              </p>
              <p>
                A developed country, Canada has the sixteenth-highest nominal
                per capita income globally as well as the twelfth-highest
                ranking in the Human Development Index. Its advanced economy is
                the tenth-largest in the world, relying chiefly upon its
                abundant natural resources and well-developed international
                trade networks. Canada is part of several major international
                and intergovernmental institutions or groupings including the
                United Nations, the North Atlantic Treaty Organization, the G7
                (formerly G8), the Group of Ten, the G20, the North American
                Free Trade Agreement and the Asia-Pacific Economic Cooperation
                forum.
              </p>
            </div>
          )
        },
        {
          navLink: "/NorthAmerica/Canada/overview",
          title: "Overview",
          tileId: 2,
          content: () => <div>Overview</div>
        },
        {
          navLink: "/NorthAmerica/Canada/tips",
          title: "Tips",
          tileId: 3,
          content: () => <div>Tips</div>
        },
        {
          navLink: "/NorthAmerica/Canada/teachingStyle",
          title: "Teaching Style",
          tileId: 4,
          content: () => <div>Teaching Style</div>
        },
        {
          navLink: "/NorthAmerica/Canada/assignments",
          title: "Assignments",
          tileId: 5,
          content: () => <div>Assignments</div>
        },
        {
          navLink: "/NorthAmerica/Canada/plagiarism",
          title: "Plagiarism",
          tileId: 6,
          content: () => <div>Plagiarism</div>
        },
        {
          navLink: "/NorthAmerica/Canada/digitalTechnology",
          title: "Digital Technology",
          tileId: 7,
          content: () => <div>Digital Technology</div>
        },
        {
          navLink: "/NorthAmerica/Canada/regionalVariations",
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

export default Canada;
