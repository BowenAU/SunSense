<script setup>
import { ref, onMounted } from 'vue'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css'

// Mapbox Access Token
mapboxgl.accessToken =
  'pk.eyJ1IjoiZmVhc2FjaHQiLCJhIjoiY20yNGQwNDFrMGV5aDJqcHE4cndnNnJvMyJ9.T9-AvInRMZRiizPI-Vfl6w'

// OpenUV API Access Token
const openUvToken = 'openuv-11cnu4rm889hvyl-io'

// Defined variable
const uvData = ref(null)
const errorMessage = ref('')

// Map initialization
onMounted(() => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [144.9631, -37.8136], // Melbourne
    zoom: 10,
  })

  // Add map click event
  map.on('click', async (event) => {
    const { lng, lat } = event.lngLat
    await fetchUvData(lat, lng)
  })

  // Add navigation controls
  map.addControl(new mapboxgl.NavigationControl())
})

// Get UV data
const fetchUvData = async (lat, lng) => {
  try {
    const response = await axios.get('https://api.openuv.io/api/v1/uv', {
      headers: {
        'x-access-token': openUvToken,
      },
      params: {
        lat,
        lng,
        alt: 100,
      },
    })

    uvData.value = response.data.result
    errorMessage.value = ''
  } catch (error) {
    console.error('Error fetching UV data:', error)
    errorMessage.value = 'Failed to fetch UV data. Please try again.'
    uvData.value = null
  }
}
</script>

<template>
  <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">UV Index Map</h1>
      <p class="col-md-8 fs-4">
        Click on the map to view the UV index and related data for that location.
      </p>

      <!-- Map container -->
      <div id="map" style="width: 100%; height: 500px" class="mt-5"></div>

      <!-- UV data display -->
      <div v-if="uvData" class="mt-4 bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-2xl font-bold mb-4 text-blue-600">UV Radiation Details</h3>
        
        <!-- Key Metrics -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-semibold text-blue-800 mb-2">Current UV Index</h4>
            <p class="text-3xl font-bold text-blue-600">{{ uvData.uv }}</p>
            <p class="text-sm text-gray-600 mt-1">
              Measured at: {{ uvData.uv_time }}<br>
              (Real-time ultraviolet radiation intensity)
            </p>
          </div>

          <div class="bg-orange-50 p-4 rounded-lg">
            <h4 class="font-semibold text-orange-800 mb-2">Daily Peak UV</h4>
            <p class="text-3xl font-bold text-orange-600">{{ uvData.uv_max }}</p>
            <p class="text-sm text-gray-600 mt-1">
              Peak time: {{ uvData.uv_max_time }}<br>
              (Maximum expected UV level today)
            </p>
          </div>

          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-semibold text-purple-800 mb-2">Ozone Protection</h4>
            <p class="text-3xl font-bold text-purple-600">{{ uvData.ozone }}
              <span class="text-lg">DU</span>
            </p>
            <p class="text-sm text-gray-600 mt-1">
              Measured at: {{ uvData.ozone_time }}<br>
              (Dobson Units - atmospheric ozone concentration)
            </p>
          </div>
        </div>

        <!-- Safety Information -->
        <div class="bg-green-50 p-4 rounded-lg mb-6">
          <h4 class="font-semibold text-green-800 mb-3">Safe Sun Exposure Limits (Minutes)</h4>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="(value, key) in uvData.safe_exposure_time" :key="key" 
                 class="bg-white p-3 rounded-md shadow-sm">
              <p class="font-medium text-gray-700">
                {{ ['Type I (Pale)','Type II (Fair)','Type III (Medium)',
                     'Type IV (Olive)','Type V (Brown)','Type VI (Dark)'][key.slice(2)-1] }}
              </p>
              <p class="text-2xl font-bold text-green-600">{{ value }}</p>
              <p class="text-xs text-gray-500">Skin {{ key.slice(2) }}</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-3">
            * Based on Fitzpatrick Skin Type classification system
          </p>
        </div>

        <!-- Solar Times -->
        <div class="bg-yellow-50 p-4 rounded-lg">
          <h4 class="font-semibold text-yellow-800 mb-3">Solar Timeline</h4>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-white p-3 rounded-md shadow-sm">
              <p class="font-medium text-gray-700">Sunrise</p>
              <p class="text-xl font-bold text-yellow-600">{{ uvData.sun_info.sun_times.sunrise }}</p>
            </div>
            <div class="bg-white p-3 rounded-md shadow-sm">
              <p class="font-medium text-gray-700">Sunset</p>
              <p class="text-xl font-bold text-yellow-600">{{ uvData.sun_info.sun_times.sunset }}</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 mt-3">
            * Local standard time (accurate to nearest minute)
          </p>
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="errorMessage" class="mt-4 p-4 bg-red-50 rounded-lg">
        <p class="text-red-600 font-semibold">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#map {
  width: 100%;
  height: 500px;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Responsive text adjustments */
@media (max-width: 768px) {
  .text-3xl {
    font-size: 1.875rem;
  }
  .text-2xl {
    font-size: 1.5rem;
  }
}
</style>