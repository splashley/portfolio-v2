<template>
  <div class="social-media-icons">
     <a href="https://twitter.com/splashleycodes" target="_blank" rel="noopener"><i class="fab fa-twitter fa-2x" alt="Twitter Logo Link"></i></a>
      <a href="https://github.com/splashley" target="_blank" rel="noopener"><i class="fab fa-github fa-2x" alt="Github Logo Link"></i></a>
       <a href="https://www.linkedin.com/in/ashley-hynes/" target="_blank" rel="noopener"><i class="fab fa-linkedin fa-2x" alt="LinkedIn Logo Link"></i></a>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>

.social-media-icons {
  color:  #190540;
  margin: 0;
  text-align: right;
  padding: 1rem;
}

.social-media-icons i {
  padding: 0 15px;
}

a {
color: #190540;
text-decoration: none;
  transition: all 0.2s ease-in-out;
}

a:hover {
  color: #fedb63;
  cursor: pointer;
  transform: scale(1.2);
}

@media only screen and (max-width: 1200px) {
.social-media-icons img {
  padding: 0 6px;
  width: 40px;
}
}

@media only screen and (max-width: 1024px) {
.social-media-icons img {
    padding: 0 6px;
  width: 40px;
}
}

@media only screen and (max-width: 768px) {
.social-media-icons img {
    padding: 0 6px;
  width: 40px;
}
}
</style>
