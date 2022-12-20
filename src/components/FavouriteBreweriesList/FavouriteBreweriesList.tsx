import { List } from "../List/List";
import { Props as BreweryItem } from "../BreweryItem/BreweryItem";

interface Props {
  favouriteList: ReadonlyArray<BreweryItem>;
  setFavouriteList: (items: ReadonlyArray<BreweryItem>) => void;
}

export const FavouriteBreweriesList = ({
  favouriteList,
  setFavouriteList,
}: Props) => {
  const handleRemoveItem = (item: BreweryItem) => {
    setFavouriteList(favouriteList.filter(({ id }) => item.id !== id));
  };

  return (
    <List
      headline="Favourite Breweries"
      list={favouriteList}
      onClickItem={handleRemoveItem}
    />
  );
};
