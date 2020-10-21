// import de commerce
import CommerceSDK from '@chec/commerce.js'
const commerce = new CommerceSDK(process.env.NUXT_ENV_CHEC_PUBLIC_API_KEY)
export const state = () => ({
  filters: {
    category: null,
    sort: 'ASD'
  },
  token: {},
  products: [],
  cart: {}
})
// Actions
export const actions = {
  async nuxtClientInit ({ dispatch }) {
    await dispatch('getProducts')
    if (this.state.products) {
      await dispatch('retrieveCart')
    }
  },

  async getProducts ({ commit }) {
    const products = await commerce.products.list()
    if (products) {
      commit('setProducts', products.data)
    }
  },

  async retrieveCart ({ commit }) {
    const cart = await commerce.cart.retrieve()
    if (cart) {
      commit('setCart', cart)
    }
  },

  async addProductToCart ({ commit }, { id, count }) {
    const addProduct = await commerce.cart.add(id, count)
    if (addProduct) {
      commit('setCart', addProduct.cart)
    }
  },

  async removeProductFromCart ({ commit }, payload) {
    const removeProduct = await commerce.cart.remove(payload)

    if (removeProduct) {
      commit('setCart', removeProduct.cart)
    }
  },

  async clearCart ({ commit }) {
    const clear = await commerce.cart.empty()

    if (clear) {
      commit('clearCart')
    }
  },
  async genCheckoutToken ({ commit }, payload) {
    const token = await commerce.checkout.generateToken(payload, {
      type: 'cart'
    })

    if (token) {
      commit('setToken', token)
    }
  }
}

// Mutations
export const mutations = {
  newCat (state, id) {
    state.filters.category = id
  },
  newSort (state, value) {
    state.filters.sort = value
  },
  setToken (state, payload) {
    state.token = payload
  },

  setProducts (state, payload) {
    state.products = payload
  },

  setCart (state, payload) {
    state.cart = payload
  },

  clearCart (state) {
    state.cart = {}
  }
}

// Getters
export const getters = {
  products (state) {
    return state.products
  },

  cart (state) {
    if (process.client) {
      if (state.cart) {
        return state.cart
      }
    }
  },

  cartSubtotal (state) {
    if (process.client) {
      if (state.cart.subtotal) {
        return state.cart.subtotal.formatted
      }
    }
  }
}
