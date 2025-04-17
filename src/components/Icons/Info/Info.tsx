import { CSSProperties } from "react";

interface InfoIconProps {
    className?: string;
    style?: CSSProperties;
}

const InfoIcon = ({className, style}: InfoIconProps) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em" // scalable
    height="1em"
    viewBox="0 0 24 24"
    className={className}
    style={style}
  >
    <path fill="currentColor" d="M11 17v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0"></path>
    <circle fill="currentColor" cx="12" cy="7.5" r="1.5"></circle>
  </svg>
);

export default InfoIcon;
