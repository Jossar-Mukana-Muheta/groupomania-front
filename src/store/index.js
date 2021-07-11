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
    is_log: false,
  },
  getters: {
    items: state => {
      return state.commentaires
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
          if (isAdmin === 1) {
            localStorage.setItem("isAdmin", true);
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