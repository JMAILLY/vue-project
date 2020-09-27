<template>
  <div>
    <category-list :categories="this.$store.state.categories.data" />
  </div>
</template>
<script>
import CategoryList from '~/components/CategoryList'
export default {
  components: { CategoryList }
}
</script>
