import React from "react";
import { ReactComponent as DogFriendlySvg } from "../svgs/dog-friendly.svg";

const DogFriendlyIcon = ({ size = 24, style }) => (
  <DogFriendlySvg width={size} height={size} style={style} />
);

export default DogFriendlyIcon;
