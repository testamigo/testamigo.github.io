<template>
  <div  id="comments">
    <h4 class="center-align">Комментарии ( {{ count }} )</h4>
    <form @submit.prevent="send(email, body, 11)" method="post">
      <input type="email" v-model="email">
      <textarea v-model="body"></textarea>
      <input type="submit" class="btn">
    </form>
    POst - {{postId}}
    <div class="comment card" v-for="comment in comments">
      <a class="delete right spin" v-show="active" @click="close(), del(comment.id), $event"><img src="src/assets/img/cancel.svg" width="12"></a>
      <div class="left">#{{ comment.id }}</div>
      <div class="flow-text email">{{ comment.email }}</div><br>
      <div class="content">{{ comment.body }}</div>
    </div>
  </div>
</template>


<script>
  export default {
    props: ['email', 'body'],
    data() {
      return {
        postId: 11,
        active: true,
      }
    },
    computed: {
      comments() {
        return this.$store.Comments.getters.comments
      },
      count() {
        return this.$store.Comments.getters.count
      },
    },
    methods: {
      send(email, body, postId) {
        this.$store.Comments.dispatch('create', {
          email: email,
          body: body,
          postId: postId,
        })
      },
      close() {
        this.active = false
      },
      open() {
        this.active = true
      },
      del(id, e) {
        this.$store.Comments.dispatch('del', {contenttype: 1, id: id})
        this.open()
        console.log('delete', id)
      },
    }
  }
</script>

<style>
  .delete {
    cursor: pointer;
  }
  .spin {
    animation: spin 2s infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg);}
    100% { transform: rotate(360deg);}
  }
</style>
