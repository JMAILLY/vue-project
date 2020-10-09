<template>
  <div>
    {{ category.name }}
    <product-list :products="products" />
  </div>
</template>

<script>

import ProductList from '~/components/ProductList'
export default {
  components: { ProductList },
  // eslint-disable-next-line require-await
  async asyncData ({ app, params, store }) {
    const url = `/categories/${params.id}`
    return app.$axios.get(url).then((response) => {
      return {
        category: response.data
      }
    })
  }
}
</script>
