const getState = ({ getStore, getActions, setStore }) => {
	return {
	   store: {
		  favorites: [],
	   },
	   actions: {
		  addFavorite: (item) => {
			 const store = getStore();
			 const isAlreadyFavorite = store.favorites.some((fav) => fav.uid === item.uid);
			 if (!isAlreadyFavorite) {
				setStore({ favorites: [...store.favorites, item] });
			 }
		  },
 
		  removeFavorite: (item) => {
			 const store = getStore();
			 const updatedFavorites = store.favorites.filter((fav) => fav.uid !== item.uid);
			 setStore({ favorites: updatedFavorites });
		  },
 
		  isFavorite: (item) => {
			 const store = getStore();
			 return store.favorites.some((fav) => fav.uid === item.uid);
		  },
	   },
	};
 };
 
 export default getState;
 