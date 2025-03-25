import React from "react";
import { ReactComponent as DirectionsIcon } from "../svgs/directions.svg";

const DirectionsIcon = ({ size = 24, style }) => (
  <DirectionsSvg width={size} height={size} style={style} />
);

export default DirectionsIcon;
