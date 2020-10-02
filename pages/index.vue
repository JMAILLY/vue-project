<template>
  <div class="wrapper">
    <main class="main">
      <n-link to="/products">
        Products
      </n-link>
      <n-link to="/categories">
        Categories
      </n-link>
      <Vynile />
    </main>
    <pre>{{ JSON.stringify(categories, null, 2) }}</pre>
    <pre>{{ JSON.stringify(products, null, 2) }}</pre>
  </div>
</template>

<script>
import Vynile from '~/components/Vynile'

export default {
  name: 'HomePage',

  components: {
    Vynile
  },

  async asyncData ({ $commerce }) {
    const { data: categories } = await $commerce.categories.list()
    const { data: products } = await $commerce.products.list()

    return {
      categories,
      products
    }
  }
}
</script>
