import { List } from "../List/List";
import { useAllBreweries } from "../hooks";
import { Props as BreweryItem } from "../BreweryItem/BreweryItem";

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
  const { generalList } = useAllBreweries();

  const handleAddItem = (item: BreweryItem) =>
    setFavouriteList([...favouriteList, item]);

  return (
    <List
      headline="All Breweries"
      list={generalList}
      onClickItem={handleAddItem}
      isVisible={isVisible}
    />
  );
};
