<template>
  <div class="MiniCart">


    <div class="modal fade" id="miniCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">My Bag</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <ul>
              <li v-for="item in this.$store.state.cart" class="media my-3">
                <img :src="item.productImage" width="80px" class="align-self-center mr-3" alt="">
                <div class="mr-3 media-body">
                  <h5 class="mt-0">{{item.productName}}
                    <span class='btn float-right' @click="$store.commit('removeFromCart',item)">&times;</span>
                  </h5>
                  <p class="mt-0">₹ {{item.productPrice}}</p>
                  <p class="mt-0">Quantity : {{item.productQuantity }}</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Continue Shopping</button>
            <button type="button" @click="checkout()" class="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "MiniCart",
    props: {
      msg: String
    },
    methods: {

      checkout() {
        $('#miniCart').modal('hide')
        this.$router.push('/checkout')
      }

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>