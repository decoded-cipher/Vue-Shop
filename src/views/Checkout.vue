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
            <!-- Total Price : {{ this.$store.getters.totalPrice | currency  }} -->
            Total Price : ₹ 5243
          </h5>
          <card class='stripe-card' :class='{ complete }' stripe='pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'
            :options='stripeOptions' @change='complete = $event.complete' />

          <button class='pay-with-stripe btn btn-success mt-3 py-2 px-5' @click='pay' :disabled='!complete'>Pay with Credit Card</button>
        </div>

      </div>

    </div>



  </div>
</template>

<script>
  export default {
    name: 'Checkout',
    data() {
      return {
        complete: false,
        stripeOptions: {
          
        }
      }
    },

    // components: {
    //   Card
    // },

    methods: {
      pay() {
        createToken().then(data => console.log(data.token))
      }
    }
  }
</script>

<style>
  /**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
  .StripeElement {
    box-sizing: border-box;

    height: 40px;

    padding: 10px 12px;

    border: 1px solid transparent;
    border-radius: 4px;
    background-color: white;

    box-shadow: 0 1px 3px 0 #e6ebf1;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
  }

  .StripeElement--focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
  }

  .StripeElement--invalid {
    border-color: #fa755a;
  }

  .StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
  }
</style>