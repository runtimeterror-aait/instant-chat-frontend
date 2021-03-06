import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        message: []
    },
    mutations: {
        UPDATE_MESSAGE(state, message){
            state.message.unshift(message);
        }
    },
    actions: {
        updateMessage({commit}, message){
            commit('UPDATE_MESSAGE', message);
        }
    },
    getters: {
        messageData: state => state.message
    }
})