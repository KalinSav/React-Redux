import Ghana from "./Africa/Countries/Ghana.js";
import Nigeria from "./Africa/Countries/Nigeria.js";
import IvoryCoast from "./Africa/Countries/IvoryCoast.js";
import Spain from "./Europe/Countries/Spain.js";
import France from "./Europe/Countries/France.js";

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
  }
];

export default Countries;
