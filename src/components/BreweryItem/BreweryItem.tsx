import { getAddress } from "./helpers";
import { Wrapper, Cell } from "./styled-components";

export interface Props {
  id?: string;
  name: string;
  street: string;
  city: string;
  onClick?: (item: Props) => void;
}

export const BreweryItem = ({ id, name, street, city, onClick }: Props) => {
  const address = getAddress({ city, street });

  return (
    <Wrapper
      onClick={() => (onClick ? onClick({ id, name, street, city }) : null)}
    >
      <Cell>{name}</Cell>
      <Cell>{address}</Cell>
    </Wrapper>
  );
};
