<template>
  <div class="home">
    <NavBar></NavBar>
    <Hero></Hero>
    <!-- <Products></Products> -->
    <div class="products">
      <ProductsList></ProductsList>
    </div>

    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <img src="/img/svg/product.svg" alt="" width="400">
        </div>
        <div class="col-md-6">
          <h3>Learn More About us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas
            vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas
            exercitationem ratione consectetur et!
          </p>
          <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
        </div>
      </div>
    </div>
    <Login></Login>
    <MiniCart></MiniCart>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Hero from "@/components/Hero.vue";
  import Products from "@/sections/Products.vue";
  import Login from '@/components/Login.vue'

  export default {
    name: "Home",
    components: {
      Hero,
      Products,
      Login
      }
  };
</script>

<style scoped lang="scss">
  .products {
    background: #f2f2f2;
    width: 100%;
    height: 100%;
    margin: 100px auto;
  }
</style>