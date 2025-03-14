<script setup>
import { ref, onMounted } from 'vue';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css';

// Mapbox Access Token
mapboxgl.accessToken = 'pk.eyJ1IjoiZmVhc2FjaHQiLCJhIjoiY20yNGQwNDFrMGV5aDJqcHE4cndnNnJvMyJ9.T9-AvInRMZRiizPI-Vfl6w'; // 替换为你的 Mapbox Access Token

// OpenUV API Access Token
const openUvToken = 'openuv-11cnu4rm889hvyl-io'; // 替换为你的 OpenUV Access Token

// 定义变量
const uvData = ref(null);
const errorMessage = ref('');

// 地图初始化
onMounted(() => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [144.9631, -37.8136], // 默认中心点（墨尔本）
    zoom: 10,
  });

  // 添加地图点击事件
  map.on('click', async (event) => {
    const { lng, lat } = event.lngLat;
    await fetchUvData(lat, lng);
  });

  // 添加导航控件
  map.addControl(new mapboxgl.NavigationControl());
});

// 获取 UV 数据
const fetchUvData = async (lat, lng) => {
  try {
    const response = await axios.get('https://api.openuv.io/api/v1/uv', {
      headers: {
        'x-access-token': openUvToken,
      },
      params: {
        lat,
        lng,
        alt: 100, // 海拔高度（可选）
      },
    });

    uvData.value = response.data.result;
    errorMessage.value = '';
  } catch (error) {
    console.error('Error fetching UV data:', error);
    errorMessage.value = 'Failed to fetch UV data. Please try again.';
    uvData.value = null;
  }
};
</script>

<template>
  <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">UV Index Map</h1>
      <p class="col-md-8 fs-4">Click on the map to view the UV index and related data for that location.</p>

      <!-- 地图容器 -->
      <div id="map" style="width: 100%; height: 500px;" class="mt-5"></div>

      <!-- UV 数据展示 -->
      <div v-if="uvData" class="mt-4">
        <h3>UV Data</h3>
        <p><strong>UV Index:</strong> {{ uvData.uv }}</p>
        <p><strong>UV Time:</strong> {{ uvData.uv_time }}</p>
        <p><strong>Max UV Index:</strong> {{ uvData.uv_max }}</p>
        <p><strong>Max UV Time:</strong> {{ uvData.uv_max_time }}</p>
        <p><strong>Ozone Level:</strong> {{ uvData.ozone }} DU</p>
        <p><strong>Ozone Time:</strong> {{ uvData.ozone_time }}</p>
        <h4>Safe Exposure Time (mins)</h4>
        <ul>
          <li>Skin Type 1: {{ uvData.safe_exposure_time.st1 }}</li>
          <li>Skin Type 2: {{ uvData.safe_exposure_time.st2 }}</li>
          <li>Skin Type 3: {{ uvData.safe_exposure_time.st3 }}</li>
          <li>Skin Type 4: {{ uvData.safe_exposure_time.st4 }}</li>
          <li>Skin Type 5: {{ uvData.safe_exposure_time.st5 }}</li>
          <li>Skin Type 6: {{ uvData.safe_exposure_time.st6 }}</li>
        </ul>
        <h4>Sun Info</h4>
        <p><strong>Sunrise:</strong> {{ uvData.sun_info.sun_times.sunrise }}</p>
        <p><strong>Sunset:</strong> {{ uvData.sun_info.sun_times.sunset }}</p>
      </div>

      <!-- 错误提示 -->
      <div v-if="errorMessage" class="mt-4 text-danger">
        {{ errorMessage }}
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
}
</style>