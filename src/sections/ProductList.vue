<template>
  <div class="products py-5" id="products">
    <div class="container">
      <h1 class="text-center pt-5">Our Products List</h1>
      <div class="row py-5">

        <div class="col-md-4" v-for="product in products">
          <div class="card product-item">

            <carousel :perPage="1">
              <slide v-for="(image, index) in product.images">
                <img :src="image" class="card-img-top" alt="...">
              </slide>
            </carousel>

            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <h6 class="text-muted">₹ {{ product.price }}</h6>
              <p class="card-text" v-html="product.description"></p>
              <a href="#" class="btn btn-primary">Add to Cart</a>

              <!-- <add-to-cart :image="getImage(product.images)" :p-id="product.id" :price="product.price"
                :name="product.name">
              </add-to-cart> -->
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import {
    db
  } from '../firebase';


  export default {
    name: "Products-list",
    props: {
      msg: String
    },

    data() {
      return {
        products: [],

      }
    },

    methods: {

      getImage(images) {
        return images[0];
      }

    },

    firestore() {
      return {
        products: db.collection('products'),
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .products {
    background: #f2f2f2;
    width: 100%;
    height: 100%;
    margin: 100px auto;
  }

  img {
    height: auto;
    width: 250px;
    padding-left: 30px;;
    margin: 30px auto auto 30px;
  }
</style>