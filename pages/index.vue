<template>
  <div class="wrapper">
    <main class="main">
      <n-link to="/products" class="item">
        Products
      </n-link>
      <n-link to="/categories" class="item">
        Categories
      </n-link>
      <img class="vynile" src="~/assets/images/1024px-Disque_Vinyl.png">
    </main>
  </div>
</template>

<script>

export default {
  name: 'HomePage',

  components: {
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

<style lang="scss">
  .main{
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 100px);
    position: relative;
    overflow: hidden;
    .item{
      color: black;
      font-size: 36px;
      margin: 15px;
      font-weight: 300;
      &:hover{
        text-decoration: underline;
      }
    }
    .vynile{
      position: absolute;
      bottom: 0;
      transform: translate(107%, 50%);
      right: 50%;
      z-index: -1;
    }
  }

</style>
