import {
  BreweryItem,
  Props as BreweryItemProps,
} from "../BreweryItem/BreweryItem";
import { StyledList } from "./styled-components";
import { getUniqueItems } from "./helpers";

export interface Props {
  readonly headline: string;
  readonly list?: ReadonlyArray<BreweryItemProps>;
  readonly onClickItem?: (item: BreweryItemProps) => void;
}

export const List = ({ headline, list, onClickItem }: Props) => {
  const listWithoutDuplicates = getUniqueItems(list);

  return (
    <StyledList>
      <h2>{headline}</h2>
      {listWithoutDuplicates.map(({ id, name, street, city }) => (
        <BreweryItem
          key={id}
          id={id}
          name={name}
          street={street}
          city={city}
          onClick={onClickItem}
        />
      ))}
    </StyledList>
  );
};
