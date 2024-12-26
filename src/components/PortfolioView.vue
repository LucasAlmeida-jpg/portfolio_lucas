<template>
    <div>
        <div class="text-center">
            <h1 class="mb-4">Produtos</h1>
            <p>Alguns dos projetos que trabalhei na Creators.llc</p>
            <div class="d-flex flex-wrap">
                <div
                    v-for="project in projects"
                    :key="project.link"
                    class="col-md-6 card"
                    @click="navigateTo(project.link)"
                    data-aos="fade-up"
                >
                    <img :src="project.image" alt="">
                    <p class="tag">{{ project.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    data() {
        return {
            projects: [
                {
                    text: 'CALCULA',
                    subtext: 'Subtítulo de Calcula',
                    videos: ['video1.mp4', 'video2.mp4'],
                    image: 'https://creators.llc/images/logo_creators.svg',
                    link: 'projects/calcula'
                },
                {
                    text: 'SEARCH',
                    subtext: 'Subtítulo de Search',
                    videos: ['video1.mp4', 'video2.mp4'],
                    image: 'https://creators.llc/images/logo_creators.svg',
                    link: 'projects/search'
                },
                {
                    text: 'REPORT',
                    subtext: 'Subtítulo de Report',
                    videos: ['video1.mp4', 'video2.mp4'],
                    image: 'https://creators.llc/images/logo_creators.svg',
                    link: 'projects/report'
                },
                {
                    text: 'LPS',
                    subtext: 'Subtítulo de LPS',
                    videos: ['video1.mp4', 'video2.mp4'],
                    image: 'https://creators.llc/images/logo_creators.svg',
                    link: 'projects/lps'
                },
                {
                    text: 'PAY',
                    subtext: 'Creators pay',
                    videos: ['video1.mp4', 'video2.mp4'],
                    image: 'https://creators.llc/images/logo_creators.svg',
                    link: 'projects/pay'
                },
                {
                    text: 'CREATORS',
                    subtext: 'Creators pay',
                    videos: ['video1.mp4', 'video2.mp4'],
                    image: 'https://creators.llc/images/logo_creators.svg',
                    link: 'projects/pay'
                }
            ]
        };
    },
    mounted(){
        AOS.init({
        once: false,
      });
    },
    methods: {
        navigateTo(link) {
            this.$router.push(link);
        }
    }
};
</script>

<style lang="scss" scoped>
.card {
    background: rgb(15, 23, 42);
    height: auto;
    margin: 22px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    padding: 35px;
    position: relative;
    width: auto;
}

.tag{
    position: absolute;
    top: -9px;
    right: -27px;
}
</style>