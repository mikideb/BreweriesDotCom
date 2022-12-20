import { List } from "../List/List";
import { Props as BreweryItem } from "../BreweryItem/BreweryItem";
import { Wrapper } from "./styled-components";

interface Props {
  readonly favouriteList: ReadonlyArray<BreweryItem>;
  readonly setFavouriteList: (items: ReadonlyArray<BreweryItem>) => void;
  readonly isVisible: boolean;
  readonly generalList: ReadonlyArray<BreweryItem>;
  readonly shouldShowAsRawJson: boolean;
}

export const AllBreweriesList = ({
  favouriteList,
  setFavouriteList,
  isVisible,
  generalList,
  shouldShowAsRawJson,
}: Props) => {
  const handleAddItem = (item: BreweryItem) =>
    setFavouriteList([...favouriteList, item]);

  return (
    <Wrapper isVisible={isVisible}>
      {shouldShowAsRawJson ? (
        <pre>{JSON.stringify(generalList, null, 2)}</pre>
      ) : (
        <List
          headline="All Breweries"
          list={generalList}
          onClickItem={handleAddItem}
        />
      )}
    </Wrapper>
  );
};
