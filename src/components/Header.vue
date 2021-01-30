<template>
  <nav class="header">
    <div class="nav-links">
      <ul>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </div>
    <div>
      <SocialMediaIcons />
    </div>
  </nav>
</template>

<script>
import SocialMediaIcons from "./SocialMediaIcons.vue";
export default {
  name: "Header",
  components: { SocialMediaIcons }
};
</script>

<style scoped>
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
letter-spacing: 0.10rem;
}

a:hover {
  color: #fedb63;
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
