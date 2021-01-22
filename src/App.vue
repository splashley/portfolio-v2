<template>
  <div id="app">
    <Header />
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    About,
    Projects,
    Skills,
    Contact,
    Footer
  }
};
</script>

<style>
#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #190540;
  margin: 0;
  padding: 0;
}

*,
*::after,
*::before {
box-sizing: border-box;
margin: 0;
padding: 0;
position: relative;
}
</style>
