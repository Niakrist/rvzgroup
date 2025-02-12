import React from "react";

interface IIconPlusProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const IconPlus: React.FC<IIconPlusProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="0"
      height="0"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 8.5H17M9 16.5V0.5"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconPlus;
