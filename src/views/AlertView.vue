<script setup>
import { ref } from 'vue';

// 定义用户输入的时间
const inputTime = ref('');
const isInputValid = ref(true);

// 弹出提醒的函数
const showAlert = () => {
  alert('时间到了！');
};

// 处理用户输入并设置定时器
const startTimer = () => {
  const timeInSeconds = parseInt(inputTime.value);
  if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
    isInputValid.value = false; // 输入无效
    return;
  }
  isInputValid.value = true; // 输入有效
  setTimeout(showAlert, timeInSeconds * 1000); // 转换为毫秒
};
</script>


<template>
  <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Sun Protection Reminder</h1>
        <p class="col-md-8 fs-4">At SunSense, we’re driven by a passionate team of individuals who are dedicated to making sun safety simple, accessible, and engaging. Each member of our team brings unique expertise, creativity, and a shared commitment to protecting the health of Australians, especially young adults aged 18-25.</p>
        <router-link to="/authentication/login" class="btn btn-outline-primary me-2">Join us</router-link>
      </div>

      <div class="container">
    <h1>定时提醒</h1>
    <div class="input-group">
      <input
        v-model="inputTime"
        type="text"
        placeholder="输入时间（秒）"
        :class="{ 'is-invalid': !isInputValid }"
      />
      <button @click="startTimer">开始计时</button>
    </div>
    <p v-if="!isInputValid" class="error-message">请输入有效的正整数！</p>
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