<template>
  <div class="search">
    <input type="text" v-model="query">
    <button type="button" class="btn" @click="search()">Найти</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    }
  },
  methods: {
    search() {
      this.$store.Search.dispatch('search', this.query)
      let elmnt = document.getElementById("results");
      elmnt.scrollIntoView({block: 'end'});
    },
  }
}
</script>
