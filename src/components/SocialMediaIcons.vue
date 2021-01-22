<template>
  <div class="social-media-icons">
     <img src="@/assets/facebook.svg" alt="">
      <img src="@/assets/github.svg" alt="">
       <img src="@/assets/linkedin.svg" alt="">
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

.social-media-icons img {
  padding: 0 10px;
  width: 50px;
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
