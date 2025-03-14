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
    title: 'Identify and protect your skin type',
    url: 'https://www.cancer.nsw.gov.au/prevention-and-screening/preventing-cancer/preventing-skin-cancer/reduce-your-skin-cancer-risk/identify-your-skin-type/',
  },
  {
    id: 2,
    title: 'Assessing Sun Exposure: Skin Type, UV Index, and Duration',
    url: 'https://www.grassrootshealth.net/blog/assessing-sun-exposure-skin-type-uv-index-duration/',
  },
  {
    id: 3,
    title: 'Australia Sets 3 Skin Tones for Sun Safety, Cancer Risk',
    url: 'https://www.miragenews.com/australia-sets-3-skin-types-for-sun-safety-1172882/#google_vignette',
  },
  {
    id: 4,
    title: 'UV Exposure & Risk of Cutaneous Melanoma in Skin of Color',
    url: 'https://www.curemelanoma.org/blog/uv-exposure-and-risk-of-cutaneous-melanoma-in-skin-of-color',
  },
  {
    id: 5,
    title:
      'Experts have developed new sun safety advice for diverse skin types. Here is what it says',
    url: 'https://www.abc.net.au/news/2024-02-13/sun-safety-position-statement/103459156',
  },
  {
    id: 6,
    title: 'Workplaces and sun protection',
    url: 'https://www.cancercouncil.com.au/cancer-prevention/sun-protection/workplaces-and-sun-protection/',
  },
])
</script>
