<template>
  <div>
    <product-list :products="products" />
  </div>
</template>
<script>
import ProductList from '~/components/ProductList'

export default {
  components: { ProductList },
  async asyncData ({ $commerce }) {
    const { data: products } = await $commerce.products.list()

    return {
      products
    }
  }
}
</script>
