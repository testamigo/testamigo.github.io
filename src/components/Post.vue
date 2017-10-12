<template>
  <div class="post">
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <a :href="post.url"><img :src="post.url"></a>
      <h2 class="flow-text">{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>

    <div class="comments">
      <comments></comments>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Comments from './Comments.vue'

  export default {
    components: { Comments },
    data() {
      return {
        error: null,
        loading: true,
        post: null,
        href: 'https://jsonplaceholder.typicode.com/photos',
      }
    },
    components: {Comments},
    created() {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData() {
        this.error = this.post = null
        let self = this
        axios.get(this.href + '/' + this.$route.params.id)

        .then(function(response) {
          self.post = response.data
          self.loading = false
          self.$store.Comments.dispatch('getComments', {item_id: response.data.id, contenttype: 1}) //STORE
        })
        .catch(function(error) {
          console.log(321)
        })

    }
  }
}
</script>
