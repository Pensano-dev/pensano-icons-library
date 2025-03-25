import React from "react";
import { ReactComponent as AuraLogoSvg } from "../svgs/aura-logo.svg";

const AuraLogo = ({ size = 24, style }) => (
  <AuraLogoSvg width={size} height={size} style={style} />
);

export default AuraLogo;
