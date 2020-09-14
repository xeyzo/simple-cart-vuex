<template>
<div id="shopping-cart">

  <div class="cart-btn">
    <a class="waves-effect waves-light btn">Cart : {{ cartLength }}</a>
  </div>
  <table v-for="(item, index) in cart">
    <tr>
      <td class="center-align center">{{ item.name }}</td>
      <td class="center-align center">{{ 'Rp.' + item.price }}</td>
      <td class="center-align center">
          <a class="waves-effect waves-light btn red" @click="removeFromCart(index)">Remove</a>         
      </td>
    </tr>  
  </table>
  
  <table>
    <tr>
        <th>Total</th>
        <th>{{ 'Rp.' + total }}</th>
    </tr>   
  </table>
</div>
</template>

<script>
import IosCloseIcon from '../../node_modules/vue-ionicons/dist/ios-close.vue'

export default {
  name: 'shoppingcart',
  computed: {
    inCart() { return this.$store.getters.inCart; },
    cartLength(){ return this.inCart.length; },
    cart(){
        return this.$store.getters.inCart.map((cartproduct) => {
            return this.$store.getters.products.find((itemForSale) => {
                return cartproduct === itemForSale.id;
            });
        });
    },
    total(){
        return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    }
  },
  components: {
      IosCloseIcon
  },
  methods: {
      removeFromCart(index) {
          this.$store.dispatch('removeFromCart', index)
      }
  }
};

</script>

<style>
    table {
        width: 320px;
    }
    tr {
        width: 300px;
    }
    td {
        width: 90px;
        margin: auto;
        padding: 2px;
    }

</style>
