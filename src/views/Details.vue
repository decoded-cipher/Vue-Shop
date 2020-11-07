<template>
  <div class="details">
    <NavBar></NavBar>
    <About></About>
  </div>
</template>

<script>
import About from "@/components/About.vue";
  export default {
    name: 'Details',
    components: {
      About
    }
  }
</script>