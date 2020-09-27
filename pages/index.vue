<template>
  <div class="wrapper">
    <main class="main">
      <Vynile />
      <n-link to="/products">Products</n-link>
      <n-link to="/categories">Categories</n-link>
    </main>
  </div>
</template>

<script>
import Vynile from '~/components/Vynile'

export default {
  name: 'HomePage',

  components: {
    Vynile
  }
}
</script>
