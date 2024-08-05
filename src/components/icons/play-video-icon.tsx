import { SVGProps } from "react";
const PlayVideoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 70 70"
    fill="none"
    {...props}
  >
    <circle cx={35} cy={35} r={25} fill="#fff" />
    <circle cx={35} cy={35} r={25} fill="#fff" />
    <path fill="#1B36F6" d="m44 35-13.5 7.794V27.206L44 35Z" />
  </svg>
);
export default PlayVideoIcon;
