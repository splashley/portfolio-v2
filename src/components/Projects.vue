<template>
  <div class="projects" id="Projects">
    <h1>Projects</h1>
    <div class="projects-section">
      <div class="single-project">
        <h2>Project Title</h2>
        <img src="../assets/project1.jpg" width="70%" alt="" />
        <p>Here is all about my project blah blah blah</p>
        <p>Tech Stack: React, Styled-Components</p>
      </div>
      <div class="single-project">
        <h2>Project Title</h2>
        <img src="../assets/project1.jpg" width="70%" alt="" />
        <p>Here is all about my project blah blah blah</p>
        <p>Tech Stack: React, Styled-Components</p>
      </div>
      <div class="single-project">
        <h2>Project Title</h2>
        <img src="../assets/project1.jpg" width="70%" alt="" />
        <p>Here is all about my project blah blah blah</p>
        <p>Tech Stack: React, Styled-Components</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  margin: 10px 0;
}
.projects {
  text-align: left;
  width: 100%;
  padding: 4rem 18rem;
}

.projects-section {
  display: flex;
}

.single-project {
  background-color: #f3f0f5;
  border-radius: 5px;
  width: 350px;
  height: 400px;
  padding: 10px;
  margin: 20px;
  text-align: center;
}

.single-project:first-child {
  margin-left: 0;
}

@media only screen and (max-width: 1200px) {
  .projects {
    padding: 3rem 10rem;
  }
}

@media only screen and (max-width: 1024px) {
  .projects {
    padding: 2rem 8rem;
  }
}

@media only screen and (max-width: 768px) {
  .projects-section {
    display: flex;
    flex-direction: column;
  }
  .single-project {
    margin-left: 0;
    margin-top: 20px;
  }

  .projects {
    padding: 1rem 2rem;
  }
}
</style>
