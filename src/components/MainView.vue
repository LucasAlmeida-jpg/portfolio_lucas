<template>
  <section>
    <div class="text-center">
      <h1>
        <span>{{ $t('developer') }}</span> {{ $t('frontEnd') }} <span>{{ $t('vue') }}</span>
      </h1>
      <p class="mt-4">
        {{ $t('aboutLucas') }}
      </p>
    </div>     
  </section>
  <article class="text-center container my-5">
    <div id="carouselExample" class="carousel slide  d-flex justify-content-center container" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row d-flex justify-content-center container">
            <div class="col-md-7 card">
              <h1>{{ $t('aboutMe') }}</h1>
              <p>{{ $t('description') }}</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row d-flex justify-content-center container">
            <div class="col-md-7 card">
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
    border: 0.1px solid var(--vt-bg-primary);   
    padding: 30px;
    min-height: 315px;
    display: flex;
    align-items: center;
    justify-content: center; 
}

.card li {
    list-style: none;
}

.carousel-inner{
    width: 100% !important;
}
.card:nth-child(1) ul {
  text-align: left !important;
  list-style: lower-latin !important;
}


</style>