import type { SVGProps } from 'react';
import React from 'react';

export const IconDownload = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1rem"
      height="1rem"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_3_407)">
      <path d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM17 11L15.59 9.59L13 12.17V4H11V12.17L8.41 9.59L7 11L12 16L17 11Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_3_407">
      <rect width="24" height="24" fill="currentColor"/>
      </clipPath>
      </defs>
    </svg>
  );
};

export default IconDownload;