<template>
  <div class="mainViewSection mb-5">
    <section class="slide-in">
      <AnimationView />
      <div class="text-center">
        <h1>
          <span v-for="(char, index) in animatedText" :key="index">{{ char }}</span>
          <span v-bind="showCursor" class="cursor">_</span>
        </h1>

        <div class="row">
          <div class="mt-4 container d-flex justify-content-center align-items-center">
            <p class="col-md-7 card">
              {{ $t('aboutLucas') }} {{ $t('aboutLucasSub') }}
              <img class="emoji" src="../assets/emoji.png" alt="">
            </p>
          </div>
        </div>
        <ScrollTop />
        <span class="slidedown-icon h-8 w-8 text-primary-contrast rounded-full inline-flex items-center justify-center">
          <i class="pi pi-arrow-down" />
        </span>
      </div>
    </section>
    <section>
      <div class="container mt-5" data-aos="fade-up">
        <ul class="nav nav-pills my-3 d-flex justify-content-center" id="pills-tab" role="tablist">
          <li class="nav-item aos-init" role="presentation">
            <div class="tag me-2 nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
              role="tab" aria-controls="pills-home" aria-selected="true">
              {{ $t('professionals_tag') }}</div>
          </li>
          <li class="nav-item" role="presentation">
            <div class="tag nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
              role="tab" aria-controls="pills-profile" aria-selected="false">{{
            $t('educational_tag') }}</div>
          </li>
        </ul>

        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
            tabindex="0">
            <div class="my-4 text-center experience" data-aos="fade-left" data-aos-offset="200">
              <h1 class="main-title">{{ $t('experience_tag') }}</h1>
            </div>
            <Timeline :value="events" align="alternate" class="w-full">
              <template #content="slotProps">
                <div v-if="slotProps.index === 0" data-aos="fade-left" data-aos-offset="200">
                  <div class="mb-1 d-flex align-items-center">
                    <span class=" text">Creators LLC - {{ $t('frontEnd') }}</span><span class="tag ms-3">Remote</span>
                  </div>
                  <div class="mt-5">
                    <p>{{ $t('experience') }}
                      <transition name="move">
                        <span class="role" @click="changeState"> <i
                            :class="showDetails ? 'pi pi-arrow-up' : 'pi pi-arrow-down'"></i>
                        </span>
                      </transition>
                    </p>
                    <transition name="fade">
                      <div class="mt-3 r" v-show="showDetails" @click.stop>
                        <p class="role">
                          {{ $t('aboutXp') }}
                        </p>
                        <p>{{ $t('conclusionNanads') }}</p>
                      </div>
                    </transition>
                    <span>(2022 - {{ $t('currently') }})</span>
                  </div>
                </div>
                <div v-else-if="slotProps.index === 1" data-aos="fade-left" data-aos-offset="200">
                  <div class="mb-1 d-flex align-items-center">
                    <span class=" text">{{ $t('ste_pl') }}</span><span class="tag ms-3">Remote</span>
                  </div>
                  <div class="mt-3">
                    <p>{{ $t('exp_stefanini') }}</p>
                    <span> (Mar de 2021 - Abr de 2022)</span>
                  </div>
                </div>
                <div v-else-if="slotProps.index === 2" data-aos="fade-left" data-aos-offset="200">
                  <div class="mb-1 d-flex align-items-center">
                    <span class=" text">{{ $t('ste_pl_jr') }}</span><span class="tag ms-3">Remote</span>
                  </div>
                  <div class="mt-3">
                    <p>{{ $t('exp_stefanini_pl') }}</p>
                    <span> (Jan de 2020 - Fev de 2021)</span>
                  </div>
                </div>
              </template>
              <template #opposite="slotProps">
                <img data-aos="fade-right" data-aos-offset="200" v-if="slotProps.index === 0"
                  class="img-presentation presentation img-computer mb-5" src="../assets/images/computer.svg" alt="" />
                <img data-aos="fade-right" data-aos-offset="200" v-else-if="slotProps.index === 1"
                  class="img-presentation presentation img-computer my-5" src="../assets/images/html.svg" alt="" />
                <img data-aos="fade-right" data-aos-offset="200" v-else-if="slotProps.index === 2"
                  class="img-presentation img-computer mt-5" src="../assets/images/achieve.svg" alt="" />
              </template>
            </Timeline>

          </div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
            tabindex="0">
            <h1 class="my-4 text-center experience main-title">{{ $t('graduate') }}</h1>
            <Timeline :value="educationEvents" align="alternate" class="w-full">
              <template #content="slotProps">
                <div v-if="slotProps.index === 0">
                  <div class="mt-3">
                    <span class=" text">{{ $t('course') }}</span>
                    <span class=" text">{{ $t('aboutGraduation') }}</span>
                    <p class="mt-4">{{ $t('institute') }}</p>
                  </div>
                </div>
                <div v-else-if="slotProps.index === 1">
                  <span class=" text">{{ $t('courseType') }}</span>
                  <p class="mt-3">{{ $t('conclusion') }}</p>
                  <img class="w-25 rounded mt-2" src="../assets/images/callan-method.jpg" alt="">
                </div>
              </template>
              <template #opposite="slotProps">
                <img v-if="slotProps.index === 0" class="img-presentation img-mobile-none mb-5"
                  src="../assets/images/19184614_6101000.svg" alt="" />
                <img v-else-if="slotProps.index === 1" class="img-presentation mt-5" src="../assets/images/pc.svg"
                  alt="" />
              </template>
            </Timeline>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- <section>
    <PortfolioView />
  </section> -->
  <section class="skills mt-5">
    <div class="text-center">
      <h1 data-aos="fade-left" data-aos-offset="200">{{ $t('skills') }}</h1>
      <p>{{ $t('someSkills') }}</p>
      <div class="row mt-5">
        <Habilities />
      </div>
    </div>
  </section>

  <div class="mainViewSection">
    <div>
      <Contacts />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import AnimationView from './AnimationView.vue';
import ProjectsView from './ProjectsView.vue';
import PortfolioView from './PortfolioView.vue';
import Contacts from './Contacts.vue';
import Habilities from './Habilities.vue';

import cv from './cv.vue';

import 'aos/dist/aos.css';

export default {
  components: {
    AnimationView,
    ProjectsView,
    cv,
    PortfolioView,
    Contacts,
    Habilities
  },
  setup() {
    const seeCV = ref(false);
    const skills = ['HTML', 'CSS', 'Javascript', 'Vue.js', 'Vite', 'Pinia', 'Nuxt', 'Vuex', 'Fetching Data', 'Axios', 'Chart.js', 'Bootstrap', 'Tailwind'];
    // const tools = ['SCSS (SASS)', 'Webpack', 'I18N', 'Composer'];
    const back = ['Laravel', 'NUXT', 'React.js'];
    const fullText = ref("");
    const animatedText = ref("");
    const currentIndex = ref(0);
    const showCursor = ref(true);
    const iconClass = ref('pi-moon');
    const typingSpeed = 100;
    const showArrow = ref(true);
    const showDetails = ref(false);
    const seeMore = ref('<i class="pi pi-arrow-down"></i>');

    const typeText = () => {
      if (currentIndex.value < fullText.value.length) {
        animatedText.value += fullText.value.charAt(currentIndex.value);
        currentIndex.value++;
        setTimeout(typeText, typingSpeed);
      } else {
        showCursor.value = false;
      }
    };

    const changeView = () => {
      seeCV.value = true;
    }

    const events = ref([
      { id: 1, type: "Creators LLC" },
      { id: 2, type: "Stefanini PL" },
      { id: 3, type: "Stefanini PL Junior" },
      { id: 3, type: "" }

    ]);

    const educationEvents = ref([
      { id: 1, type: "Graduation" },
      { id: 2, type: "English Course" },
      { id: 3, type: "" },
    ]);

    const changeState = () => {
      showDetails.value = !showDetails.value;
      seeMore.value = showDetails.value
        ? '<i class="pi pi-arrow-up"></i>'
        : '<i class="pi pi-arrow-down"></i>';
    };
    const onThemeToggler = () => {
      const root = document.getElementsByTagName('html')[0];

      root.classList.toggle('p-dark');

      iconClass.value = iconClass.value === 'pi-moon' ? 'pi-sun' : 'pi-moon';
    };


    onMounted(() => {
      fullText.value = 'Software ' + 'Developer';
      typeText();
      AOS.init({
        once: false,
      });

      setInterval(() => {
        showArrow.value = !showArrow.value;
      }, 300);
    });

    return {
      skills,
      back,
      fullText,
      animatedText,
      currentIndex,
      showCursor,
      typingSpeed,
      showArrow,
      showDetails,
      seeMore,
      typeText,
      changeState,
      changeView,
      events,
      educationEvents,
      iconClass,
      onThemeToggler
    };
  }
};
</script>


<style scoped>
.main-title {
  margin: 50px 0px !important;
}

section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.role {
  cursor: pointer;
  font-size: 12px;
}

.emoji {
  position: absolute;
  width: 85px;
  top: -40px;
  right: -40px;
  transform: rotate(30deg);
}

.move-enter-active,
.move-leave-active {
  transition: transform 2s ease;
}

.move-enter {
  transform: translateY(100%);
}

.move-leave-to {
  transform: translateY(100%);
}

/* .move-leave {
  transition: transform 0.1s ease;
} */
.move-leave {
  transition: transform 0.1s ease;
}

.fade-enter-active {
  transition: opacity 0.3s;
}

.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter {
  opacity: 0.3;
}

.fade-leave-to {
  opacity: 0;
}

.presentation-desk {
  display: none !important;
}

.img-thumb-user {
  border-radius: 50%;
  padding: 15px;
  object-fit: cover;
  height: 200px;
  width: 200px;
}

.arrow {
  width: 40px;
  border: 1px solid #00DC82;
  border-radius: 50%;
  padding: 3px;
}

:deep(.p-timeline-event-connector) {
  background-color: #00DC82;
}

.cursor {
  animation: blink 1s infinite;
  color: white !important;
}

@keyframes blink {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.tag {
  border: 1px solid;
  color: var(--vt-bg-primary);
  border-radius: 31px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  font-size: 14px;
  padding: 0px 10px;
}

.tag:hover {
  box-shadow: 0 0 20px 1px rgba(0, 220, 130, 0.9);
}

span {
  color: var(--vt-bg-primary);
  font-weight: 500;
}

p {
  font-size: 18px;
}

.card {
  background: rgba(15 23 42);
  padding: 35px;
  height: auto;
  border-radius: 40px;
  border: none;
}

.card li {
  list-style: none;
}

.card:nth-child(1) ul {
  text-align: left !important;
  list-style: lower-latin !important;
}

.if-institute {
  width: 40px;
}

.thumb-img {
  width: 40px;
  background-color: var(--vt-bg-primary);
  position: absolute;
  top: -15px;
  border-radius: 50%;
  padding: 10px;
  height: 40px;
}

.social img {
  width: 30px;
}

.img-presentation {
  width: 250px;
}

@media only screen and (max-width: 600px) {
  ::v-deep(.p-timeline-event-marker:last-child) {
    display: none !important;
  }

  :deep(.p-timeline-event-opposite) {
    display: none !important;
  }

  :deep(.p-timeline-event) {
    margin: 20px 0px;
  }

  .carousel-item {
    width: 107% !important;
  }

  .card {
    min-height: 480px;
  }

  .img-presentation {
    width: 100%;
  }

  .skills {
    padding: 0px 40px;
  }

  .presentations {
    display: flex;
    justify-content: center;
  }

  .presentation {
    display: none;
  }

  .presentation-desk {
    display: block !important;
    margin-top: 30px;
  }

  .stand:after {
    display: none !important;
  }

  .stand:before {
    display: none;
  }

  .monitor {
    width: 100% !important;
    height: 100% !important;
  }

}
</style>
