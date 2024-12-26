<template>
    <div class="skills-container" data-aos="fade-left" data-aos-offset="200">
      <SkillBar v-for="(skill, index) in skills" :key="index" :skill="skill" />
    </div>
  </template>
  
  <script>
  import SkillBar from './SkillBar.vue';
  import AOS from 'aos';

  export default {
    components: {
      SkillBar,
    },
    data() {
      return {
        skills: [
          { name: 'JavaScript', level: 100 },
          { name: 'Vue.js', level: 100 },
          { name: 'Nuxt', level: 90 },
          { name: 'Laravel', level: 40 },
          { name: 'React', level: 60 },
          { name: 'Next', level: 20 },
        ],
      };
    },
    mounted(){
        AOS.init
      }
  };
  </script>
  
  <style>
  .skills-container {
    min-width: 850px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    color: white;
  }
  @media only screen and (max-width: 600px) {
    .skills-container {
    min-width: 370px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    color: white;
  }
}
  </style>
  