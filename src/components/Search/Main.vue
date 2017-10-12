<template lang="html">
  <div id="Search">
    <header>
      <search></search>
    </header>
    <main>
      <results></results>
    </main>
  </div>
</template>

<script>
import Search from './Search.vue'
import Results from './Results.vue'

export default {
  components: { Search, Results }
}
</script>
