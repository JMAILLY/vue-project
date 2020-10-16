/* Filtres de la page produit
Select de catégorie
Champs de recherche
*/
<template>
  <div>
    <b-select v-model="selected" placeholder="Selectionnez une catégorie" rounded>
      <option
        v-for="category in categories"
        :key="category.id"
        :value="category.id"
      >
        {{ category.name }}
      </option>
    </b-select>
    <b-field>
      <b-input
        v-model="search"
        type="text"
        :lazy="false"
        placeholder="Input"
      />
    </b-field>
  </div>
</template>

<script>
export default {
  props: ['categories'],
  data () {
    return {
      // sauvegarde de la cat sélectionné
      selected: this.$store.state.filters.category
    }
  },
  computed: {
    // filtre de recherche emit au parent pour filtre de la liste
    search: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('search', val)
      }
    }
  },
  watch: {
    // watch du selected pour un nouvel appel api avec le nouveau filtre selectionné
    selected () {
      this.$store.commit('newCat', this.selected)
    }
  }
}
</script>
