<template>
  <ul>
    <li v-for="category in categories" :key="category.slug">
      <button @click="catFilter(category.id)">
        <category-view :category="category" />
      </button>
    </li>
  </ul>
</template>
<script>
export default {
  props: ['categories'],
  methods: {
    catFilter (cat) {
      this.$store.commit('newCat', cat)
      console.log(this.$store.state.filters.category)
      this.$router.push('/products')
    }
  }
}
</script>
