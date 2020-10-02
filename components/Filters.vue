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
      selected: this.$store.state.filters.category
    }
  },
  computed: {
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
    selected () {
      this.$store.commit('newCat', this.selected)
    }
  }
}
</script>
