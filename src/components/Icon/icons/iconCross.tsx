import React from "react";

type IIconCrossProps = React.SVGProps<SVGSVGElement>;

export const IconCross = ({ ...props }: IIconCrossProps): React.JSX.Element => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 6C10.6863 10.6863 13.3137 13.3137 18 18M6 18C10.6863 13.3137 13.3137 10.6863 18 6"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
