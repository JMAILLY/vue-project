export const state = () => ({
  filters: {
    category: 0,
    sort: 'ASD'
  }
})

export const mutations = {
  newCat (state, id) {
    state.filters.category = id
  },
  newSort (state, value) {
    state.filters.sort = value
  }
}
