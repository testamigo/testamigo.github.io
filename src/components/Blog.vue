<template>
  <div class="blog">
    <div class="error" v-if="error">
      {{error}}
    </div>
    <button class="btn blue right" @click="add=!add">+ Добавить</button><br>
    <form method="post" v-show="add"  @submit.prevent="send">
      <input type="text" placeholder="Post Title" v-model="title">
      <input type="text" placeholder="Post Image" v-model="image">
      <textarea v-model="body"></textarea>
      <input type="submit" class="btn">
    </form>
    <div class="posts">
      <div class="post" v-for="post in posts">
        <h4 class="flow-text">{{post.title}}</h4>
        <img :src="post.thumbnailUrl" :alt="post.title"><hr>
        <router-link :to="{name: 'post', params: { id: post.id } }">Подробнее</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  //import allPosts from '../posts.js'
  import axios from 'axios'

  export default {
    data() {
      return {
        add: false,
        href: 'https://jsonplaceholder.typicode.com/photos',
        posts: [],
        error: null,
      }
    },
    props: ['title', 'image', 'body'],
    methods: {
      getAllPosts() {
        let self = this
        axios.get(this.href, {
          params: {
            _start: 10,
            _limit: 5,
          }
        })
          .then(function(response) {
            self.posts = response.data
          })
          .catch(function(error) {
            //this.error = error.data
          })
      }
    },
    created() {
      this.getAllPosts()
    }
  }
</script>
