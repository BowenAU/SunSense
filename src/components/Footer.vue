<template>
  <footer class="bg-gray-900 text-white text-center p-4 mt-8">
    <p>&copy; 2024 SunSense. All rights reserved.</p>
    <nav class="mt-2">
      <router-link to="/" class="mx-2 hover:underline">Home</router-link>
      <router-link to="/articles" class="mx-2 hover:underline">Articles</router-link>
      <router-link to="/uv-forecast" class="mx-2 hover:underline">UV Forecast</router-link>
    </nav>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
