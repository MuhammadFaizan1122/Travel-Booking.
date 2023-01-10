import { atom } from "recoil";

const FlightsDetail = atom({
  key: "FlightsDetail", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});
export default FlightsDetail;
