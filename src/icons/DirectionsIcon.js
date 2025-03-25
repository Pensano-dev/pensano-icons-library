import React from "react";
import { ReactComponent as DirectionsSvg } from "../svgs/directions.svg";

const DirectionsIcon = ({ size = 24, style }) => (
  <DirectionsSvg width={size} height={size} style={style} />
);

export default DirectionsIcon;
