<template>
  <div class="skills">
    <h1>Skills</h1>
    <div>
      <div class="skills-group">
          <div v-for="(skill, index) in skills" :key="index" class="skillName">
            {{ skill.name }}
            <div
              v-for="(sublistitem, index) in skill.sublist"
              :key="index"
              class="skillName-list"
            >
              <img src="@/assets/plusicon.png" width="15px" alt="" /> {{ sublistitem }}
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: "Frontend", sublist: ["HTML/CSS", "Javascript", "React.js", "Vue.js", "Styled-Components", "TailwindCSS"] },
        { name: "Backend", sublist: ["Node.js", "Express"] },
        { name: "Tools", sublist: ["Github", "Git", "JIRA", "Trello", "Asana", "Adobe Photoshop", "Adobe XD"] }
      ]
    };
  }
};
</script>

<style scoped>
.skills {
  padding: 4rem 18rem;
}

.skills-group {
  display: flex;
}

.skillName:first-child {
  margin-left: 0px;
}

.skillName {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 10px 40px 0 40px;
}

.skillName-list {
  font-size: 1rem;
  font-weight: 400;
  line-height: 2;
}

@media only screen and (max-width: 1200px) {
  .skills {
    padding: 3rem 10rem;
  }
}

@media only screen and (max-width: 1024px) {
  .skills {
    padding: 2rem 8rem;
  }
}

@media only screen and (max-width: 768px) {
  .skills {
    padding: 1rem 2rem;
  }
}
</style>
