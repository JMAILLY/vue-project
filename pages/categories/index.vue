<template>
  <div class="container">
    <category-list :categories="categories" />
  </div>
</template>
<script>
import CategoryList from '~/components/CategoryList'

export default {
  components: { CategoryList },
  async asyncData ({ $commerce }) {
    const { data: categories } = await $commerce.categories.list()

    return {
      categories
    }
  }
}
</script>

<style lang="scss">
  @import '/assets/scss/base.scss';
  .container{
    @include wrapper('min');
  }
</style>
