// components/Checkout.vue
<template>
  <v-navigation-drawer
    :value="value"
    fixed
    right
    stateless
    temporary
    width="500"
  >
    <div class="cart__header">
      <span class="title">Cart</span>
      <v-chip outlined @click.stop="$emit('closeDrawer')">
        Close Cart
      </v-chip>
    </div>
    <v-divider />

    <v-list>
      <v-list-item
        v-if="!cart.line_items || cart.line_items.length <= 0"
        class="text-center mb-2"
      >
        <v-list-item-content>
          <span class="subtitle-1 font-weight-light nav-text">
            Cart is empty!
          </span>
        </v-list-item-content>
      </v-list-item>

      <template v-for="product in cart.line_items">
        <v-list-item :key="product.product_id" class="mb-2">
          <v-list-item-title>
            {{ product.name }}
          </v-list-item-title>

          <span class="mr-2">
            {{ product.quantity }}
          </span>
          <span class="mr-2">
            ${{ product.line_total.formatted || '0.00' }}
          </span>
          <v-icon @click.stop="removeProduct(product.id)">
            mdi-cancel
          </v-icon>
        </v-list-item>
      </template>

      <v-divider />

      <v-list-item class="mt-2 mb-2">
        <v-list-item-title>
          <span class="nav-text subtitle-1 font-weight-medium">Subtotal</span>
        </v-list-item-title>

        <span v-if="cart.subtotal" class="nav-text">
          {{ cart.subtotal.formatted_with_code }}
        </span>

        <v-btn
          class="ml-3"
          color="red"
          label
          outlined
          small
          @click="clearCart"
        >
          Clear
        </v-btn>
      </v-list-item>

      <v-divider />

      <v-list-item class="justify-center">
        <v-btn
          color="green"
          class="white--text mt-10"
          x-large
        >
          <span>Checkout</span>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Checkout',
  props: {
    cart: {
      type: Object,
      default: () => {}
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions({
      removeProduct: 'removeProductFromCart',
      clearCart: 'clearCart',
      genToken: 'genCheckoutToken'
    })
  }
}

</script>

<style lang="scss">
.cart{
  &__header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    .title{
      margin: 0;
    }
  }
}
</style>
