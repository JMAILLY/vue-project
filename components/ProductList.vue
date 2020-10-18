/* Product list */
<template>
  <ul class="product-list">
    <li v-for="product in products" :key="product.permalink">
      <n-link
        :to="{
          name: 'products-permalink',
          params:{permalink: product.permalink}
        }"
      >
        <v-card
          color="#1F7087"
          dark
        >
          <div class="product-content">
            <div>
              <v-card-title
                class="headline"
              >
                <product-view :product="product" />
              </v-card-title>

              <v-card-subtitle>Découvrir</v-card-subtitle>

              <v-card-actions>
                <v-btn
                  class="ml-2 mt-3"
                  fab
                  icon
                  height="40px"
                  right
                  width="40px"
                  @click="startMusic"
                >
                  <v-icon>mdi-play</v-icon>
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar
              class="ma-3"
              size="125"
              tile
            >
              <v-img :src="product.media.source" />
            </v-avatar>
          </div>
        </v-card>
      </n-link>
    </li>
  </ul>
</template>
<script>
import ProductView from './ProductView'
export default {
  components: { ProductView },
  props: ['products'],
  data () {
    return {
      audio: false
    }
  },
  methods: {
    startMusic (e) {
      e.preventDefault()
      if (this.audio === false) {
        new Audio('https://music.egonair.com/2019/E/Michael%20Jackson%20-%20Rock%20With%20You.mp3').play()
        this.audio = true
      }
    }
  }
}
</script>
<style lang="scss">
  @import '/assets/scss/base.scss';
  .product-list{
    @include wrapper('min');
    margin-top: 50px;
    li{
      margin-bottom: 15px;
    }
  }
  .product-content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .v-avatar{
      margin-right: 15px;
    }
  }
</style>
