<template>
  <div class="blog-wrapper">
    <div class="about-blog">
      <div>
        <h1><span class="box">Blog</span></h1>
      </div>
      <div class="portrait-blog">
        <img src="../assets/blogportrait.png" alt="" />
      </div>
      <div class="social-media">
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
      <div class="bio">
        You want your tree to have some character. Make it special. Do an
        almighty painting with us. There we go. Play with the angles. Only think
        about one thing at a time. Don't get greedy. Only eight colors that you
        need.
      </div>
    </div>
    <hr class="line-break" />
    <div class="blog-post">
      <h2 class="blog-title">Generic Blog Post</h2>
      <h3 class="blog-date">April 1st 2021</h3>
      <p>
        A fan brush can be your best friend. Every highlight needs it's own
        personal shadow. There's not a thing in the world wrong with washing
        your brush. Just pretend you are a whisper floating across a mountain.
        If you've been in Alaska less than a year you're a Cheechako. Now then,
        let's play. Every time you practice, you learn more. You have to make
        those little noises or it won't work. There isn't a rule. You just
        practice and find out which way works best for you. This is the fun part
        We artists are a different breed of people. We're a happy bunch. If you
        hypnotize it, it will go away. We'll put some happy little leaves here
        and there. Just make little strokes like that. I'm gonna add just a tiny
        little amount of Prussian Blue. Think about a cloud. Just float around
        and be there. There it is. I thought today we would do a happy little
        picture. Now, we're going to fluff this cloud. Don't be bashful drop me
        a line.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
h1 {
  font-size: 4rem;
  margin-bottom: 10px;
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

.blog-wrapper {
  padding: 6rem 18rem;
}
.portrait-blog {
  padding: 50px 0 20px 0;
}

.portrait-blog img {
  max-width: 200px;
}

.social-media {
  padding: 5px;
}

.social-media a {
  padding: 0 10px;
}

.bio {
  text-align: left;
  padding: 20px 0 50px 0;
}

.blog-post {
  text-align: left;
  padding: 50px 0;
}

.blog-date {
  padding-bottom: 15px;
}

.line-break {
  border-top: 1px solid #f3f0f5;
}
@media only screen and (max-width: 1500px) {
}

@media only screen and (max-width: 1200px) {
}

@media only screen and (max-width: 1024px) {
}

@media only screen and (max-width: 768px) {
}
</style>
