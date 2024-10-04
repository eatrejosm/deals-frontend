export type IconProps = {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
};

export type Address = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
};
export type Deal = {
  address: Address;
  area: number;
  people: number;
  status: string;
};
