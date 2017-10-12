import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    comments: []
  },
  getters: {
    comments(state) {
      return state.comments
    },
    count(state) {
      return state.comments.length
    },
  },
  mutations: {
    set(state, { type, items }) {
      state[type] = items
    },
    add(state, { type, items }) {
      state[type].push(items)
    },
    del(state, { type, items }) {
      state[type].splice(
        state[type].indexOf(
            state[type].find((comment) => {
          return comment.id == items})
        )
      , 1)
    }
  },
  actions: {
    getComments({commit}, {item_id, contenttype}) {
      const href = "https://jsonplaceholder.typicode.com/comments"

      axios.get(href, {
        params: {
          postId: item_id,
          contenttype: contenttype
        }
      })
        .then(function(response) {
          const comments = response.data
          commit('set', { type: 'comments', items: comments })
        })
        .catch(function(error) {
          throw error
        })

      /*jsonp(href, (error, response) => {
        if(error) {
          throw error
        }
        const results = response.query.search
        commit('set', {type: 'results', items: results})
      })*/
    },
    create({commit}, {postId, email, body}) {
      const href = 'http://jsonplaceholder.typicode.com/comments'

      axios.post(href, {
          body: body,
          postId: postId,
          email: email,
      })
        .then(function(response) {
          if(response.statusText == 'Created') commit('add', { type: 'comments', items: response.data })
          console.log(response.data)
        })
        .catch(function(error) {
          throw error
        })
    },
    del({commit}, { contenttype, id }) {
      const href = 'http://jsonplaceholder.typicode.com/comments/'+id

      axios.delete(href)
      .then(function(response) {
        commit('del', { type: 'comments', items: id })

        console.log(id)
      })
      .catch(function(error) {
        throw error
      })
    }
  }
})

export default store
