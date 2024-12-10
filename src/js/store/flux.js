const getState = ({ getStore, getActions, setStore }) => {
  
  const syncWithLocalStorage = (favorites) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return {
    store: {
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    },
    actions: {

      addFavorite: (item) => {
        const store = getStore();
        const isAlreadyFavorite = store.favorites.some(
          (fav) => fav.name === item.name
        );
        if (!isAlreadyFavorite) {
          const updatedFavorites = [...store.favorites, item];
          setStore({ favorites: updatedFavorites });
          syncWithLocalStorage(updatedFavorites);
        }
      },

      removeFavorite: (item) => {
        const store = getStore();
        const updatedFavorites = store.favorites.filter(
          (fav) => fav.name !== item.name
        );
        setStore({ favorites: updatedFavorites });
        syncWithLocalStorage(updatedFavorites);
      },

      isFavorite: (item) => {
        const store = getStore();
        return store.favorites.some((fav) => fav.name === item.name);
      },
    },
  };
};

export default getState;
