<template>
  <div>
    {{ product.name }}
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line require-await
  async asyncData ({ params, $commerce }) {
    const { permalink } = params
    const product = await $commerce.products.retrieve(permalink, {
      type: 'permalink'
    })
    return {
      product
    }
  }
}
</script>
