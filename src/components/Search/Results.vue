<template lang="html">
  <div id="results" class="results">
    <div class="card z-depth-2" v-for="item in results">
      <a class="flow-text blue-text" :href="item.url">{{item.title}}</a><br>
      <div class="url teal-text">{{ item.url }}</div>
      <div class="content" v-html="item.snippet"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    results() {
      return this.$store.Search.getters.results
    }
  }
}
</script>

<style lang="css">
  .results {
    text-align: left;
  }
  .card {
    padding: 8px;

  }
  .searchmatch {
    font-weight: 600;
  }
</style>
