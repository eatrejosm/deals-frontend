import { IconProps } from "@/utils/types";

const ChevronDownIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="19"
      height="9"
      viewBox="0 0 19 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.50002 8.8C8.80002 8.8 8.10002 8.53 7.57002 8L1.05002 1.48C0.76002 1.19 0.76002 0.709999 1.05002 0.419999C1.34002 0.129999 1.82002 0.129999 2.11002 0.419999L8.63002 6.94C9.11002 7.42 9.89002 7.42 10.37 6.94L16.89 0.419999C17.18 0.129999 17.66 0.129999 17.95 0.419999C18.24 0.709999 18.24 1.19 17.95 1.48L11.43 8C10.9 8.53 10.2 8.8 9.50002 8.8Z"
        fill="#7E92A2"
      />
    </svg>
  );
};

export default ChevronDownIcon;
