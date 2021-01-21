<template>
  <div id="app">
    <Header />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    About,
    Projects,
    Contact,
    Footer
  }
}
</script>

<style>
#app {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin: 0;
  padding: 0;
}
</style>
