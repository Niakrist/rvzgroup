import React from "react";

interface IIconArrowProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const IconArrow: React.FC<IIconArrowProps> = ({ className, ...props }) => {
  return (
    <svg
      {...props}
      className={className}
      width="0"
      height="0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.5 5L8.5 12L15.5 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconArrow;
