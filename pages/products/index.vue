<template>
  <div>
    <product-list :products="this.$store.state.products.data" />
  </div>
</template>
<script>
import ProductList from '~/components/ProductList'
export default {
  components: { ProductList }
}
</script>
