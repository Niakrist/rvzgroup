import React from "react";

interface IIconCheckboxProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const IconCheckbox: React.FC<IIconCheckboxProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.81345 7.12319C3.62245 7.12319 3.42945 7.05019 3.28345 6.90319L0.909447 4.53019C0.616447 4.23719 0.616447 3.76319 0.909447 3.47019C1.20245 3.17719 1.67645 3.17719 1.96945 3.47019L3.81345 5.31219L8.02945 1.09719C8.32245 0.804191 8.79645 0.804191 9.08945 1.09719C9.38245 1.39019 9.38245 1.86419 9.08945 2.15719L4.34345 6.90319C4.19745 7.05019 4.00545 7.12319 3.81345 7.12319Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default IconCheckbox;
