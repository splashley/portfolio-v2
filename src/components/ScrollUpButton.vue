<template>
  <button @click="$emit('scroll-up')" class="scrollUpBtn">
    <i class="fas fa-arrow-up"></i>
  </button>
</template>

<script></script>

<style scoped>
.scrollUpBtn {
  /* display: none; */
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  cursor: pointer;
  color: white;
  font-size: 2rem;
  padding: 10px 15px 5x 15px;
  border-radius: 10px;
  border: none;
}

.scrollUpBtn:hover {
  background: #bcafc4;
}
@media only screen and (max-width: 768px) {
    .scrollUpBtn {
  background: #fedb63;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  border: none;
}
}
</style>
