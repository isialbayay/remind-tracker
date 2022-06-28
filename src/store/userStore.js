import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      id: 1,
      username: "Chompa",
      sessions: [
        {
          id: 1,
          date: "02/11/2021",
          score: 3.9,
          duration: 60,
        },
        {
          id: 2,
          date: "03/11/2021",
          score: 5,
          duration: 40,
        },
        {
          id: 3,
          date: "04/11/2021",
          score: 4.3,
          duration: 55,
        },
        {
          id: 4,
          date: "05/11/2021",
          score: 4.2,
          duration: 72,
        },
        {
          id: 5,
          date: "06/11/2021",
          score: 4.6,
          duration: 60,
        },
        {
          id: 6,
          date: "07/11/2021",
          score: 2.1,
          duration: 55,
        },
      ],
    },
  },
  getters: {},
  mutations: {
  },
  actions: {},
  modules: {},
});
