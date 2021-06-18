/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from 'vuex'
import axios from 'axios'

// import contacts from './modules/contacts'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        message: [],
        contacts: [],
        chats: [],
        chatRoomMessages: []
    },
    mutations: {
        UPDATE_MESSAGE(state, message) {
            state.message.unshift(message);
        },
        SAVE_CONTACTS(state, contacts) {
            state.contacts = contacts
        },
        SAVE_CHATS(state, chats) {
            state.chats = chats
        },
        SAVE_CHATROOM_MESSAGE(state, messages) {
            state.chatRoomMessages = messages
        }
    },
    actions: {
        updateMessage({ commit }, message) {
            commit('UPDATE_MESSAGE', message);
        },
        async loadContacts({ commit }) {
            const token =
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYyMzk3ODQ0OCwianRpIjoiYzlkZGIxOWYtOGNjZC00OGQwLWI2NzEtN2Y3YWViNWM2MDk0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjYwY2FjZjIwNDQzNjdmNzcyZGJmNzcyNiIsIm5iZiI6MTYyMzk3ODQ0OCwiZXhwIjoxNjI0NDEwNDQ4fQ.SFt5iv2e_sbfLN2RHQGgWDJVNRGWrK9lrPZJPvPdW_I";
            let config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            };
            await axios.get("http://localhost:5000/v1/api/contacts", config)
                .then(response => {
                    commit("SAVE_CONTACTS", response.data.data)
                })
                .catch(error => console.log(error))
        },
        async addContact({ commit, dispatch }, data) {
            const token =
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYyMzk3ODQ0OCwianRpIjoiYzlkZGIxOWYtOGNjZC00OGQwLWI2NzEtN2Y3YWViNWM2MDk0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjYwY2FjZjIwNDQzNjdmNzcyZGJmNzcyNiIsIm5iZiI6MTYyMzk3ODQ0OCwiZXhwIjoxNjI0NDEwNDQ4fQ.SFt5iv2e_sbfLN2RHQGgWDJVNRGWrK9lrPZJPvPdW_I";

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }

            await axios({
                method: 'post',
                url: 'http://localhost:5000/v1/api/contacts',
                data: data,
                headers: headers
            }).then(res => { dispatch('loadContacts') }).catch(error => console.log(error));
        },
        async loadChats({ commit, dispatch }) {
            const token =
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYyMzk3ODQ0OCwianRpIjoiYzlkZGIxOWYtOGNjZC00OGQwLWI2NzEtN2Y3YWViNWM2MDk0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjYwY2FjZjIwNDQzNjdmNzcyZGJmNzcyNiIsIm5iZiI6MTYyMzk3ODQ0OCwiZXhwIjoxNjI0NDEwNDQ4fQ.SFt5iv2e_sbfLN2RHQGgWDJVNRGWrK9lrPZJPvPdW_I";

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }

            await axios({
                method: 'get',
                url: 'http://localhost:5000/v1/api/messages/recents',
                headers: headers
            }).then(res => {
                commit("SAVE_CHATS", res.data)
                console.log("messages")
                console.log(res.data)
                console.log("messages")
            }).catch(error => console.log(error));
        },

        async loadChatroom({ commit, dispatch }, id) {
            const token =
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYyMzk3ODQ0OCwianRpIjoiYzlkZGIxOWYtOGNjZC00OGQwLWI2NzEtN2Y3YWViNWM2MDk0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjYwY2FjZjIwNDQzNjdmNzcyZGJmNzcyNiIsIm5iZiI6MTYyMzk3ODQ0OCwiZXhwIjoxNjI0NDEwNDQ4fQ.SFt5iv2e_sbfLN2RHQGgWDJVNRGWrK9lrPZJPvPdW_I";

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }

            await axios({
                method: 'get',
                url: `http://localhost:5000/v1/api/messages/${id}`,
                headers: headers
            }).then(res => {
                commit("SAVE_CHATROOM_MESSAGE", res.data)
                console.log("chatroom")
                console.log(res.data)
                console.log("messages")
            }).catch(error => console.log(error));
        },


        async updateContact({ commit, dispatch }, data) {
            const token =
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYyMzk3ODQ0OCwianRpIjoiYzlkZGIxOWYtOGNjZC00OGQwLWI2NzEtN2Y3YWViNWM2MDk0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjYwY2FjZjIwNDQzNjdmNzcyZGJmNzcyNiIsIm5iZiI6MTYyMzk3ODQ0OCwiZXhwIjoxNjI0NDEwNDQ4fQ.SFt5iv2e_sbfLN2RHQGgWDJVNRGWrK9lrPZJPvPdW_I";

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
            console.log(data)
            await axios({
                method: 'put',
                url: `http://localhost:5000/v1/api/contact/${data.id}`,
                data: data,
                headers: headers
            }).then(res => { dispatch('loadContacts') }).catch(error => console.log(error));
        },
        async deleteContact({ dispatch }, id) {
            const token =
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYyMzk3ODQ0OCwianRpIjoiYzlkZGIxOWYtOGNjZC00OGQwLWI2NzEtN2Y3YWViNWM2MDk0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjYwY2FjZjIwNDQzNjdmNzcyZGJmNzcyNiIsIm5iZiI6MTYyMzk3ODQ0OCwiZXhwIjoxNjI0NDEwNDQ4fQ.SFt5iv2e_sbfLN2RHQGgWDJVNRGWrK9lrPZJPvPdW_I";
            let config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            };
            await axios.delete(`http://localhost:5000/v1/api/contact/${id}`, config)
                .then(response => {
                    dispatch('loadContacts')
                })
                .catch(error => console.log(error))
        },


        async sendMessage({ commit, dispatch }, data) {
            const token =
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTYyMzk3ODQ0OCwianRpIjoiYzlkZGIxOWYtOGNjZC00OGQwLWI2NzEtN2Y3YWViNWM2MDk0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjYwY2FjZjIwNDQzNjdmNzcyZGJmNzcyNiIsIm5iZiI6MTYyMzk3ODQ0OCwiZXhwIjoxNjI0NDEwNDQ4fQ.SFt5iv2e_sbfLN2RHQGgWDJVNRGWrK9lrPZJPvPdW_I";

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + token
            }
            await axios({
                method: 'post',
                url: 'http://localhost:5000/v1/api/messages',
                data: data,
                headers: headers
            }).then(res => {
                commit("SAVE_CHATS", res.data)
                dispatch("loadChatroom", data.chatroom)
                console.log("messages")
                console.log(res.data)
                console.log("messages")
            }).catch(error => console.log(error));
        },
    },
    getters: {
        messageData: state => state.message
    },

})