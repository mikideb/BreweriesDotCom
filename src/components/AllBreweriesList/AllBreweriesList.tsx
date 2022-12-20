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
  const { generalList, handleSortByDistance } = useAllBreweries();

  const handleAddItem = (item: BreweryItem) =>
    setFavouriteList([...favouriteList, item]);

  return (
    <Wrapper isVisible={isVisible}>
      <button onClick={handleSortByDistance}>Sort by distance</button>
      <List
        headline="All Breweries"
        list={generalList}
        onClickItem={handleAddItem}
      />
    </Wrapper>
  );
};
