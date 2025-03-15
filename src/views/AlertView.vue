<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'

// Generate time options for select inputs
const generateTimeOptions = (max) => 
  Array.from({ length: max }, (_, i) => i.toString().padStart(2, '0'))

// Reactive state
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')
const isInputValid = ref(true)
const timeLeft = ref(0)
const isCounting = ref(false)
let countdownInterval = null

// Time options for select inputs
const hourOptions = generateTimeOptions(24)
const minuteOptions = generateTimeOptions(60)
const secondOptions = generateTimeOptions(60)

// Convert time units to total seconds
const totalSeconds = computed(() => 
  parseInt(hours.value) * 3600 + 
  parseInt(minutes.value) * 60 + 
  parseInt(seconds.value)
)

// Format remaining time to HH:MM:SS
const formattedTime = computed(() => {
  const h = Math.floor(timeLeft.value / 3600)
  const m = Math.floor((timeLeft.value % 3600) / 60)
  const s = timeLeft.value % 60
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
})

// Show alert when timer completes
const showAlert = () => {
  alert('Sun Protection Reminder: Time to Reapply!')
  isCounting.value = false
}

// Start countdown timer
const startCountdown = () => {
  timeLeft.value = totalSeconds.value
  isCounting.value = true
  
  countdownInterval = setInterval(() => {
    timeLeft.value -= 1
    if (timeLeft.value <= 0) {
      clearInterval(countdownInterval)
      showAlert()
    }
  }, 1000)
}

// Clear interval when component unmounts
onBeforeUnmount(() => {
  if (countdownInterval) clearInterval(countdownInterval)
})

// Start timer with validation
const startTimer = () => {
  if (totalSeconds.value <= 0) {
    isInputValid.value = false
    return
  }
  
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
  
  isInputValid.value = true
  startCountdown()
}
</script>

<template>
  <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">Sun Protection Reminder</h1>
      <p class="col-md-8 fs-4">
        At SunSense, we’re driven by a passionate team of individuals who are dedicated to making
        sun safety simple, accessible, and engaging. Each member of our team brings unique
        expertise, creativity, and a shared commitment to protecting the health of Australians,
        especially young adults aged 18-25.
      </p>
    </div>

    <div class="container">
      <h1>Sun Protection Timer</h1>
      <div class="countdown-display" :class="{ active: isCounting }">
        {{ formattedTime }}
      </div>
      <div class="time-selector">
        <select 
          v-model="hours" 
          class="time-input"
          :disabled="isCounting"
        >
          <option v-for="h in hourOptions" :key="`h-${h}`" :value="h">{{ h }}h</option>
        </select>
        <select 
          v-model="minutes" 
          class="time-input"
          :disabled="isCounting"
        >
          <option v-for="m in minuteOptions" :key="`m-${m}`" :value="m">{{ m }}m</option>
        </select>
        <select 
          v-model="seconds" 
          class="time-input"
          :disabled="isCounting"
        >
          <option v-for="s in secondOptions" :key="`s-${s}`" :value="s">{{ s }}s</option>
        </select>
      </div>
      <button 
        @click="startTimer" 
        class="start-button"
        :disabled="isCounting"
      >
        {{ isCounting ? 'Timer Running...' : 'Start Sun Protection Timer' }}
      </button>
      <p v-if="!isInputValid" class="error-message">
        Please select a valid time (total duration must be greater than 0)
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.countdown-display {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 25px 0;
  color: #4a5568;
  opacity: 0.6;
  transition: all 0.3s ease;
}

.countdown-display.active {
  color: #2d3748;
  opacity: 1;
  transform: scale(1.05);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.time-selector {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
}

.time-input {
  padding: 8px 12px;
  border: 2px solid #007bff;
  border-radius: 8px;
  background-color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.time-input:hover {
  border-color: #0056b3;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.time-input:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  border-color: #cbd5e0;
}

.start-button {
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-weight: bold;
}

.start-button:hover:not(:disabled) {
  background-color: #0056b3;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.start-button:disabled {
  background-color: #cbd5e0;
  cursor: not-allowed;
  opacity: 0.8;
}

.error-message {
  color: #dc3545;
  margin-top: 15px;
  font-weight: bold;
  font-size: 0.95rem;
}
</style>