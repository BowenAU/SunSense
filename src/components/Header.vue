<template>
  <div class="container">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom"
    >
      <a
        href="/"
        class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
      >
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
          <use xlink:href="#bootstrap" />
        </svg>
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/views/skinguard" class="nav-link" aria-current="page"
            >SkinGuard</router-link
          >
        </li>

        <li class="nav-item">
          <router-link to="/views/uvforecast" class="nav-link" aria-current="page"
            >UVForecast</router-link
          >
        </li>

        <li class="nav-item">
          <router-link to="/views/uvmap" class="nav-link active" aria-current="page"
            >UVMap</router-link
          >
        </li>

        <li class="nav-item">
          <router-link to="/views/alert" class="nav-link active" aria-current="page"
            >Alert</router-link
          >
        </li>
      </ul>
    </header>
  </div>
</template>

<script setup></script>

<style scoped></style>
