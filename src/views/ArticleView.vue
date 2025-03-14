<template>
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-2xl font-bold text-center mb-6">Articles</h1>

    <!-- 文章列表 -->
    <ul class="space-y-4">
      <li
        v-for="article in articles"
        :key="article.id"
        class="p-4 border rounded-lg shadow-md hover:bg-gray-100 transition"
      >
        <a
          :href="article.url"
          target="_blank"
          rel="noopener noreferrer"
          class="text-lg font-semibold text-blue-600 hover:underline"
        >
          {{ article.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 文章数据（包括外部链接）
const articles = ref([
  {
    id: 1,
    title: 'How to Protect Very Fair Skin?',
    url: 'https://www.skincancer.org/blog/how-to-protect-very-fair-skin/',
  },
  {
    id: 2,
    title: 'Best Skincare Routine for Fair Skin',
    url: 'https://www.aad.org/public/everyday-care/skin-care-routine',
  },
  {
    id: 3,
    title: 'How to Maintain Medium-Toned Skin',
    url: 'https://www.dermatologytimes.com/view/skin-care-tips-for-medium-skin',
  },
  {
    id: 4,
    title: 'Skincare for Olive Skin Tones',
    url: 'https://www.healthline.com/olive-skin-care',
  },
  {
    id: 5,
    title: 'Caring for Dark Brown Skin',
    url: 'https://www.skincare.com/skin-type/dark-skin/best-skin-care-routine-for-dark-skin-tones',
  },
  {
    id: 6,
    title: 'How to Maintain Deeply Pigmented Skin',
    url: 'https://www.webmd.com/beauty/black-skin-care',
  },
])
</script>
