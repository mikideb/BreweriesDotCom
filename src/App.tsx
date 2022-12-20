import { AllBreweriesList } from "./components/AllBreweriesList/AllBreweriesList";
import { FavouriteBreweriesList } from "./components/FavouriteBreweriesList/FavouriteBreweriesList";
import { useFavouriteBreweries, useShowListButton } from "./components/hooks";
import { TopPanel, ListsContainer } from "./styled-components";

function App() {
  const { favouriteList, setFavouriteList } = useFavouriteBreweries();
  const { shouldShowAllBreweriesList, handleHideButtonClick, buttonText } =
    useShowListButton();

  return (
    <div>
      <TopPanel>
        <h1>BREWERIES DOT COM</h1>
        <button onClick={handleHideButtonClick}>{buttonText}</button>
      </TopPanel>
      <ListsContainer>
        <AllBreweriesList
          favouriteList={favouriteList}
          setFavouriteList={setFavouriteList}
          isVisible={shouldShowAllBreweriesList}
        />
        <FavouriteBreweriesList
          favouriteList={favouriteList}
          setFavouriteList={setFavouriteList}
        />
      </ListsContainer>
    </div>
  );
}

export default App;
