<template>
  <div class="projects">
    <h1>Projects</h1>
    <div class="projects-section">
      <div class="single-project">
        blah blah blah
      </div>
      <div class="single-project"></div>
      <div class="single-project"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
  margin-top: 10px;
}

  .projects {
    padding: 1rem 2rem;
  }

}
</style>
