import React from "react";
import IconLogo from "./icons/IconLogo";

interface IIconProps extends React.SVGProps<SVGSVGElement> {
  name: "iconLogo";
  className?: string;
}

export const Icon: React.FC<IIconProps> = ({ name, className }) => {
  const icons = { iconLogo: <IconLogo className={className} /> };

  return icons[name];
};
