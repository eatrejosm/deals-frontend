import { IconProps } from "@/utils/types";

const PlusIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11 6.625H1C0.658333 6.625 0.375 6.34167 0.375 6C0.375 5.65833 0.658333 5.375 1 5.375H11C11.3417 5.375 11.625 5.65833 11.625 6C11.625 6.34167 11.3417 6.625 11 6.625Z"
        fill="#ECECFE"
      />
      <path
        d="M6 11.625C5.65833 11.625 5.375 11.3417 5.375 11V1C5.375 0.658333 5.65833 0.375 6 0.375C6.34167 0.375 6.625 0.658333 6.625 1V11C6.625 11.3417 6.34167 11.625 6 11.625Z"
        fill="#ECECFE"
      />
    </svg>
  );
};

export default PlusIcon;
