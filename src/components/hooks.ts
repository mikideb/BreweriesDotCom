import React from "react";
import { Props as BreweryItem } from "./BreweryItem/BreweryItem";

const NUMBER_OF_ITEMS_TO_FETCH = "per_page=10";

const BREWERY_API_ADDRESS = "https://api.openbrewerydb.org/breweries";

const FAVOURITE_LIST_ID = "favouriteList";

export const useAllBreweries = () => {
  const [generalList, setGeneralList] = React.useState([]);
  const [shouldShowAsRawJson, setShouldShowAsRawJson] = React.useState(false);

  const handleSortByDistance = () => {
    const successCallback = (position: GeolocationPosition) => {
      fetch(
        `${BREWERY_API_ADDRESS}?by_dist=${position.coords.latitude},${position.coords.latitude}&${NUMBER_OF_ITEMS_TO_FETCH}`
      )
        .then((res) => res.json())
        .then((data) => setGeneralList(data));
    };

    const errorCallback = (error: GeolocationPositionError) => {
      console.log(error);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  };

  React.useEffect(() => {
    fetch(`${BREWERY_API_ADDRESS}?${NUMBER_OF_ITEMS_TO_FETCH}`)
      .then((res) => res.json())
      .then((data) => setGeneralList(data));
  }, []);

  return {
    generalList,
    handleSortByDistance,
    shouldShowAsRawJson,
    setShouldShowAsRawJson,
  };
};

export const useFavouriteBreweries = () => {
  let localStorageItems = [];

  if (localStorage.getItem(FAVOURITE_LIST_ID) != null) {
    localStorageItems = JSON.parse(
      localStorage.getItem(FAVOURITE_LIST_ID) ?? ""
    );
  }

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
