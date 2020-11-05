import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var cart = window.localStorage.getItem('cart');

export default new Vuex.Store({
    state: {
        cart: cart ? JSON.parse(cart) : []
    },
    mutations: {
        addToCart(state, item) {

            var found = state.cart.find(product => product.productId == item.productId);
            if (found) {
                found.productQuantity++;
            } else {
                state.cart.push(item);
            }
            this.commit('saveData');
        },

        saveData(state){
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
          },

          removeFromCart(state, item){
            var index = state.cart.indexOf(item);
            state.cart.splice(index,1);
            this.commit('saveData');
        },
    }
})