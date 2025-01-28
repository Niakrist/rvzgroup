import React from "react";

interface IIconLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const IconLogo: React.FC<IIconLogoProps> = ({ className, ...props }) => {
  return (
    <svg
      {...props}
      className={className}
      width="65"
      height="60"
      viewBox="0 0 65 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M48.456 32.5926C48.469 29.1826 47.664 26.3026 46.004 23.6786C43.963 20.4586 41.157 18.1866 37.538 16.9196C35.778 16.3036 33.968 15.9876 32.123 16.0306C26.881 16.1506 22.564 18.2406 19.311 22.3626C17.419 24.7616 16.347 27.5326 16.054 30.5946C15.563 35.7246 17.164 40.1046 20.701 43.8186C20.966 44.0956 21.159 44.1886 21.539 43.9726C23.554 42.8266 25.589 41.7156 27.619 40.5946C28.307 40.2146 28.989 39.8256 29.685 39.4626C30.229 39.1766 30.724 39.3376 31.009 39.8546C31.249 40.2986 31.083 40.8146 30.576 41.1016C29.818 41.5326 29.052 41.9456 28.29 42.3666C27.115 43.0136 26.651 44.4656 27.267 45.5626C27.933 46.7496 29.315 47.1436 30.523 46.4906C31.287 46.0756 32.049 45.6526 32.815 45.2376C33.636 44.7916 34.542 44.9686 35.086 45.7426C36.966 48.4146 38.849 51.0846 40.675 53.7926C41.19 54.5576 41.759 55.2786 42.283 56.0386C42.759 56.7326 42.712 57.5256 42.079 57.9916C41.416 58.4846 40.623 58.3386 40.129 57.6136C39.048 56.0306 37.978 54.4386 36.899 52.8556C36.744 52.6276 36.609 52.3546 36.296 52.3006C35.953 52.2396 35.63 52.2766 35.431 52.6196C35.246 52.9356 35.263 53.2296 35.474 53.5476C36.347 54.8766 37.344 56.1226 38.124 57.5136C38.473 58.1356 38.317 58.8566 37.766 59.2226C37.226 59.5796 36.36 59.4456 35.973 58.8996C35.0783 57.6303 34.1952 56.353 33.324 55.0676C33.124 54.7716 32.878 54.6316 32.534 54.6606C32.224 54.6876 32.018 54.8656 31.897 55.1436C31.763 55.4516 31.874 55.7226 32.047 55.9746C32.449 56.5686 32.854 57.1626 33.26 57.7546C33.745 58.4586 33.638 59.1646 32.975 59.6246C32.322 60.0786 31.607 59.9366 31.115 59.2446C30.699 58.6616 30.276 58.0826 29.892 57.4786C29.619 57.0456 29.253 56.9466 28.816 57.1026C28.471 57.2256 28.329 57.7806 28.487 58.2156C28.765 58.9776 28.701 59.2426 28.137 59.6716C27.584 60.0916 26.914 60.1156 26.392 59.7026C26.0165 59.4125 25.7065 59.0465 25.482 58.6286C25.279 58.2406 24.998 57.9676 24.53 57.9036C23.375 57.7476 22.328 57.2506 21.27 56.7986C18.268 55.5126 15.686 53.6046 13.228 51.4776C12.158 50.5486 10.913 49.7976 9.42995 49.5896C8.80995 49.5036 8.24495 49.7026 7.66395 49.7996C6.06195 50.0646 4.24995 48.7906 3.92795 47.1996C3.66895 45.9096 4.04495 44.8376 4.92795 43.9336C7.02795 41.7876 6.63295 38.3226 4.55995 36.4496C3.97137 35.9221 3.26173 35.548 2.49395 35.3606C0.791953 34.9306 -0.373047 33.0306 0.109953 31.2146C0.374953 30.2096 0.865953 29.5016 1.85395 29.1136C2.79195 28.7476 3.74295 28.4316 4.54395 27.7436C6.69795 25.8936 6.90195 22.2536 4.90795 20.2136C3.30395 18.5736 3.51495 16.1576 5.38195 14.9046C6.26095 14.3156 7.21995 14.1826 8.24095 14.4696C11.447 15.3756 15.133 12.5086 14.575 8.59756C14.491 8.01456 14.277 7.46156 14.371 6.84356C14.583 5.44556 15.353 4.49056 16.651 4.02556C17.911 3.57456 19.083 3.86556 20.063 4.77956C21.728 6.34056 23.633 6.70656 25.739 5.89056C27.198 5.32856 28.219 4.28856 28.697 2.77556C29.186 1.22256 30.104 0.193563 31.823 0.0155631C33.312 -0.139437 34.879 0.879563 35.314 2.34856C36.181 5.28456 39.223 6.95456 42.092 6.06156C42.892 5.81156 43.544 5.32356 44.129 4.72656C45.162 3.66856 46.479 3.48156 47.692 4.03856C49.434 4.83856 50.139 6.40256 49.691 8.29356C49.007 11.1976 51.079 14.1556 54.033 14.5496C54.807 14.6526 55.54 14.5436 56.277 14.4036C57.687 14.1346 58.827 14.6176 59.647 15.7126C60.487 16.8296 60.621 18.0746 59.919 19.3576C59.504 20.1136 58.777 20.6286 58.417 21.4276C57.791 22.8176 57.68 24.1716 58.307 25.6276C59.019 27.2856 60.219 28.2526 61.903 28.7676C63.158 29.1526 64.014 30.4706 64.083 31.9436C64.139 33.1236 63.24 34.4986 62.09 35.0506C61.576 35.2976 61 35.3236 60.496 35.5536C59.514 35.9996 58.801 36.7336 58.444 37.7616C57.955 39.1686 57.61 40.5876 58.148 42.0746C58.409 42.7916 58.793 43.4146 59.308 43.9786C60.666 45.4596 60.744 47.1826 59.479 48.6736C58.629 49.6756 57.475 50.0846 56.212 49.7336C54.168 49.1666 52.572 49.9386 51.118 51.2306C48.968 53.1386 46.717 54.8966 44.123 56.1846C43.819 56.3346 43.729 56.2646 43.546 56.0206C41.317 53.0076 39.272 49.8646 37.062 46.8416C36.52 46.0966 36.068 45.2866 35.394 44.6296C34.671 43.9236 33.531 43.8926 32.669 44.3706C31.845 44.8286 31.005 45.2586 30.171 45.6976C29.307 46.1516 28.526 45.9506 28.109 45.1656C27.734 44.4596 28.069 43.6376 28.894 43.2046C29.742 42.7586 30.586 42.3026 31.432 41.8526C32.525 41.2696 33.642 40.7276 34.706 40.0926C36.156 39.2286 37.501 39.3826 38.902 40.2266C40.56 41.2226 42.275 42.1196 43.95 43.0866C44.281 43.2786 44.4 43.0756 44.552 42.8946C45.6915 41.5674 46.6091 40.0646 47.269 38.4446C48.064 36.4726 48.483 34.4226 48.456 32.5926Z"
        fill="#0277BD"
      />
    </svg>
  );
};

export default IconLogo;
