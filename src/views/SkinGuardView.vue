<template>
  <div class="max-w-4xl mx-auto p-6">
    <!-- 标题 -->
    <h1 class="text-2xl font-bold text-center mb-6">Fitzpatrick Skin Type Guide</h1>

    <!-- Fitzpatrick 皮肤类型介绍 -->
    <div class="bg-blue-100 p-4 rounded-lg shadow-md mb-6">
      <h2 class="text-lg font-semibold">What is the Fitzpatrick Skin Type Scale?</h2>
      <p class="mt-2 text-gray-700">
        The Fitzpatrick Scale classifies skin into six types based on its reaction to sun exposure.
        It helps dermatologists determine appropriate skincare routines and sun protection needs.
      </p>
    </div>

    <!-- 用户选择皮肤类型 -->
    <label class="block text-lg font-medium mb-2">Select Your Skin Type:</label>
    <select v-model="selectedSkinType" class="w-full p-2 border rounded-md">
      <option disabled value="">Please select</option>
      <option v-for="(label, type) in skinTypes" :key="type" :value="type">
        {{ label }}
      </option>
    </select>

    <!-- 相关文章 -->
    <div v-if="selectedArticle" class="mt-6 p-6 border rounded-lg shadow-md bg-white">
      <h2 class="text-xl font-semibold">{{ selectedArticle.title }}</h2>
      <p class="text-sm text-gray-600">
        <strong>{{ selectedArticle.expert }}</strong> - {{ selectedArticle.expertTitle }}
      </p>
      <p class="mt-4 text-gray-700 whitespace-pre-line">{{ selectedArticle.content }}</p>
    </div>

    <div v-else class="mt-4 text-gray-500">
      Please select your skin type to see relevant articles.
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Fitzpatrick 皮肤类型
const skinTypes = {
  type1: 'Type I - Very Fair, Always Burns, Never Tans',
  type2: 'Type II - Fair, Burns Easily, Tans Minimally',
  type3: 'Type III - Medium, Sometimes Burns, Gradually Tans',
  type4: 'Type IV - Olive, Rarely Burns, Tans Easily',
  type5: 'Type V - Dark Brown, Very Rarely Burns, Tans Darkly',
  type6: 'Type VI - Deeply Pigmented, Never Burns, Always Tans',
}

// 用户选择的皮肤类型
const selectedSkinType = ref('')

// 相关文章数据（每个类型有一篇完整文章）
const articles = {
  type1: {
    title: 'How to Protect Very Fair Skin?',
    expert: 'Dr. Elizabeth Carter',
    expertTitle: 'Dermatologist, Skin Health Institute',
    content: `People with Fitzpatrick Type I skin are extremely sensitive to UV radiation and are highly prone to sunburns.

To protect very fair skin:
- Always use a broad-spectrum sunscreen with SPF 50+.
- Wear protective clothing, including hats and sunglasses.
- Avoid direct sunlight, especially between 10 AM - 4 PM.
- Use gentle, hydrating skincare products to prevent irritation.

By following these guidelines, you can maintain healthy skin and reduce the risk of premature aging and skin cancer.`,
  },
  type2: {
    title: 'Best Skincare Routine for Fair Skin',
    expert: 'Dr. Michael Stevenson',
    expertTitle: 'Senior Skincare Consultant',
    content: `Fair skin is prone to redness and sun damage, making sun protection essential.

Key skincare tips for Fitzpatrick Type II:
- Apply sunscreen (SPF 30-50) daily.
- Use antioxidant-rich serums to combat free radical damage.
- Hydrate your skin with light moisturizers.
- Consider using gentle exfoliation to remove dead skin cells.

With a consistent skincare routine, fair skin can remain healthy and radiant.`,
  },
  type3: {
    title: 'How to Maintain Medium-Toned Skin',
    expert: 'Dr. Angela Brooks',
    expertTitle: 'Dermatologist, Glow Clinic',
    content: `Fitzpatrick Type III skin is more resilient but still needs sun protection.

- Use SPF 30 sunscreen daily, even on cloudy days.
- Incorporate vitamin C serum to brighten the skin.
- Stay hydrated and avoid harsh chemical exfoliants.

A proper balance of sun care and hydration ensures a youthful and even complexion.`,
  },
  type4: {
    title: 'Skincare for Olive Skin Tones',
    expert: 'Dr. James Lee',
    expertTitle: 'Cosmetic Dermatology Specialist',
    content: `Olive skin has a natural protective barrier but still requires care.

- Use a daily SPF of at least 30 to prevent hyperpigmentation.
- Moisturize with lightweight, oil-free products.
- Avoid excessive exfoliation, which can cause irritation.

A consistent skincare routine helps maintain even tone and radiance.`,
  },
  type5: {
    title: 'Caring for Dark Brown Skin',
    expert: 'Dr. Rachel Kim',
    expertTitle: 'Skincare Expert, Healthy Glow Institute',
    content: `Dark brown skin is less prone to sunburn but still requires protection.

- Apply SPF 30+ to prevent uneven pigmentation.
- Use hydrating skincare products with natural oils.
- Avoid harsh skin-lightening treatments.

Proper skincare enhances the natural glow of dark brown skin while preventing common issues like hyperpigmentation.`,
  },
  type6: {
    title: 'How to Maintain Deeply Pigmented Skin',
    expert: 'Dr. David Johnson',
    expertTitle: 'Dermatology Professor',
    content: `Fitzpatrick Type VI skin is the most resistant to sun damage but still requires maintenance.

- Daily SPF application prevents long-term damage.
- Hydrate skin with ceramide-rich moisturizers.
- Use brightening serums to maintain even skin tone.

A consistent routine enhances the skin’s natural beauty while preventing dryness and discoloration.`,
  },
}

// 计算当前选择的文章
const selectedArticle = computed(() => {
  return articles[selectedSkinType.value] || null
})
</script>

<style scoped>
select {
  appearance: none;
  background-color: white;
  cursor: pointer;
}
</style>
