import React from "react";
import CountryProfile from "../../CountryProfile.js";

class China extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: this.constructor.name,
      data: [
        {
          navLink: "/AsiaMiddleEast/China/keyFacts",
          title: "Key Facts",
          tileId: 1,
          content: () => (
            <div>
              <p>
                China (Chinese: 中国; pinyin: Zhōngguó; lit. "Middle Kingdom"),
                officially the People's Republic of China (PRC), is a country in
                East Asia and the world's most populous country, with a
                population of around 1.404 billion.[10] Covering approximately
                9,600,000 square kilometers (3,700,000 sq mi), it is the third-
                or fourth-largest country by total area.[k][16] Governed by the
                Communist Party of China, the state exercises jurisdiction over
                22 provinces, five autonomous regions, four direct-controlled
                municipalities (Beijing, Tianjin, Shanghai, and Chongqing), and
                the special administrative regions of Hong Kong and Macau.
              </p>
              <p>
                China emerged as one of the world's earliest civilizations, in
                the fertile basin of the Yellow River in the North China Plain.
                For millennia, China's political system was based on hereditary
                monarchies, or dynasties, beginning with the semi-legendary Xia
                dynasty in 21st century BCE.[17] Since then, China has expanded,
                fractured, and re-unified numerous times. In the 3rd century
                BCE, the Qin reunited core China and established the first
                Chinese empire. The succeeding Han dynasty, which ruled from 206
                BC until 220 AD, saw some of the most advanced technology at
                that time, including papermaking and the compass,[18] along with
                agricultural and medical improvements. The invention of
                gunpowder and movable type in the Tang dynasty (618–907) and
                Northern Song (960–1127) completed the Four Great Inventions.
                Tang culture spread widely in Asia, as the new Silk Route
                brought traders to as far as Mesopotamia and the Horn of
                Africa.[19] Dynastic rule ended in 1912 with the Xinhai
                Revolution, when the republic replaced the Qing dynasty. China
                as a whole was ravaged by Japan during World War II, and the
                subsequent Chinese Civil War resulted in a division of territory
                in 1949, when the Communist Party of China established the
                People's Republic of China, a unitary one-party sovereign state
                on the majority of China, while the Kuomintang-led nationalist
                government retreated to the island of Taiwan. The political
                status of Taiwan remains disputed.
              </p>
              <p>
                Since the introduction of economic reforms in 1978, China's
                economy has been one of the world's fastest-growing with annual
                growth rates consistently above 6 percent.[20] According to the
                World Bank, China's GDP grew from $150 billion in 1978 to $12.24
                trillion by 2017.[21] According to official data, China's GDP in
                2018 was 90 trillion Yuan ($13.28 trillion).[22] Since 2010,
                China has been the world's second-largest economy by nominal
                GDP[23] and since 2014, the largest economy in the world by
                purchasing power parity (PPP).[24] China is also the world's
                largest exporter and second-largest importer of goods.[25] China
                is a recognized nuclear weapons state and has the world's
                largest standing army and second-largest defense budget.[26][27]
                The PRC is a permanent member of the United Nations Security
                Council as it replaced the ROC in 1971, as well as an active
                global partner of ASEAN Plus mechanism. China is also a leading
                member of numerous formal and informal multilateral
                organizations, including the Shanghai Cooperation Organization
                (SCO), WTO, APEC, BRICS, the BCIM, and the G20. China has been
                characterized as a potential superpower, mainly because of its
                massive population, economy, and military.
              </p>
            </div>
          )
        },
        {
          navLink: "/AsiaMiddleEast/China/overview",
          title: "Overview",
          tileId: 2,
          content: () => <div>Overview</div>
        },
        {
          navLink: "/AsiaMiddleEast/China/tips",
          title: "Tips",
          tileId: 3,
          content: () => <div>Tips</div>
        },
        {
          navLink: "/AsiaMiddleEast/China/teachingStyle",
          title: "Teaching Style",
          tileId: 4,
          content: () => <div>Teaching Style</div>
        },
        {
          navLink: "/AsiaMiddleEast/China/assignments",
          title: "Assignments",
          tileId: 5,
          content: () => <div>Assignments</div>
        },
        {
          navLink: "/AsiaMiddleEast/China/plagiarism",
          title: "Plagiarism",
          tileId: 6,
          content: () => <div>Plagiarism</div>
        },
        {
          navLink: "/AsiaMiddleEast/China/digitalTechnology",
          title: "Digital Technology",
          tileId: 7,
          content: () => <div>Digital Technology</div>
        },
        {
          navLink: "/AsiaMiddleEast/China/regionalVariations",
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

export default China;
