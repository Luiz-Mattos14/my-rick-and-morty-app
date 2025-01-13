import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { CharacterType } from "../services/servicesCharacters";

type FavoritesContextType = {
  favorite: CharacterType[];
  addFavorite: (character: CharacterType) => void;
  removeFavorite: (id: number) => void;
};

const FavoriteContext = createContext<FavoritesContextType>(
  {} as FavoritesContextType
);

export const FavoriteContextProvider = (props: { children?: ReactNode }) => {
  const [favorite, setFavorite] = useState<CharacterType[]>([]);

  useEffect(() => {
    const storeFavorite = localStorage.getItem("favorite-item");

    if (storeFavorite) {
      setFavorite(JSON.parse(storeFavorite));
    }
  }, []);

  const addFavorite = (character: CharacterType) => {
    const updateFavorite = [...favorite, character];
    localStorage.setItem("favorite-item", JSON.stringify(updateFavorite));
    setFavorite(updateFavorite);
  };

  const removeFavorite = (favoriteId: number) => {
    const favoriteIndex = favorite.findIndex(
      (character) => character.id === favoriteId
    );

    if (favoriteIndex !== -1) {
      const updateFavorite = [...favorite];
      updateFavorite.splice(favoriteIndex, 1);
      localStorage.setItem("favorite-item", JSON.stringify(updateFavorite));
      setFavorite(updateFavorite);
    }
  };

  return (
    <FavoriteContext.Provider value={{ favorite, addFavorite, removeFavorite }}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoriteContext);
