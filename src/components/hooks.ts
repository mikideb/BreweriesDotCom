import React from "react";
import { Props as BreweryItem } from "./BreweryItem/BreweryItem";

const BREWERY_API_ADDRESS =
  "https://api.openbrewerydb.org/breweries?per_page=50";

const FAVOURITE_LIST_ID = "favouriteList";

export const useAllBreweries = () => {
  const [generalList, setGeneralList] = React.useState([]);

  React.useEffect(() => {
    fetch(BREWERY_API_ADDRESS)
      .then((res) => res.json())
      .then((data) => setGeneralList(data));
  }, []);

  return { generalList };
};

export const useFavouriteBreweries = () => {
  const localStorageItems = JSON.parse(
    localStorage.getItem(FAVOURITE_LIST_ID) ?? ""
  );
  const [favouriteList, setFavouriteList] =
    React.useState<ReadonlyArray<BreweryItem>>(localStorageItems);

  React.useEffect(() => {
    localStorage.setItem(FAVOURITE_LIST_ID, JSON.stringify(favouriteList));
  }, [favouriteList]);

  return { favouriteList, setFavouriteList };
};

export const useShowListButton = () => {
  const [shouldShowAllBreweriesList, setShouldShowAllBreweriesList] =
    React.useState(true);

  const handleHideButtonClick = () =>
    setShouldShowAllBreweriesList(!shouldShowAllBreweriesList);

  const buttonText = shouldShowAllBreweriesList
    ? "Hide All Breweries List"
    : "Show All Breweries List";

  return {
    shouldShowAllBreweriesList,
    handleHideButtonClick,
    buttonText,
  };
};
