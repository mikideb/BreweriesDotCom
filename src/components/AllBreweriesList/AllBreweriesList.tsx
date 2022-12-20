import { List } from "../List/List";
import { useAllBreweries } from "../hooks";
import { Props as BreweryItem } from "../BreweryItem/BreweryItem";
import { Wrapper } from "./styled-components";

interface Props {
  readonly favouriteList: ReadonlyArray<BreweryItem>;
  readonly setFavouriteList: (items: ReadonlyArray<BreweryItem>) => void;
  isVisible: boolean;
}

export const AllBreweriesList = ({
  favouriteList,
  setFavouriteList,
  isVisible,
}: Props) => {
  const {
    generalList,
    handleSortByDistance,
    shouldShowAsRawJson,
    setShouldShowAsRawJson,
  } = useAllBreweries();

  const handleAddItem = (item: BreweryItem) =>
    setFavouriteList([...favouriteList, item]);

  const handleShowAsJsonClick = () =>
    setShouldShowAsRawJson(!shouldShowAsRawJson);

  return (
    <Wrapper isVisible={isVisible}>
      <button onClick={handleSortByDistance}>Sort by distance</button>
      <button onClick={handleShowAsJsonClick}>Show as raw JSON</button>
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
