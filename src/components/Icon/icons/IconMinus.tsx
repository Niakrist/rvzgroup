import React from "react";

interface IIconMinusProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const IconMinus: React.FC<IIconMinusProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="1"
      viewBox="0 0 16 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 0.5H15"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconMinus;
