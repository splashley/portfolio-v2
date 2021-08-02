<template>
  <div class="about-wrapper" id="About">
    <div class="left">
      <div class="slide-right">
        <h1><span class="box">Hi, I'm Ashley 👋</span></h1>
        <h2>Frontend Developer, Pro Cat Mom</h2>
      </div>
      <div>
        <p class="p-about">
          Based in Montréal, Québec. I love exploring
          new technologies and designing + building awesome apps! I'm also a
          certified Scrum Product Owner. <br />Since graduating from the Full-Stack
          Web Development bootcamp at Concordia University, I've been hard at
          work expanding my knowledge of web development. You can find my work on <a
            href="https://github.com/splashley"
            target="_blank"
            rel="noopener"
            >Github</a
          >. In my spare time I
          stream web development on
          <a
            href="https://www.twitch.com/splashley"
            target="_blank"
            rel="noopener"
            >Twitch</a
          >.
        </p>
        <p class="p-about">You can reach me through the links below 👇</p>
        <div class="social-media-icons">
          <a
            href="https://twitter.com/splashleycodes"
            target="_blank"
            rel="noopener"
            ><i class="fab fa-twitter fa-2x" alt="Twitter Logo Link"></i
          ></a>
          <a href="https://github.com/splashley" target="_blank" rel="noopener"
            ><i class="fab fa-github fa-2x" alt="Github Logo Link"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/ashley-hynes/"
            target="_blank"
            rel="noopener"
            ><i class="fab fa-linkedin fa-2x" alt="LinkedIn Logo Link"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="right">
      <img
        src="@/assets/portrait.png"
        width="400px"
        alt="A portrait of Ashley Hynes"
      />
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
  padding: 10rem 18rem 3rem 18rem;
  text-align: left;
}
a {
  text-decoration: none;
  color: #190540;
  letter-spacing: normal;
  transition: all 0.2s ease-in-out;
}

a:hover {
  color: #8b7e8d;
  cursor: pointer;
  transform: scale(1.2);
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
  background: #f3f0f5;
  z-index: -1;
}

.p-about {
  margin-top: 30px;
  padding-right: 110px;
  font-size: 1.5rem;
}

@media only screen and (max-width: 1500px) {
  .p-about {
    font-size: 1.25rem;
    padding-right: 90px;
  }
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

.social-media-icons {
  color: #190540;
  margin: 0;
  text-align: left;
  padding: 2rem 0;
}

.social-media-icons i {
  padding: 0 10px;
}

a {
  color: #190540;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

i {
  transition: all 0.2s ease-in-out;
}

i:hover {
  transform: scale(1.2);
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
