import React from "react";
import IconArrow from "./icons/IconArrow";
import IconArrowDown from "./icons/IconArrowDown";
import IconBookmark from "./icons/IconBookmark";
import IconCart from "./icons/IconCart";
import IconCheckbox from "./icons/IconCheckbox";
import IconLogo from "./icons/IconLogo";
import IconSearch from "./icons/IconSearch";

interface IIconProps extends React.SVGProps<SVGSVGElement> {
  name:
    | "iconLogo"
    | "iconArrowDown"
    | "iconBookmark"
    | "iconCart"
    | "iconSearch"
    | "iconArrow"
    | "iconCheckbox";
  className?: string;
}

export const Icon: React.FC<IIconProps> = ({ name, className }) => {
  const icons = {
    iconLogo: <IconLogo className={className} />,
    iconArrowDown: <IconArrowDown className={className} />,
    iconBookmark: <IconBookmark className={className} />,
    iconCart: <IconCart className={className} />,
    iconSearch: <IconSearch className={className} />,
    iconArrow: <IconArrow className={className} />,
    iconCheckbox: <IconCheckbox className={className} />,
  };

  return icons[name];
};
