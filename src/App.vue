<template>
  <div id="app">
    <Navbar class="public-header"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
  .public-header{
    z-index: 2;
    width: 100%;
    /* height: 100%; */
    position: fixed;
    top: 0;
    opacity: 1;
  }
  /* @media screen and (min-width: 992px){
    .public-header{
      height: 100% !important;
    }
  } */
</style>
