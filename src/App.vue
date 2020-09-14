<template>
  <div id="app">
    <div style="margin-bottom: 30px;">
    <navfilter />
    </div>
    <div class="row" style="margin-top: 30px;">
      <div class="col l9">
        <productlist v-for="product in products" :key="product.id" :id="product.id" :name="product.name" :image="product.image" :price="product.price" />
      </div>
      <div class="col l3">
        <shoppingcart />
      </div>
    </div>

   

    
      
  </div>
</template>

<script>
import productlist from './components/productlist';
import shoppingcart from './components/shoppingcart';
import navfilter from './components/navfilter';



export default {
  name: 'app',
  computed: {
    products() { return this.$store.getters.products; }
  },
  components: {
    productlist,
    shoppingcart,
    navfilter,
  }
}
</script>

<style>
  .cartIcon {
    padding: 5px;
  }
</style>
