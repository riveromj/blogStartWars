const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			person: [],
			people: [],
			favorite: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			loadSomeData: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.log("ERR", err));
			},
			loadPerson: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					//.then(data => console.log(data.results))
					.then(data => setStore({ person: data.results }))
					.catch(err => console.log("Err", err));
			},
			addFavorite: item => {
				const store = getStore();
				const validate = store.favorite.includes(item);
				//console.log(validate);
				if (store.favorite == [] || !validate) {
					setStore({ favorite: [...store.favorite, item] });
					//console.log(store.favorite);
				}
			},
			delteFavorite: id => {
				const store = getStore();
				const copyFavorite = [...store.favorite];
				copyFavorite.splice(id, 1);
				setStore({ favorite: [...copyFavorite] });
			}
		}
	};
};

export default getState;
