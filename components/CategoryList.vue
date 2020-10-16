/* Catégorie list */
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
    // Ajout dans le store de la catégorie cliqué sur la page liste pour préchosir le filtre
    catFilter (cat) {
      this.$store.commit('newCat', cat)
      this.$router.push('/products')
    }
  }
}
</script>
