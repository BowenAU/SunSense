<script setup></script>

<template>
  <div class="container py-4">
    <!-- Website Header -->
    <header class="pb-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
        <span class="fs-4">🌞 SunSense: Smart Protection, Radiant Skin!</span>
      </a>
    </header>

    <!-- Introduction Section -->
    <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Welcome to SunSense</h1>
        <p class="col-md-8 fs-4">
          Sunshine is great for life, but it can also be bad for your health. In Australia, many
          people get skin cancer, especially melanoma, which is a major health issue for young
          people. We can use science to reduce the risk of skin cancer while enjoying outdoor life.
          Let’s enjoy the sunshine, but also know how to protect ourselves!
        </p>
      </div>
    </div>

    <!-- Two-Column Section: Challenges & Commitment -->
    <div class="row align-items-md-stretch">
      <!-- Challenges Section -->
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Understanding the Challenges</h2>
          <p>
            This section focuses on challenges such as misinformation, tanning trends in social
            media, lack of awareness, vitamin D deficiencies, and more.
          </p>
        </div>
      </div>

      <!-- Commitment Section -->
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Our Commitment</h2>
          <p>
            Why do we need a UV protection website? Australia has one of the highest melanoma rates
            worldwide, yet unsafe tanning trends persist. People with darker skin also face vitamin
            D deficiencies. Many young people migrating to Australia lack basic UV protection
            knowledge. This website provides science-backed guidance on these issues.
          </p>
        </div>
      </div>
    </div>

    <!-- Card Section for Features -->
    <div class="row mt-4 d-flex justify-content-center">
      <!-- Articles Section -->
      <div class="col-12 col-md-6 col-lg-3 mb-4">
        <div class="card h-100">
          <img
            src="https://static.independent.co.uk/2024/07/27/08/newFile-2.jpg"
            class="card-img-top"
            alt="Article Section"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Articles</h5>
            <p class="card-text">
              Provides authoritative information and the latest research on skin types, UV exposure,
              skin cancer risks, and sun protection. Users can learn how to protect their skin and
              reduce health risks.
            </p>
          </div>
        </div>
      </div>

      <!-- SkinGuard Section -->
      <div class="col-12 col-md-6 col-lg-3 mb-4">
        <div class="card h-100">
          <img
            src="https://cdn.shopify.com/s/files/1/2558/2304/files/IMG_2291_480x480.jpg?v=1719286144"
            class="card-img-top"
            alt="SkinGuard Section"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">SkinGuard</h5>
            <p class="card-text">
              Helps users understand their Fitzpatrick Skin Type and receive personalized sun
              protection and skincare advice. Users can access expert-backed recommendations.
            </p>
          </div>
        </div>
      </div>

      <!-- UV Map Section -->
      <div class="col-12 col-md-6 col-lg-3 mb-4">
        <div class="card h-100">
          <img
            src="https://www.gentlecure.com/wp-content/uploads/2022/11/Depositphotos_614863622_L-1024x607.jpg"
            class="card-img-top"
            alt="UV Map Section"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">UV Map</h5>
            <p class="card-text">
              Provides an interactive UV index map where users can click any location to view
              real-time UV levels, ozone levels, sunrise/sunset times, and safe sun exposure
              durations for different skin types.
            </p>
          </div>
        </div>
      </div>

      <!-- Alert Section -->
      <div class="col-12 col-md-6 col-lg-3 mb-4">
        <div class="card h-100">
          <img
            src="https://thumbs.dreamstime.com/b/uv-light-warning-sign-vector-illustration-isolate-white-background-label-eps-uv-light-warning-sign-vector-illustration-isolate-329910144.jpg"
            class="card-img-top"
            alt="Alert Section"
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">Alert</h5>
            <p class="card-text">
              Allows users to set a timer for sun protection reminders. Alerts them when to reapply
              sunscreen, seek shade, or take other sun safety measures.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensures images maintain a uniform height */
.card-img-top {
  height: 200px;
  object-fit: cover;
}

/* Ensures card elements take full height */
.card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
