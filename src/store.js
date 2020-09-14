import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentFilter: 'ALL',
        products: [
            { id: 1, name: 'Sampel Sepatu', image: 'https://via.placeholder.com/150/92c952', price: 200000, category: 'Pakaian' },
            { id: 2, name: 'Sampel Kaos', image: 'https://via.placeholder.com/150/771796', price: 50000, category: 'Pakaian' },
            { id: 3, name: 'Sampel TV', image: 'https://via.placeholder.com/150/24f355', price: 2000000, category: 'Elektronik' },
            { id: 4, name: 'Sampel Laptop', image: 'https://via.placeholder.com/150/d32776', price: 6000000, category: 'Elektronik' },
            { id: 5, name: 'Sampel Jaket', image: 'https://via.placeholder.com/150/f66b97', price: 100000, category: 'Pakaian' },
            { id: 6, name: 'Sampel Topi', image: 'https://via.placeholder.com/150/56a8c2', price: 30000, category: 'Accecoris' },
          ],
        inCart: []
    },
    getters: {
        products: state => state.products,
        inCart: state => state.inCart
    },
    mutations: {
        ADD_TO_CART(state, id) {
            state.inCart.push(id);
        },
        REMOVE_FROM_CART(state, index) {state.inCart.splice(index, 1)}
    },
    actions: {
        addToCart(context, id) {
            context.commit('ADD_TO_CART', id);
        },
        removeFromCart(context, index) {
            context.commit('REMOVE_FROM_CART', index);
        },
        filterFromIndex(context, category) {
            context.commit('filterFromIndex', category);
        },
    }
})