<template>
  <footer class="bg-gray-900 text-white text-center p-4 mt-8">
    <nav class="mb-2">
      <router-link to="/views/article" class="mx-2 hover:underline">Articles</router-link>
      <router-link to="/views/skinguard" class="mx-2 hover:underline">SkinGuard</router-link>
      <router-link to="/views/uvmap" class="mx-2 hover:underline">UV Map</router-link>
      <router-link to="/views/alert" class="mx-2 hover:underline">Alert</router-link>
    </nav>
    <p>© 2025 SunSense. All rights reserved.</p>
  </footer>
</template>

<script setup></script>

<style scoped>
footer {
  position: relative;
  width: 100%;
  background-color: rgba(11, 11, 1, 0.698);
  padding: 10px 0;
  z-index: 10;
}
</style>
