<script setup>
import { ref, onMounted } from 'vue'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css'

// Set up Mapbox access token
mapboxgl.accessToken = 'your-mapbox-access-token'

// Set up OpenUV API access token
const openUvToken = 'your-openuv-access-token'

// Define reactive variables to store UV data and error messages
const uvData = ref(null)
const errorMessage = ref('')

// Initialize the map when the component is mounted
onMounted(() => {
  const map = new mapboxgl.Map({
    container: 'map', // The div ID where the map will render
    style: 'mapbox://styles/mapbox/streets-v11', // Map style
    center: [144.9631, -37.8136], // Default center (Melbourne, Australia)
    zoom: 10, // Initial zoom level
  })

  // Add click event listener to fetch UV data for the selected location
  map.on('click', async (event) => {
    const { lng, lat } = event.lngLat // Get clicked coordinates
    await fetchUvData(lat, lng)
  })

  // Add zoom and navigation controls to the map
  map.addControl(new mapboxgl.NavigationControl())
})

// Function to fetch UV data from OpenUV API
const fetchUvData = async (lat, lng) => {
  try {
    const response = await axios.get('https://api.openuv.io/api/v1/uv', {
      headers: {
        'x-access-token': openUvToken, // API authentication
      },
      params: {
        lat, // Latitude
        lng, // Longitude
        alt: 100, // Altitude (optional)
      },
    })

    // Store the fetched UV data
    uvData.value = response.data.result
    errorMessage.value = '' // Clear previous errors
  } catch (error) {
    console.error('Error fetching UV data:', error)
    errorMessage.value = 'Failed to fetch UV data. Please try again.'
    uvData.value = null // Reset data on error
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

      <!-- Display UV data when available -->
      <div v-if="uvData" class="mt-4">
        <h3>UV Data</h3>
        <p><strong>UV Index:</strong> {{ uvData.uv }}</p>
        <p><strong>UV Time:</strong> {{ uvData.uv_time }}</p>
        <p><strong>Max UV Index:</strong> {{ uvData.uv_max }}</p>
        <p><strong>Max UV Time:</strong> {{ uvData.uv_max_time }}</p>
        <p><strong>Ozone Level:</strong> {{ uvData.ozone }} DU</p>
        <p><strong>Ozone Time:</strong> {{ uvData.ozone_time }}</p>

        <!-- Safe exposure time for different skin types -->
        <h4>Safe Exposure Time (mins)</h4>
        <ul>
          <li>Skin Type 1: {{ uvData.safe_exposure_time.st1 }}</li>
          <li>Skin Type 2: {{ uvData.safe_exposure_time.st2 }}</li>
          <li>Skin Type 3: {{ uvData.safe_exposure_time.st3 }}</li>
          <li>Skin Type 4: {{ uvData.safe_exposure_time.st4 }}</li>
          <li>Skin Type 5: {{ uvData.safe_exposure_time.st5 }}</li>
          <li>Skin Type 6: {{ uvData.safe_exposure_time.st6 }}</li>
        </ul>

        <!-- Display sunrise and sunset times -->
        <h4>Sun Info</h4>
        <p><strong>Sunrise:</strong> {{ uvData.sun_info.sun_times.sunrise }}</p>
        <p><strong>Sunset:</strong> {{ uvData.sun_info.sun_times.sunset }}</p>
      </div>

      <!-- Display error message if API call fails -->
      <div v-if="errorMessage" class="mt-4 text-danger">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Style for the map */
#map {
  width: 100%;
  height: 500px;
  border-radius: 10px;
  margin-top: 20px;
}
</style>
