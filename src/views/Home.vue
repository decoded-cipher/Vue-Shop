<template>
  <div class="home">
    <NavBar></NavBar>
    <Hero></Hero>
    <!-- <Products></Products> -->
    <div class="products">
      <ProductsList></ProductsList>
    </div>
    <About></About>

    <Login></Login>
    <MiniCart></MiniCart>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Hero from "@/components/Hero.vue";
  import Products from "@/sections/Products.vue";
  import Login from '@/components/Login.vue'
  import About from "@/components/About.vue";

  export default {
    name: "Home",
    components: {
      Hero,
      Products,
      Login,
      About
      }
  };
</script>

<style scoped lang="scss">
  .products {
    background: #f2f2f2;
    width: 100%;
    height: 100%;
    margin: 100px auto 50px auto;
  }
</style>