/* Navigation */
<template>
  <section>
    <nav class="navigation">
      <div id="menuToggle">
        <input type="checkbox">
        <span />
        <span />
        <span />
        <ul id="menu" />
      </div>
      <n-link to="/">
        <img src="~/assets/images/Eko_Logo.png">
      </n-link>
      <v-btn text @click.stop="drawer = !drawer">
        <CartIcon class="icon" />
      </v-btn>
    </nav>
    <div v-if="cart">
      <checkout v-model="drawer" :cart="cart" @closeDrawer="drawer = !drawer" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import CartIcon from '~/assets/images/shopping-bag.svg'
import Checkout from '~/components/Checkout'

export default {
  components: { CartIcon, Checkout },
  data: () => ({
    // ouverture du menu cart
    drawer: false
  }),
  computed: {
    // recupération des produits, panier, total
    ...mapGetters({
      products: 'products',
      cart: 'cart',
      subtotal: 'cartSubtotal'
    })
  }
}
</script>

<style lang="scss">
  @import '/assets/scss/base.scss';
  .navigation{
    @include wrapper('max');
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    img{
      height: 50px;
    }
  }
  #menuToggle {
    display: block;
    position: relative;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;

    a {
      text-decoration: none;
      color: #232323;
      transition: color 0.3s ease;

      &:hover {
        color: tomato;
      }
    }

    input {
      display: block;
      width: 40px;
      height: 32px;
      position: absolute;
      top: -7px;
      left: -5px;
      cursor: pointer;
      opacity: 0; /* hide this */
      z-index: 2; /* and place it over the hamburger */
      -webkit-touch-callout: none;
    }

    span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;

      background: black;
      border-radius: 3px;

      z-index: 1;

      transform-origin: 4px 0px;

      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
      opacity 0.55s ease;
    }

    &:first-child {
      transform-origin: 0% 0%;
    }

    &:nth-last-child(2) {
      transform-origin: 0% 100%;
    }

    input:checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
      background: #232323;
    }

    input:checked ~ span:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    input:checked ~ span:nth-last-child(2) {
      transform: rotate(-45deg) translate(0, -4px);
    }

    input:checked ~ ul {
      transform: none;
    }
  }

  #menu {
    position: absolute;
    width: 300px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;

    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    transform-origin: 0% 0%;
    transform: translate(-100vw, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);

    li {
      padding: 10px 0;
      font-size: 22px;
    }
  }

</style>
