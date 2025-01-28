import React from "react";

interface IIconArrowDownProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const IconArrowDown: React.FC<IIconArrowDownProps> = ({
  className,
  ...props
}) => {
  return (
    <svg
      {...props}
      className={className}
      width="11"
      height="7"
      viewBox="0 0 11 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.40403 0.878675L9.78153 0.878675C9.9305 0.877808 10.0763 0.921325 10.2005 1.00368C10.3246 1.08603 10.4214 1.20348 10.4786 1.34106C10.5357 1.47865 10.5505 1.63013 10.5212 1.77619C10.4919 1.92225 10.4198 2.05627 10.314 2.16118L6.12153 6.34619C5.981 6.48588 5.79092 6.56428 5.59278 6.56428C5.39464 6.56428 5.20455 6.48588 5.06403 6.34619L0.871526 2.16118C0.765755 2.05627 0.693619 1.92225 0.664316 1.77619C0.635015 1.63013 0.649874 1.47865 0.706999 1.34106C0.764124 1.20348 0.860926 1.08603 0.985065 1.00368C1.10921 0.921325 1.25506 0.877808 1.40403 0.878675Z"
        fill="#374957"
      />
    </svg>
  );
};

export default IconArrowDown;
