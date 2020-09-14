<template>
   <div class="col l4">
        <div class="card">
          <div class="card-image">
            <img :src="image" height="250">
          </div>
          <div class="card-content">
            <div class="row">
              <div class="col l6">
                {{ name }}
              </div>
              <div class="col l6">
                {{ "Rp." + price }}
              </div>
            </div>
          </div>
          <div class="card-action">
            <a class="waves-effect waves-light btn" @click="addToCart(id)">Add To Cart</a>
          </div>
        </div>
    </div>
</template>

<script>
import MdCartIcon from '../../node_modules/vue-ionicons/dist/md-cart.vue'

export default {
  name: 'productlist',
  props: ['id', 'name', 'image', 'price'],
  methods: {
      addToCart(id) {
          this.$store.dispatch('addToCart', id);
      }
  },
  components: {
    MdCartIcon
    }
}
</script>
