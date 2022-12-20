import { AllBreweriesList } from "./components/AllBreweriesList/AllBreweriesList";
import { FavouriteBreweriesList } from "./components/FavouriteBreweriesList/FavouriteBreweriesList";
import {
  useAllBreweries,
  useFavouriteBreweries,
  useShowListButton,
} from "./components/hooks";
import { AppContainer, ListsContainer } from "./styled-components";
import { TopPanel } from "./components/TopPanel/TopPanel";

function App() {
  const { favouriteList, setFavouriteList } = useFavouriteBreweries();
  const {
    generalList,
    handleSortByDistance,
    shouldShowAsRawJson,
    setShouldShowAsRawJson,
  } = useAllBreweries();
  const { shouldShowAllBreweriesList, handleHideButtonClick } =
    useShowListButton();

  return (
    <AppContainer>
      <TopPanel
        setShouldShowAsRawJson={setShouldShowAsRawJson}
        shouldShowAsRawJson={shouldShowAsRawJson}
        handleSortByDistance={handleSortByDistance}
        handleHideButtonClick={handleHideButtonClick}
      />
      <ListsContainer>
        <AllBreweriesList
          favouriteList={favouriteList}
          setFavouriteList={setFavouriteList}
          isVisible={shouldShowAllBreweriesList}
          generalList={generalList}
          shouldShowAsRawJson={shouldShowAsRawJson}
        />
        <FavouriteBreweriesList
          favouriteList={favouriteList}
          setFavouriteList={setFavouriteList}
        />
      </ListsContainer>
    </AppContainer>
  );
}

export default App;
