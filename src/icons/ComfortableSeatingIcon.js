import React from "react";
import { ReactComponent as ComfortableSeatingIcon } from "../svgs/comfortable-seating.svg";

const ComfortableSeatingIcon = ({ size = 24, style }) => (
  <ComfortableSeatingSvg width={size} height={size} style={style} />
);

export default ComfortableSeatingIcon;
