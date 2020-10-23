// import de commerce via API
import CommerceSDK from '@chec/commerce.js'

const commerce = new CommerceSDK('pk_190616467cec4e8847640611660746512074197a2322d')

export default (_, inject) => {
  inject('commerce', commerce)
}
