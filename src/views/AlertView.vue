<script setup>
import { ref } from 'vue'

// Reactive state for user input time
const inputTime = ref('')
const isInputValid = ref(true)

// Function to show an alert when the timer ends
const showAlert = () => {
  alert('It is Time！')
}

// Function to start the countdown timer
const startTimer = () => {
  const timeInSeconds = parseInt(inputTime.value) // Convert input to number
  if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
    isInputValid.value = false // Show error if input is invalid
    return
  }
  isInputValid.value = true
  setTimeout(showAlert, timeInSeconds * 1000) // Trigger alert after countdown
}
</script>

<template>
  <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5">
      <!-- Section title and introduction -->
      <h1 class="display-5 fw-bold">Sun Protection Reminder</h1>
      <p class="col-md-8 fs-4">
        At SunSense, we’re dedicated to making sun safety simple and accessible. Our team works hard
        to provide accurate sun protection tips, especially for young adults aged 18-25.
      </p>
    </div>

    <div class="container">
      <h1>Alert</h1>
      <!-- Timer input and start button -->
      <div class="input-group">
        <input
          v-model="inputTime"
          type="text"
          placeholder="Please Input the time"
          :class="{ 'is-invalid': !isInputValid }"
        />
        <button @click="startTimer">Start</button>
      </div>
      <!-- Error message if input is invalid -->
      <p v-if="!isInputValid" class="error-message">Please enter a valid number!</p>
    </div>
  </div>
</template>

<style scoped>
/* Center the container and limit width */
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

/* Input and button alignment */
.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

/* Input field styling */
input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Highlight input border when invalid */
input.is-invalid {
  border-color: red;
}

/* Button styling */
button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Button hover effect */
button:hover {
  background-color: #0056b3;
}

/* Error message styling */
.error-message {
  color: red;
  font-size: 0.9em;
}
</style>
