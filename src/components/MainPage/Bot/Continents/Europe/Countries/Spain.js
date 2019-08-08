import React from "react";
import CountryProfile from "../../CountryProfile.js";

class Spain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: this.constructor.name,
      continent: "Europe",
      data: [
        {
          navLink: "/Europe/Spain/keyFacts",
          title: "Key Facts",
          tileId: 1,
          content: () => (
            <div>
              <p>
                Spain (Spanish: España [esʲˈpaɲa] (About this soundlisten)),
                officially the Kingdom of Spain[11] (Spanish: Reino de
                España),[a][b] is a country mostly located in Europe. Its
                continental European territory is situated on the Iberian
                Peninsula. Its territory also includes two archipelagoes: the
                Canary Islands off the coast of Africa, and the Balearic Islands
                in the Mediterranean Sea. The African enclaves of Ceuta,
                Melilla, and Peñón de Vélez de la Gomera[12] make Spain the only
                European country to have a physical border with an African
                country (Morocco).[g] Several small islands in the Alboran Sea
                are also part of Spanish territory. The country's mainland is
                bordered to the south and east by the Mediterranean Sea except
                for a small land boundary with Gibraltar; to the north and
                northeast by France, Andorra, and the Bay of Biscay; and to the
                west and northwest by Portugal and the Atlantic Ocean.
              </p>
              <p>
                With an area of 505,990 km2 (195,360 sq mi), Spain is the
                largest country in Southern Europe, the second largest country
                in Western Europe and the European Union, and the fourth largest
                country in the European continent. By population, Spain is the
                sixth largest in Europe and the fifth in the European Union.
                Spain's capital and largest city is Madrid; other major urban
                areas include Barcelona, Valencia, Seville, Málaga and Bilbao.
              </p>
              <p>
                Modern humans first arrived in the Iberian Peninsula around
                35,000 years ago. Iberian cultures along with ancient
                Phoenician, Greek, Celtic and Carthaginian settlements developed
                on the peninsula until it came under Roman rule around 200 BCE,
                after which the region was named Hispania, based on the earlier
                Phoenician name Sp(a)n or Spania.[13] At the end of the Western
                Roman Empire the Germanic tribal confederations migrated from
                Central Europe, invaded the Iberian peninsula and established
                relatively independent realms in its western provinces,
                including the Suebi, Alans and Vandals. Eventually, the
                Visigoths would forcibly integrate all remaining independent
                territories in the peninsula, including Byzantine provinces,
                into the Kingdom of Toledo, which more or less unified
                politically, ecclesiastically and legally all the former Roman
                provinces or successor kingdoms of what was then documented as
                Hispania.
              </p>
              <p>
                In the early eighth century the Visigothic Kingdom fell to the
                Moors of the Umayyad Islamic Caliphate, who arrived to rule most
                of the peninsula in the year 726, leaving only a handful of
                small Christian realms in the north and lasting up to seven
                centuries in the Kingdom of Granada. This led to many wars
                during a long reconquering period across the Iberian Peninsula,
                which led to the creation of Kingdom of Leon, Kingdom of
                Castille, Kingdom of Aragon and Kingdom of Navarre as the main
                Christian kingdoms to face the invasion. Following the Moorish
                conquest, Europeans began a gradual process of retaking the
                region known as the Reconquista,[14] which by the late 15th
                century culminated in the emergence of Spain as a unified
                country under the Catholic Monarchs.
              </p>
              <p>
                In the early modern period, Spain became the world's first
                global empire and the most powerful country in the world,
                leaving a large cultural and linguistic legacy that includes
                +570 million Hispanophones,[15] making Spanish the world's
                second-most spoken native language, after Mandarin Chinese.
                During the Golden Age there were also many advancements in the
                arts, with world-famous painters such as Diego Velázquez. The
                most famous Spanish literary work, Don Quixote, was also
                published during the Golden Age. Spain hosts the world's
                third-largest number of UNESCO World Heritage Sites.
              </p>
              <p>
                Spain is a secular parliamentary democracy and a parliamentary
                monarchy,[16] with King Felipe VI as head of state. It is a
                major developed country[17] and a high income country, with the
                world's fourteenth largest economy by nominal GDP and sixteenth
                largest by purchasing power parity. It is a member of the United
                Nations (UN), the European Union (EU), the Eurozone, the Council
                of Europe (CoE), the Organization of Ibero-American States
                (OEI), the Union for the Mediterranean, the North Atlantic
                Treaty Organization (NATO), the Organisation for Economic
                Co-operation and Development (OECD), Organization for Security
                and Co-operation in Europe (OSCE), the Schengen Area, the World
                Trade Organization (WTO) and many other international
                organisations. While not an official member, Spain has a
                "Permanent Invitation" to the G20 summits, participating in
                every summit, which makes Spain a de facto member of the group.
              </p>
            </div>
          )
        },
        {
          navLink: "/Europe/Spain/overview",
          title: "Overview",
          tileId: 2,
          content: () => <div>Overview</div>
        },
        {
          navLink: "/Europe/Spain/tips",
          title: "Tips",
          tileId: 3,
          content: () => <div>Tips</div>
        },
        {
          navLink: "/Europe/Spain/teachingStyle",
          title: "Teaching Style",
          tileId: 4,
          content: () => <div>Teaching Style</div>
        },
        {
          navLink: "/Europe/Spain/assignments",
          title: "Assignments",
          tileId: 5,
          content: () => <div>Assignments</div>
        },
        {
          navLink: "/Europe/Spain/plagiarism",
          title: "Plagiarism",
          tileId: 6,
          content: () => <div>Plagiarism</div>
        },
        {
          navLink: "/Europe/Spain/digitalTechnology",
          title: "Digital Technology",
          tileId: 7,
          content: () => <div>Digital Technology</div>
        },
        {
          navLink: "/Europe/Spain/regionalVariations",
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

export default Spain;
