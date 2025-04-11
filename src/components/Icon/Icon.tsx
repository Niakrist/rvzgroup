import React from "react";
import IconArrow from "./icons/IconArrow";
import IconArrowDown from "./icons/IconArrowDown";
import IconBookmark from "./icons/IconBookmark";
import IconCart from "./icons/IconCart";
import IconCheckbox from "./icons/IconCheckbox";
import IconLogo from "./icons/IconLogo";
import IconSearch from "./icons/IconSearch";
import IconFilter from "./icons/IconFilter";
import IconMinus from "./icons/IconMinus";
import IconPlus from "./icons/IconPlus";
import { IconCross } from "./icons/iconCross";

interface IIconProps extends React.SVGProps<SVGSVGElement> {
  name:
    | "iconLogo"
    | "iconArrowDown"
    | "iconBookmark"
    | "iconCart"
    | "iconSearch"
    | "iconArrow"
    | "iconCheckbox"
    | "iconFilter"
    | "iconMinus"
    | "iconPlus"
    | "iconCross";
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
    iconFilter: <IconFilter className={className} />,
    iconMinus: <IconMinus className={className} />,
    iconPlus: <IconPlus className={className} />,
    iconCross: <IconCross className={className} />,
  };

  return icons[name];
};
