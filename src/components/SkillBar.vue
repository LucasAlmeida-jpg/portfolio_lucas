<template>
    <div class="skill-bar">
      <span data-aos="fade-right" data-aos-offset="200" class="skill-name">{{ skill.name }}</span>
      <div class="bar-container" data-aos="fade-left" data-aos-offset="200" >
        <div data-aos="fade-left" data-aos-offset="200" class="bar" :style="{ width: skill.level + '%' }"></div>
      </div>
    </div>
  </template>
  
  <script>
  import AOS from 'aos';

  export default {
    props: {
      skill: {
        type: Object,
        required: true,
      },
    },
    mounted(){
        AOS.init
      }
  };
  </script>
  
  <style scoped>
  .skill-bar {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
  
  .skill-name {
    width: 120px;
    font-size: 14px;
    color: #fff;
  }
  
  .bar-container {
    flex: 1;
    background-color: #333;
    border-radius: 5px;
    overflow: hidden;
    height: 10px;
    margin-left: 10px;
  }
  
  .bar {
    height: 100%;
    background-color:  rgb(0, 220, 130) !important;
    transition: width 0.3s ease;
  }

  </style>
  