<template>
  <p>{{ product.name }} : {{ product.price.formatted_with_code }}</p>
</template>
<script>
export default {
  props: ['product']
}
</script>
