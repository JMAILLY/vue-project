<template>
  <div>
    <Filters :categories="categories" @search="search=$event" />
    <product-list :products="filter(products)" />
    <!--    <pre>{{ JSON.stringify(products, null, 2) }}</pre>-->
  </div>
</template>
<script>
import ProductList from '~/components/ProductList'
import Filters from '~/components/Filters'

export default {
  components: { ProductList, Filters },
  async asyncData ({ $commerce, store }) {
    const { data: categories } = await $commerce.categories.list()
    const { data: products } = await $commerce.products.list({
      category_id: store.state.filters.category
    })
    return {
      products,
      categories
    }
  },
  data () {
    return {
      filteredCategroyId: this.$store.state.filters.category,
      search: ''
    }
  },
  watch: {
    async '$store.state.filters.category' (value, oldValue) {
      const { data: products } = await this.$commerce.products.list({
        category_id: value
      })
      this.products = products
    }
  },
  methods: {
    filter () {
      return this.products.filter((val) => {
        return val.name.match(this.search)
      })
    }
  }
}
</script>
