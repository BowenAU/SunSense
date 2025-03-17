<template>
  <div class="max-w-4xl mx-auto p-6">
    <!-- Page Title -->
    <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">
      Articles on Sun Safety
    </h1>

    <!-- Article List -->
    <div class="grid md:grid-cols-2 gap-6">
      <div
        v-for="article in articles"
        :key="article.id"
        class="p-5 border rounded-xl shadow-md transition transform hover:scale-105 hover:bg-gray-100"
      >
        <a
          :href="article.url"
          target="_blank"
          rel="noopener noreferrer"
          class="block text-xl font-semibold text-blue-600 hover:underline"
        >
          {{ article.title }}
        </a>
        <p class="mt-2 text-gray-600">
          {{ article.source }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// article list with source information
const articles = ref([
  {
    id: 1,
    title: 'Identify and protect your skin type',
    url: 'https://www.cancer.nsw.gov.au/prevention-and-screening/preventing-cancer/preventing-skin-cancer/reduce-your-skin-cancer-risk/identify-your-skin-type/',
    source: 'Cancer NSW',
  },
  {
    id: 2,
    title: 'Assessing Sun Exposure: Skin Type, UV Index, and Duration',
    url: 'https://www.grassrootshealth.net/blog/assessing-sun-exposure-skin-type-uv-index-duration/',
    source: 'Grassroots Health',
  },
  {
    id: 3,
    title: 'Australia Sets 3 Skin Tones for Sun Safety, Cancer Risk',
    url: 'https://www.miragenews.com/australia-sets-3-skin-types-for-sun-safety-1172882/#google_vignette',
    source: 'Mirage News',
  },
  {
    id: 4,
    title: 'UV Exposure & Risk of Cutaneous Melanoma in Skin of Color',
    url: 'https://www.curemelanoma.org/blog/uv-exposure-and-risk-of-cutaneous-melanoma-in-skin-of-color',
    source: 'Cure Melanoma',
  },
  {
    id: 5,
    title:
      'Experts have developed new sun safety advice for diverse skin types. Here is what it says',
    url: 'https://www.abc.net.au/news/2024-02-13/sun-safety-position-statement/103459156',
    source: 'ABC News',
  },
  {
    id: 6,
    title: 'Workplaces and sun protection',
    url: 'https://www.cancercouncil.com.au/cancer-prevention/sun-protection/workplaces-and-sun-protection/',
    source: 'Cancer Council',
  },
])
</script>
