import React from "react";
import { ReactComponent as BabyChangingSvg } from "../svgs/baby-changing.svg";

const BabyChangingIcon = ({ size = 24, style }) => (
  <BabyChangingSvg width={size} height={size} style={style} />
);

export default BabyChangingIcon;
