/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
const baseURL = "http://localhost:4000/";



Vue.use(Vuex)
Vue.use(VueAxios, axios)



export default new Vuex.Store({
  state: {
    commentaires: [],
    commentairesId: [],
    is_log: false,
  },
  getters: {
    items: state => {
      return state.commentaires
    },
    itemsId: state => {
      return state.commentairesId
    },
    auth: state => {
      return state.is_log
    },
    name: state => {
      return state.userName
    },
    id: state => {
      return state.userId
    }
  },
  mutations: {
    SET_AUTH(state, data) {
      state.is_log = data;
    },

    SET_ITEM(state, items) {
      state.commentaires = items
    },

    SET_ITEMBYID(state, items) {
      state.commentairesId = items
    },


  },
  actions: {
    login({
      commit
    }, userData) {
      const config = {
        method: "post",
        url: baseURL + "login",
        credentials: "include",
        data: {
          email: userData.email,
          password: userData.password
        }
      };

      axios(config)
        .then(response => {
          let accessToken = response.data.token;
          let userName = response.data.userId.name;
          let userEmail = response.data.userId.email;
          let userId = response.data.userId.id;
          let isAdmin = response.data.userId.isAdmin
          let loggin = true;
          localStorage.setItem("user", JSON.stringify(accessToken));
          localStorage.setItem("id", JSON.stringify(userId));
          localStorage.setItem("name", JSON.stringify(userName));
          localStorage.setItem("email", JSON.stringify(userEmail));
          localStorage.setItem("isLog", loggin);
          commit("SET_AUTH", loggin);
          console.log(isAdmin)
          if (isAdmin === 1) {
            localStorage.setItem("isAdmin", "isAdmin");
            console.log('isAdmin')
          } else {
            localStorage.setItem("isAdmin", "notAdmin");
            console.log('isNotAdmin')
          }









        })
        .catch(error => {
          error;
        });
    },
    logout({
      commit
    }) {

      let loggin = false;

      localStorage.removeItem("user");
      localStorage.removeItem("id");
      localStorage.removeItem("name");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("isLog");
      commit("SET_AUTH", loggin);

    },

    deleteAccount({
      commit
    }) {

      let user = localStorage.getItem("user")
      let userId = localStorage.getItem("id")

      const config = {
        method: "delete",
        url: baseURL + "user",
        credentials: "include",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: "Bearer " + user
        },
        data: {
          userId: userId,
        }
      };

      axios(config)
        .then(response => {
          console.log(response)
          localStorage.removeItem("user");
          localStorage.removeItem("id");
          localStorage.removeItem("name");
          localStorage.removeItem("isAdmin");
          localStorage.removeItem("isLog");
        })
        .catch(error => {
          error;
        });
    },



    register({
      // eslint-disable-next-line no-unused-vars
      commit
    }, user) {
      console.log(user)
      const config = {
        method: "post",
        url: baseURL + "register",
        credentials: "include",
        data: {
          name: user.name,
          email: user.email,
          password: user.password,
          isAdmin: 0
        }
      };

      axios(config)
        .then(response => {
          console.log(response)

        })
        .catch(error => {
          error;
        });
    },

    loadItems({
      commit
    }) {
      axios
        .get(baseURL + "commentaires/", {

        })
        .then(response => response.data)
        .then(items => {
          console.log(items);
          commit('SET_ITEM', items)
        })
    },
    // Ajouter un commentaire
    loadById({
      commit
    }, data) {
      let user = JSON.parse(localStorage.getItem("user"));
      let userId = JSON.parse(localStorage.getItem("id"));


      const config = {
        method: "get",
        url: baseURL + "commentaire/" + userId,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: "Bearer " + user
        },
        data: data
      };

      axios(config)
        .then(response => {
          let newdata = response.data;
          commit("SET_ITEMBYID", newdata);
        })
        .catch(error => {
          error;
        });
    },

    // Ajouter un commentaire
    AddItem({
      commit
    }, data) {
      let user = JSON.parse(localStorage.getItem("user"));



      const config = {
        method: "post",
        url: baseURL + "commentaire",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: "Bearer " + user
        },
        data: data
      };

      axios(config)
        .then(response => {
          let newdata = response.data;
          commit("SET_ITEM", newdata);
        })
        .catch(error => {
          error;
        });
    },

    // supprimer un commentaire
    DeleteItem({
      commit
    }, data) {
      let user = JSON.parse(localStorage.getItem("user"));

      const config = {
        method: "delete",
        url: baseURL + "commentaire/",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: "Bearer " + user
        },
        data: data
      };

      axios(config)
        .then(response => {
          let newdata = response.data;
          commit("SET_ITEM", newdata);
        })
        .catch(error => {
          error;
        });
    },


  },
})