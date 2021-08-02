<template>
  <div id="app">
    <About />
    <Projects id="Projects" />
    <Skills id="Skills" />
    <Contact id="Contact" />
    <ScrollUpButton v-on:scroll-up="scrollToTop()" />
  </div>
</template>

<script>
import About from "../components/About.vue";
// import SocialMediaIcons from "../components/SocialMediaIcons.vue";
// import Projects from "../components/Projects.vue";
// import Skills from "../components/Skills.vue";
// import Contact from "../components/Contact.vue";
import ScrollUpButton from "../components/ScrollUpButton.vue";

export default {
  name: "Home",
  components: {
    About,
    ScrollUpButton
  },
  methods: {
    viewProjects: function() {
      const projectId = document.getElementById("Projects");
      projectId.scrollIntoView({ behavior: "smooth", block: "center" });
    },
    viewSkills: function() {
      const skillsId = document.getElementById("Skills");
      skillsId.scrollIntoView({ behavior: "smooth", block: "center" });
    },
    viewContact: function() {
      const ContactId = document.getElementById("Contact");
      ContactId.scrollIntoView({ behavior: "smooth", block: "center" });
    },
    scrollToTop() {
      const scrollUpEl = document.getElementById("header");
      scrollUpEl.scrollIntoView({ behavior: "smooth", block: "center" });
      //   window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
#app {
  font-family: "TTNormsPro-Regular", sans-serif;
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

.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  padding: 4rem 18rem;
}

a {
  color: #190540;
  text-decoration: none;
  letter-spacing: 0.1rem;
  transition: all 0.2s ease-in-out;
}

a:hover {
  color: #fedb63;
  cursor: pointer;
  transform: scale(1.2);
}

ul {
  list-style: none;
  display: flex;
}

.nav-links li {
  padding: 0 20px;
  font-size: 1.5rem;
}

@media only screen and (max-width: 1200px) {
  .header {
    padding: 3rem 10rem;
  }
}

@media only screen and (max-width: 1024px) {
  .header {
    padding: 1rem 8rem;
  }
}

@media only screen and (max-width: 768px) {
  .header {
    padding: 0.5rem 2rem;
  }
  .nav-links {
    display: none;
  }
}
</style>
