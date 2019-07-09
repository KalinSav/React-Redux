import Ghana from "./Africa/Countries/Ghana.js";
import Nigeria from "./Africa/Countries/Nigeria.js";
import IvoryCoast from "./Africa/Countries/IvoryCoast.js";
import Spain from "./Europe/Countries/Spain.js";
import France from "./Europe/Countries/France.js";

const Countries = [
  {
    name: "Ghana",
    component: Ghana,
    id: 1,
    route: "Africa/Ghana"
  },
  {
    name: "Nigeria",
    component: Nigeria,
    id: 2,
    route: "Africa/Nigeria"
  },
  {
    name: "Ivory Coast",
    component: IvoryCoast,
    id: 3,
    route: "Africa/IvoryCoast"
  },
  {
    name: "Spain",
    component: Spain,
    id: 4,
    route: "Europe/Spain"
  },
  {
    name: "France",
    component: France,
    id: 5,
    route: "Europe/France"
  }
];

export default Countries;
