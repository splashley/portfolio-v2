<template>
  <div class="skills" id="Skills">
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
        { name: "Backend", sublist: ["Node.js", "Express", "MongoDB"] },
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
  margin: 20px 20px 0 20px;
    background-color: #f3f0f5;
  border-radius: 5px;
  width: 350px;
  height: 350px;
  padding: 30px;
}

.skillName-list:first-child {
  margin-top: 10px;
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

  .skills-group {
  display: flex;
  flex-direction: column;
  }

.skillName {
  margin-left: 0px;
    font-size: 1.5rem;
    background-color: #f3f0f5;
  border-radius: 5px;
  width: 300px;
  height: 100%;
  padding: 30px;
}

}
</style>
