import * as types from "./types";

const mutations = {
  [types.GET_HEROES](state, heroes) {
    state.heroes = heroes;
  },

  [types.ISLOADING_HERO](state, toggle) {
    state.isLoading = toggle;
  },

  [types.REMOVE_HERO](state, id) {
    state.heroes = state.heroes.filter((h) => h.id !== id);
  },

  [types.ADD_HERO](state, heroData) {
    console.log("MUTATIONS::", heroData);
    state.heroes.push(heroData);
  },
};

export default mutations;
