<template>
  <div>
    {{ product.name }}
    {{ product.id }}
    <v-btn
      @click="addProductToCart({id: product.id, count: pnumber})"
    >
      Add To Cart
    </v-btn>
    <v-text-field
      v-model="pnumber"
      label="Quantité"
      type="number"
      min="1"
      outlined
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
  },
  data () {
    return {
      pnumber: 0
    }
  },
  methods: {
    ...mapActions({
      addProductToCart: 'addProductToCart'
    })
  }
}
</script>
