<template>
  <div class="about-wrapper">
    <div class="left">
      <div class="slide-right">
        <h1><span class="box">Hi, I'm Ashley</span></h1>
        <h2>Front-End Developer</h2>
      </div>
      <div>
        <p class="p-about">
          Let's put some happy little bushes on the other side now. We need dark
          in order to show light. I guess that would be considered a UFO. A big
          cotton ball in the sky. You don't want to kill all your dark areas
          they are very important.Let's put some happy little bushes on the
          other side now. We need dark in order to show light. I guess that
          would be considered a UFO. A big cotton ball in the sky. You don't
          want to kill all your dark areas they are very important.
        </p>
      </div>
    </div>
    <div class="right">
      <img src="@/assets/test.png" width="400px" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-size: 4rem;
  margin-bottom: 10px;
}

h2 {
  font-size: 3rem;
}
.about-wrapper {
  display: flex;
  padding: 4rem 18rem;
}

.right {
  padding: 5px;
}
.slide-right {
  width: 100%;
  overflow: hidden;
}
.slide-right h1,
h2 {
  animation: 1s slide-right 1s forwards;
  transform: translateX(-100%);
}
@keyframes slide-right {
  to {
    transform: translateX(0);
  }
}
.box:before {
  position: absolute;
  content: "";
  width: 100%;
  height: 30px;
  bottom: 0px;
  background: #fedb63;
  z-index: -1;
}

.p-about {
  margin-top: 30px;
  padding-right: 50px;
  font-size: 1.5rem;
}

@media only screen and (max-width: 1200px) {
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2rem;
  }
  .about-wrapper {
    padding: 3rem 10rem;
  }
  .p-about {
    margin-top: 20px;
    padding-right: 30px;
    font-size: 1rem;
  }
  .right img {
    width: 250px;
  }
}

@media only screen and (max-width: 1024px) {
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  .box:before {
    height: 20px;
  }
  .about-wrapper {
    padding: 2rem 8rem;
  }
  .p-about {
    margin-top: 20px;
    padding-right: 20px;
    font-size: 1rem;
  }
  .right img {
    width: 250px;
  }
}

@media only screen and (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.25rem;
  }
  .about-wrapper {
    padding: 1rem 2rem;
  }
  .box:before {
    height: 15px;
  }
  .p-about {
    margin-top: 10px;
    padding-right: 10px;
    font-size: 1rem;
  }
  .right img {
    display: none;
  }
}
</style>
