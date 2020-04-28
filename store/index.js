import Vuex from 'vuex';
import * as axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      users: []
    },
    mutations: {
      getUsers (state, users){
        state.users = users;
      },
      removeUser (state, id){
        // state.users.splice(id, 1);
        // state.users = state.users.filter(item => item.id === id);
        let index = state.users.findIndex(
          (item) => item.id === id
        );
        state.users.splice(index, 1);
      }
    },
    actions: {
      async getUsers (context) {
        const req = await axios.get('https://jsonplaceholder.typicode.com/users');
        context.commit('getUsers', req.data);
      },
      removeUser (context, id) {
        context.commit('removeUser', id);
      }
    },
    getters: {
      users(state) {
        return state.users;
      }
    }
  });
};

export default createStore
