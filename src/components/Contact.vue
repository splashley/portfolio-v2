<template>
  <div class="hello" id="Contact">
<h1>Contact</h1>
<p>You can contact me at <a href="mailto:ashleyjlhynes@gmail.com">ashleyjlhynes@gmail.com</a></p>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
div {
  text-align: left;
  padding: 4rem 18rem;
}

p {
  margin: 20px 0 30px 0;
}

a {
  color: #190540;
}

@media only screen and (max-width: 1200px) {
div {
  padding: 3rem 10rem;
}
}

@media only screen and (max-width: 1024px) {
div {
  padding: 2rem 8rem;
}
}

@media only screen and (max-width: 768px) {
div {
  padding: 1rem 2rem;
}
}
</style>
