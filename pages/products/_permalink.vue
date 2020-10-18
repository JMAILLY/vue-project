<template>
  <div class="product-view">
    <img class="product-vyn" :src="product.media.source" />
    <div class="product-txt">
      <h1>
        {{ product.name }}
      </h1>
      <div class="cart-ctn">
        <v-text-field
          v-model="pnumber"
          label="Quantité"
          type="number"
          min="1"
          outlined
        />
        <v-btn
          @click="addProductToCart({id: product.id, count: pnumber})"
        >
          Add To Cart
        </v-btn>
      </div>
    </div>
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
<style lang="scss">
  @import '/assets/scss/base.scss';
  .product-view{
    @include wrapper('min');
    position: relative;
    h1{
      font-size: 36px;
      font-weight: bold;
      text-align: center;
    }
    .product-vyn{
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-50%);
      z-index: -1;
    }
  }
  .cart-ctn{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .v-input{
    max-width: 150px;
  }
  .v-text-field__details{
    display: none;
  }
  .v-input__slot{
    margin: 0;
  }
  .v-btn{
    margin-top: 15px;
  }
  .product-txt{
    padding-top: 50%;
  }
</style>
