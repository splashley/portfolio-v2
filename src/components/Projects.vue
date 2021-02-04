<template>
  <div class="projects" id="Projects">
    <h1>Projects</h1>
    <div class="projects-section">
      <div class="single-project">
        <div class="h2-height">
          <h2>Girls Just Want To Have Fund$</h2>
        </div>
        <img
          src="../assets/project1.jpg"
          class="project-img"
          alt="Girls Just Want To Have Fund$ - Project"
        />
        <p>
          Built at the 2021 SheHacks Hackathon, this app is a friendly introduction
          to finance for girls between the age of 10-15.
        </p>
        <p>
          <strong>Tech Stack:</strong> React, styled-components, Avataaars API
        </p>
        <a
          href="https://github.com/splashley/girls-just-want-to-have-funds-app"
          target="_blank"
          rel="noopener"
          aria-label="View on Github"
          ><button class="project-btn">View on Github</button></a
        >
        <a
          href="https://girls-just-want-to-have-funds.netlify.app/"
          target="_blank"
          rel="noopener"
          aria-label="View App"
          ><button class="project-btn">View App</button></a
        >
      </div>
      <div class="single-project">
        <div class="h2-height">
          <h2>All About Wine</h2>
        </div>
        <img
          src="../assets/project2.jpg"
          class="project-img"
          alt="All About Wine - Project"
        />
        <p>
          A small web app built using the Spoonacular API to quickly find
          information about your favorite wines and food pairings to go along
          with.
        </p>
        <p><strong>Tech Stack:</strong> Vue.js, Vuex, Spoonacular API</p>
        <a
          href="https://github.com/splashley/all-about-wine-app"
          target="_blank"
          rel="noopener"
          aria-label="View on Github"
          ><button class="project-btn">View on Github</button></a
        >
        <a
          href="https://all-about-wine.netlify.app/"
          target="_blank"
          rel="noopener"
          aria-label="View App"
          ><button class="project-btn">View App</button></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  font-size: 1.25rem;
  margin: auto 0;
  padding: 5px;
}
.projects {
  text-align: left;
  width: 100%;
  padding: 4rem 18rem;
}

.projects-section {
  display: flex;
}

.h2-height {
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.single-project {
  background-color: #f3f0f5;
  border-radius: 5px;
  width: 390px;
  padding: 10px;
  margin: 20px;
  text-align: center;
}

.single-project:first-child {
  margin-left: 0;
}

.single-project p {
  font-size: 0.9rem;
  text-align: left;
  padding: 10px;
}

.project-img {
  border-radius: 10px;
  width: 90%;
  height: 50%;
}

.project-btn {
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 150px;
  font-family: "Quicksand", sans-serif;
  background: #190540;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.project-btn:hover {
  background: #190540;
  transform: scale(1.2);
}

@media only screen and (max-width: 1300px) {
    .project-img {
  border-radius: 10px;
  width: 90%;
  height: 40%;
}
}

@media only screen and (max-width: 1200px) {
  .projects {
    padding: 3rem 10rem;
  }

  .project-img {
  border-radius: 10px;
  width: 90%;
  height: 40%;
}
}

@media only screen and (max-width: 1024px) {
  .projects {
    padding: 2rem 8rem;
  }
    .project-img {
  border-radius: 10px;
  width: 90%;
  height: 30%;
}
}

@media only screen and (max-width: 768px) {
  h2 {
    font-size: 1.25rem;
  }

  .projects-section {
    display: flex;
    flex-direction: column;
  }
  .single-project {
    margin-left: 0;
    margin-top: 20px;
    border-radius: 5px;
    width: 200px;
    padding: 10px;
    margin: 20px;
    text-align: center;
  }

  .single-project:first-child {
    margin-left: 20px;
  }

  .project-img {
  border-radius: 10px;
  width: 90%;
  height: 50%;
}

  .projects {
    padding: 1rem 2rem;
  }
}
</style>
