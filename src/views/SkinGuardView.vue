<template>
  <div class="container py-4">
    <!-- Title -->
    <h1 class="text-center fw-bold mb-4">Skin Type Guide</h1>

    <!-- Introduction to the Skin type -->
    <div class="alert alert-primary p-4 rounded">
      <h2 class="h5 fw-semibold">What is your Skin Type?</h2>
      <p class="mt-2">
        Identify your skin type, understand yourself better, and assist dermatologists in determining the appropriate skincare routine and sun protection needs.
      </p>
    </div>

    <!-- Display Skin Type Images -->
    <div class="row g-3">
      <div
        v-for="(image, type) in skinImages"
        :key="type"
        class="col-6 col-md-4 text-center"
      >
        <img
          :src="image"
          :alt="skinTypes[type]"
          class="img-fluid rounded shadow-sm"
        />
        <p class="mt-2 small fw-medium">{{ skinTypes[type] }}</p>
      </div>
    </div>

    <!-- Dropdown to Select Skin Type -->
    <label class="form-label mt-4">Select Your Skin Type:</label>
    <select v-model="selectedSkinType" class="form-select">
      <option disabled value="">Please select</option>
      <option v-for="(label, type) in skinTypes" :key="type" :value="type">
        {{ label }}
      </option>
    </select>

    <!-- Display Related Article Based on Selected Skin Type -->
    <div v-if="selectedArticle" class="card mt-4">
      <div class="card-body">
        <h2 class="card-title">{{ selectedArticle.title }}</h2>
        <p class="text-muted"><strong>{{ selectedArticle.expert }}</strong> - {{ selectedArticle.expertTitle }}</p>

        <!-- Show Skin Type Image in Article -->
        <img v-if="selectedArticle.image" :src="selectedArticle.image" alt="Skin Type" class="img-fluid rounded my-3"/>

        <p class="mt-3" style="white-space: pre-line;">{{ selectedArticle.content }}</p>
      </div>
    </div>

    <!-- Placeholder Message if No Skin Type is Selected -->
    <div v-else class="text-muted mt-3">Please select your skin type to see relevant articles.</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Load skin type images
const skinImages = {
  type1: new URL('@/assets/SkinType1.jpg', import.meta.url).href,
  type2: new URL('@/assets/SkinType2.jpg', import.meta.url).href,
  type3: new URL('@/assets/SkinType3.jpg', import.meta.url).href,
  type4: new URL('@/assets/SkinType4.jpg', import.meta.url).href,
  type5: new URL('@/assets/SkinType5.jpg', import.meta.url).href,
  type6: new URL('@/assets/SkinType6.jpg', import.meta.url).href,
  type7: new URL('@/assets/dry.jpg', import.meta.url).href,
  type8: new URL('@/assets/oily.jpg', import.meta.url).href,
}

// Define skin types
const skinTypes = {
  type1: 'Type I - Very Fair, Always Burns, Never Tans',
  type2: 'Type II - Fair, Burns Easily, Tans Minimally',
  type3: 'Type III - Medium, Sometimes Burns, Gradually Tans',
  type4: 'Type IV - Olive, Rarely Burns, Tans Easily',
  type5: 'Type V - Dark Brown, Very Rarely Burns, Tans Darkly',
  type6: 'Type VI - Deeply Pigmented, Never Burns, Always Tans',
  type7: 'Dry Skin - Lacks Moisture and Oil, Prone to Tightness and Flaking',
  type8: 'Oily Skin - Excess Sebum Production, Prone to Shine and Acne',
}

// Store the selected skin type
const selectedSkinType = ref('')

// Articles with expert advice for each skin type
const articles = {
  type1: {
    title: 'How to Protect Very Fair Skin?',
    expert: 'Dr. Elizabeth Carter',
    expertTitle: 'Dermatologist, Skin Health Institute',
    image: skinImages.type1,
    content: `People with Type I skin are extremely sensitive to sunlight and burn easily. Follow these tips to protect your skin:

🌞 Sunscreen Use:
• Always apply SPF 50+ broad-spectrum sunscreen.
• Reapply every 2 hours, especially after swimming or sweating.

🧥 Protective Clothing:
• Wear UV-protective clothing, long sleeves, and wide-brimmed hats.
• Use sunglasses with UV protection to shield your eyes.

💧 Skincare Routine:
• Use gentle, hydrating skincare products to prevent irritation.
• Avoid harsh exfoliants and alcohol-based products.`
  },
  type2: {
    title: 'Best Skincare Routine for Fair Skin',
    expert: 'Dr. Michael Stevenson',
    expertTitle: 'Senior Skincare Consultant',
    image: skinImages.type2,
    content: `Fair skin burns easily and needs extra care. Here's how to protect it:

🌞 Sunscreen Use:
• Choose SPF 30-50 sunscreen with zinc oxide.
• Apply sunscreen daily, even on cloudy days.

🧥 Protective Measures:
• Wear light-colored clothing to reflect sunlight.
• Consider using a parasol or umbrella in extreme sunlight.

💧 Daily Skincare:
• Use niacinamide-based moisturizers to reduce redness.
• Avoid strong acids like glycolic acid that may cause irritation.`
  },
  type3: {
    title: 'How to Maintain Medium-Toned Skin',
    expert: 'Dr. Angela Brooks',
    expertTitle: 'Dermatologist, Glow Clinic',
    image: skinImages.type3,
    content: `Medium-toned skin is more resilient but still needs sun protection:

🌞 Sunscreen Use:
• Use SPF 30+ sunscreen daily.
• Choose lightweight, oil-free sunscreen for a non-greasy finish.

🧥 Sun Protection:
• Avoid direct sun exposure during peak hours (10 AM - 4 PM).

💧 Skincare Tips:
• Use vitamin C serum to prevent pigmentation.
• Stay hydrated and avoid alcohol-based toners.`
  },
  type4: {
    title: 'Skincare for Olive Skin Tones',
    expert: 'Dr. James Lee',
    expertTitle: 'Cosmetic Dermatology Specialist',
    image: skinImages.type4,
    content: `Olive skin is naturally more resistant to sunburn but still needs care:

🌞 Sunscreen Use:
• Use SPF 30+ to prevent uneven pigmentation.
• Opt for gel-based sunscreens to reduce oiliness.

🧥 Protective Measures:
• Wear breathable, lightweight clothing in summer.

💧 Skincare Routine:
• Use anti-inflammatory serums to balance skin tone.`
  },
  type5: {
    title: 'Caring for Dark Brown Skin',
    expert: 'Dr. Rachel Kim',
    expertTitle: 'Skincare Expert, Healthy Glow Institute',
    image: skinImages.type5,
    content: `Dark brown skin is naturally more resistant to sunburn but still requires sun protection:

🌞 Sunscreen Use:
• Use SPF 30+ broad-spectrum sunscreen to prevent hyperpigmentation.
• Opt for sunscreens with moisturizing ingredients like hyaluronic acid.

🧥 Protective Measures:
• Wear sunglasses with UV protection to protect against sun damage.
• Choose lightweight, breathable fabrics for daily wear.

💧 Skincare Routine:
• Use a gentle exfoliator to maintain an even skin tone.
• Apply hydrating serums with ingredients like vitamin E and ceramides.`
  },
  type6: {
    title: 'Maintaining Deeply Pigmented Skin',
    expert: 'Dr. David Johnson',
    expertTitle: 'Dermatology Professor',
    image: skinImages.type6,
    content: `Even deeply pigmented skin needs sun protection to prevent long-term damage:

🌞 Sunscreen Use:
• Use SPF 30+ with hydration properties to maintain skin barrier health.
• Choose sunscreens with a matte finish to reduce excess shine.

🧥 Protective Measures:
• Wear UV-resistant clothing, especially if spending long hours outdoors.
• A wide-brimmed hat can help protect the face and scalp.

💧 Skincare Routine:
• Incorporate vitamin C or niacinamide to brighten skin tone.
• Use a daily moisturizer with ceramides to lock in hydration.`
  },
  type7: {
    title: 'Skincare for Dry Skin with Sun Protection',
    expert: 'Dr. Emily Parker',
    expertTitle: 'Dermatologist, Skin Wellness Clinic',
    image: skinImages.type7,
    content: `Dry skin is prone to irritation and dehydration, making sun protection essential:

🌞 Sunscreen Use:
• Choose SPF 30+ sunscreen with moisturizing ingredients like hyaluronic acid and glycerin.
• Avoid alcohol-based sunscreens that can dry out the skin.

🧥 Protective Measures:
• Wear soft, non-irritating fabrics like cotton to prevent further dryness.
• Use a scarf or hat to shield your face from harsh sun exposure.

💧 Skincare Routine:
• Apply a thick, hydrating moisturizer before sunscreen to prevent flakiness.
• Use a gentle, non-foaming cleanser to avoid stripping natural oils.`
  },
  type8: {
    title: 'Sun Care Tips for Oily Skin',
    expert: 'Dr. Jonathan Reed',
    expertTitle: 'Senior Dermatology Consultant',
    image: skinImages.type8,
    content: `Oily skin needs sun protection without clogging pores or increasing shine:

🌞 Sunscreen Use:
• Use an oil-free, non-comedogenic sunscreen with SPF 30+ to prevent breakouts.
• Opt for gel-based or mattifying sunscreens to control excess oil.

🧥 Protective Measures:
• Avoid heavy or greasy sunscreens that can cause congestion and acne.
• Use a hat and sunglasses for additional protection without applying extra products.

💧 Skincare Routine:
• Use a lightweight, oil-control moisturizer before applying sunscreen.
• Wash your face with a gentle foaming cleanser to remove excess sebum.`
  }
}

// Compute the selected article based on user input
const selectedArticle = computed(() => {
  return articles[selectedSkinType.value] || null
})
</script>

<style>
.card-body p {
  white-space: pre-line;
}
</style>
