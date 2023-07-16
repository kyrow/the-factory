import api from "@/api/http.js";

export const useFavorite = () => {
  const addToFavorite = (id) => {
    //parse all ids in localstorage
    const ids = getAllFavorites();

    if (!ids) {
      // if not found in localstore then save it
      return saveFavorites([id]);
    } else {
      if (!ids.includes(id)) {
        // if id not includes in array ids
        // add to array ids
        ids.push(id);
        //save array
        return saveFavorites(ids);
      } else {
        //id include in array ids error
        console.log("has in favorite");
      }
    }
  };

  const saveFavorites = (ids) => {
    //save favorites to localstorage then alert
    localStorage.setItem("favorite", JSON.stringify(ids));
    console.log("success add");
  };

  const getAllFavorites = () => {
    // get all ids favorites
    const ids = JSON.parse(localStorage.getItem("favorite"));
    return ids;
  };

  const getItemsFromFavorites = async () => {
    const ids = getAllFavorites();
    const items = [];
    for (let i = 0; i < ids.length; i++) {
      let { data } = await api.get(`/photos/${ids[i]}`);
      items.push(data);
    }
    return items;
  };

  return {
    addToFavorite,
    getItemsFromFavorites,
  };
};
