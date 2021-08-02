<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/blog">Blog</router-link>
    </div> -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer
  }
};
</script>

<style>
#app {
  font-family: "TTNormsPro-Regular";
  text-align: center;
  color: #8B7E8D;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #8B7E8D;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
