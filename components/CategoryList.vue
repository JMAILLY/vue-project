/* Catégorie list */
<template>
  <ul>
    <li v-for="category in categories" :key="category.slug" class="item-cat">
      <v-card
        color="#952175"
        dark
        @click="catFilter(category.id)"
      >
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title
              class="headline"
            >
              <category-view :category="category" />
            </v-card-title>

            <v-card-subtitle>Découvrir</v-card-subtitle>

            <v-card-actions>
              <v-btn
                class="ml-2 mt-3"
                fab
                icon
                height="40px"
                right
                width="40px"
              >
                <v-icon>mdi-play</v-icon>
              </v-btn>
            </v-card-actions>
          </div>
        </div>
      </v-card>
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

<style lang="scss">
  .item-cat{
    margin-bottom: 15px;
  }
</style>
