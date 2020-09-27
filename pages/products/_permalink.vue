<template>
  <div>
    {{ product.name }}
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line require-await
  async asyncData ({ app, params, store }) {
    const url = `/products/${params.id}`
    return app.$axios.get(url).then((response) => {
      return { product: response.data }
    })
  }
}
</script>
