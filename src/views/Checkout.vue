<template>
  <div class="Checkout">
    <NavBar></NavBar>


    <div class="container mt-5 pt-5">
      <div class="row">

        <div class="col-md-8">
          <h4 class="py-4">Checkout page</h4>
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

        <div class="col-md-4 mt-5">
          <h5 class="">
            Total Price : {{ this.$store.getters.totalPrice }}
            <!-- Total Price : ₹ 5243 -->
          </h5>
          <!-- <card class='stripe-card' :class='{ complete }' stripe='pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'
            :options='stripeOptions' @change='complete = $event.complete' /> -->

          <button class='btn btn-success mt-3 py-2 px-5'>Pay with Credit Card</button>
        </div>

      </div>

    </div>



  </div>
</template>

<script>
  export default {
    name: 'Checkout'
  }
</script>