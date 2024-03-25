<template>
  <section>
    <div class="text-center">
      <h1>
        <span>{{ $t('developer') }}</span> {{ $t('frontEnd') }} <span>{{ $t('vue') }}</span>
      </h1>
      <div class="row">
        <div class="container d-flex justify-content-center">
          <p class="mt-4 col-md-8 text-center ">
        {{ $t('aboutLucas') }} {{ $t('aboutLucasSub') }}
      </p>
        </div>
      </div>
    </div>     
  </section>
  <article class="text-center container my-5">
    <div id="carouselExample" class="carousel slide d-flex justify-content-center container" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row d-flex justify-content-center container">
            <div class="col-md-7 card">
              <img class="thumb-img" src="../assets/user.svg" alt="about_img">
              <h1>{{ $t('aboutMe') }}</h1>
              <p>{{ $t('description') }}</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row d-flex justify-content-center container">
            <div class="col-md-7 card">
              <img class="thumb-img" src="../assets/code.svg" alt="code_img">
              <h1>{{ $t('skills') }}</h1>
              <ul>
                <li>➤ {{ $t('components') }}</li>
                <li>➤ {{ $t('router') }}</li>
                <li>➤ {{ $t('statement')}}</li>
                <li>➤ {{ $t('manipulation')}}</li>
                <li>➤ {{ $t('axios') }}</li>
                <li>➤ {{ $t('responsive') }}</li>
             </ul>
            </div>
          </div>
        </div>
        <div class="carousel-item">
        <div class="row d-flex justify-content-center container">
          <div class="col-md-7 card">
              <img class="thumb-img" src="../assets/graduation.svg" alt="graduation_img">
              <h1>{{ $t('graduate') }}</h1>             
              <p class="mt-3">{{ $t('course') }} - ({{ $t('aboutGraduation') }})</p>
              <p>{{ $t('institute') }}</p>
              <img class="if-institute" src="../assets/if.png" alt="">
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row d-flex justify-content-center container">
            <div class="col-md-7 card">
              <img class="thumb-img" src="../assets/code.svg" alt="code_img">
              <h1>Experiência Profissional</h1>
              <ul>
                <li>➤ {{ $t('dev') }} <br> {{ $t("time") }}</li>
                <li>➤ {{ $t('router') }}</li>
                <li>➤ {{ $t('statement')}}</li>
                <li>➤ {{ $t('manipulation')}}</li>
                <li>➤ {{ $t('axios') }}</li>
                <li>➤ {{ $t('responsive') }}</li>
             </ul>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </article>
</template>

<style scoped>
section {
    display: flex;
    align-items: center;
    justify-content: center;
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
    /* border: 0.1px solid var(--vt-bg-primary);    */
    padding: 30px;
    min-height: 315px;
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-top: 29px;
    /* margin-left: 26px; */
    border-radius: 40px;
}

.card:hover{
     border: 0.1px solid var(--vt-bg-primary);    
     cursor: pointer;
  }
.card li {
    list-style: none;
}

.card:nth-child(1) ul {
  text-align: left !important;
  list-style: lower-latin !important;
}

.if-institute{
  width: 40px; 
}

.thumb-img{
  width: 40px;
  background-color: var(--vt-bg-primary);
  position: absolute;
  top: -15px;
  border-radius: 50%;
  padding: 10px;
  height: 40px;
}
@media only screen and (max-width: 600px) {
.carousel-item{
  width: 107% !important;
}
.card {
    min-height: 480px;
}
}
</style>

