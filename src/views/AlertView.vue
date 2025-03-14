<script setup>
import { ref } from 'vue';

const inputTime = ref('');
const isInputValid = ref(true);

const showAlert = () => {
  alert('It is Time！');
};

const startTimer = () => {
  const timeInSeconds = parseInt(inputTime.value);
  if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
    isInputValid.value = false;
  }
  isInputValid.value = true; 
  setTimeout(showAlert, timeInSeconds * 1000);
};
</script>


<template>
  <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Sun Protection Reminder</h1>
        <p class="col-md-8 fs-4">At SunSense, we’re driven by a passionate team of individuals who are dedicated to making sun safety simple, accessible, and engaging. Each member of our team brings unique expertise, creativity, and a shared commitment to protecting the health of Australians, especially young adults aged 18-25.</p>
      </div>

      <div class="container">
    <h1>Alert</h1>
    <div class="input-group">
      <input
        v-model="inputTime"
        type="text"
        placeholder="input the time"
        :class="{ 'is-invalid': !isInputValid }"
      />
      <button @click="startTimer">start</button>
    </div>
    <p v-if="!isInputValid" class="error-message">input the correct number!</p>
  </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input.is-invalid {
  border-color: red;
}

button {
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  font-size: 0.9em;
}
</style>