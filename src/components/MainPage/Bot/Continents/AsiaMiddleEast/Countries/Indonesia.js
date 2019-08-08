import React from "react";
import CountryProfile from "../../CountryProfile.js";

class Indonesia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: this.constructor.name,
      continent: "AsiaMiddleEast",
      data: [
        {
          navLink: "/AsiaMiddleEast/Indonesia/keyFacts",
          title: "Key Facts",
          tileId: 1,
          content: () => (
            <div>
              <p>
                Indonesia (/ˌɪndəˈniːʒə/ (About this soundlisten) IN-də-NEE-zhə,
                /-ˈniːziə/ -⁠NEE-zee-ə; Indonesian: [ɪndoˈnesia]), officially
                the Republic of Indonesia (Indonesian: Republik Indonesia
                [reˈpublik ɪndoˈnesia]),[a] is a country in Southeast Asia,
                between the Indian and Pacific oceans. It is the world's largest
                island country, with more than seventeen thousand islands,[11]
                and at 1,904,569 square kilometres (735,358 square miles), the
                14th largest by land area and the 7th largest in combined sea
                and land area.[12] With over 261 million people, it is the
                world's 4th most populous country as well as the most populous
                Muslim-majority country.[13] Java, the world's most populous
                island,[14] is home to more than half of the country's
                population.
              </p>
              <p>
                The sovereign state is a presidential, constitutional republic
                with an elected legislature. It has 34 provinces, of which five
                have special status. Jakarta, the country's capital, is the
                second-most populous urban area in the world. The country shares
                land borders with Papua New Guinea, East Timor, and the eastern
                part of Malaysia. Other neighbouring countries include
                Singapore, Vietnam, the Philippines, Australia, Palau, and
                India's Andaman and Nicobar Islands. Despite its large
                population and densely populated regions, Indonesia has vast
                areas of wilderness that support a high level of
                biodiversity.[15] The country has abundant natural resources
                like oil and natural gas, tin, copper, and gold, while
                agriculture mainly produces rice, palm oil, tea, coffee, cacao,
                medicinal plants, spices, and rubber.[16] China, the United
                States, Japan, Singapore, and India are Indonesia's major
                trading partners.
              </p>
              <p>
                The history of the Indonesian archipelago has been influenced by
                foreign powers drawn to its natural resources. It has been an
                important region for trade since at least the 7th century when
                Srivijaya and then later Majapahit traded with entities from
                mainland China and the Indian subcontinent. Local rulers
                gradually absorbed foreign influences from the early centuries
                and Hindu and Buddhist kingdoms flourished. Muslim traders and
                Sufi scholars brought Islam,[18][19] while European powers
                brought Christianity and fought one another to monopolise trade
                in the Spice Islands of Maluku during the Age of Discovery.
                Although sometimes interrupted by the Portuguese, French and
                British, the Dutch were the foremost European power for much of
                their 350-year presence in the archipelago. In the early 20th
                century, the concept of "Indonesia" as a nation-state emerged,
                and independence movements began to take shape.[20] During the
                decolonisation of Asia after World War II, Indonesia achieved
                independence in 1949 following an armed and diplomatic conflict
                with the Netherlands.
              </p>
              <p>
                Indonesia consists of hundreds of distinct native ethnic and
                linguistic groups, with the largest—and politically
                dominant—ethnic group being the Javanese. A shared identity has
                developed, defined by a national language, ethnic diversity,
                religious pluralism within a Muslim-majority population, and a
                history of colonialism and rebellion against it. Indonesia's
                national motto, "Bhinneka Tunggal Ika" ("Unity in Diversity"
                literally, "many, yet one"), articulates the diversity that
                shapes the country. Indonesia's economy is the world's 16th
                largest by nominal GDP and the 7th largest by GDP at PPP. The
                country is a member of several multilateral organisations,
                including the UN,[b] WTO, IMF, G20, and a founding member of
                Non-Aligned Movement, Association of Southeast Asian Nations,
                Asia-Pacific Economic Cooperation, East Asia Summit, Asian
                Infrastructure Investment Bank, and Organisation of Islamic
                Cooperation.
              </p>
            </div>
          )
        },
        {
          navLink: "/AsiaMiddleEast/Indonesia/overview",
          title: "Overview",
          tileId: 2,
          content: () => <div>Overview</div>
        },
        {
          navLink: "/AsiaMiddleEast/Indonesia/tips",
          title: "Tips",
          tileId: 3,
          content: () => <div>Tips</div>
        },
        {
          navLink: "/AsiaMiddleEast/Indonesia/teachingStyle",
          title: "Teaching Style",
          tileId: 4,
          content: () => <div>Teaching Style</div>
        },
        {
          navLink: "/AsiaMiddleEast/Indonesia/assignments",
          title: "Assignments",
          tileId: 5,
          content: () => <div>Assignments</div>
        },
        {
          navLink: "/AsiaMiddleEast/Indonesia/plagiarism",
          title: "Plagiarism",
          tileId: 6,
          content: () => <div>Plagiarism</div>
        },
        {
          navLink: "/AsiaMiddleEast/Indonesia/digitalTechnology",
          title: "Digital Technology",
          tileId: 7,
          content: () => <div>Digital Technology</div>
        },
        {
          navLink: "/AsiaMiddleEast/Indonesia/regionalVariations",
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

export default Indonesia;
