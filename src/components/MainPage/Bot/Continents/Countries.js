import Ghana from "./Africa/Countries/Ghana.js";
import Nigeria from "./Africa/Countries/Nigeria.js";
import IvoryCoast from "./Africa/Countries/IvoryCoast.js";
import Spain from "./Europe/Countries/Spain.js";
import France from "./Europe/Countries/France.js";
import Canada from "./NorthAmerica/Countries/Canada.js";
import USA from "./NorthAmerica/Countries/USA.js";
import China from "./AsiaMiddleEast/Countries/China.js";
import Indonesia from "./AsiaMiddleEast/Countries/Indonesia.js";
import Jordan from "./AsiaMiddleEast/Countries/Jordan.js";
import Argentina from "./SouthAmerica/Countries/Argentina.js";
import Brazil from "./SouthAmerica/Countries/Brazil.js";
import Colombia from "./SouthAmerica/Countries/Colombia.js";
import Venezuela from "./SouthAmerica/Countries/Venezuela.js";
import Australia from "./AustraliaNewZealand/Countries/Australia.js";
import NewZealand from "./AustraliaNewZealand/Countries/NewZealand.js";

const Countries = [
  {
    name: "Ghana",
    component: Ghana,
    continent: "Africa"
  },
  {
    name: "Nigeria",
    component: Nigeria,
    continent: "Africa"
  },
  {
    name: "Ivory Coast",
    component: IvoryCoast,
    continent: "Africa"
  },
  {
    name: "Spain",
    component: Spain,
    continent: "Europe"
  },
  {
    name: "France",
    component: France,
    continent: "Europe"
  },
  {
    name: "Canada",
    component: Canada,
    continent: "NorthAmerica"
  },
  {
    name: "USA",
    component: USA,
    continent: "NorthAmerica"
  },
  {
    name: "China",
    component: China,
    continent: "AsiaMiddleEast"
  },
  {
    name: "Indonesia",
    component: Indonesia,
    continent: "AsiaMiddleEast"
  },
  {
    name: "Jordan",
    component: Jordan,
    continent: "AsiaMiddleEast"
  },
  {
    name: "Argentina",
    component: Argentina,
    continent: "SouthAmerica"
  },
  {
    name: "Brazil",
    component: Brazil,
    continent: "SouthAmerica"
  },
  {
    name: "Colombia",
    component: Colombia,
    continent: "SouthAmerica"
  },
  {
    name: "Venezuela",
    component: Venezuela,
    continent: "SouthAmerica"
  },
  {
    name: "Australia",
    component: Australia,
    continent: "AustraliaNewZealand"
  },
  {
    name: "New Zealand",
    component: NewZealand,
    continent: "AustraliaNewZealand"
  }
];

export default Countries;
