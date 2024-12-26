<template>
    <div class="skill-bar">
      <span class="skill-name">{{ skill.name }}</span>
      <div class="bar-container">
        <div class="bar" :style="{ width: skill.level + '%' }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      skill: {
        type: Object,
        required: true,
      },
    },
  
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
    border-radius: 25px;
    overflow: hidden;
    height: 25px;
    margin-left: 10px;
  }
  
  .bar {
    height: 100%;
    background-color:  rgb(0, 220, 130) !important;
    transition: width 0.3s ease;
  }
  </style>
  