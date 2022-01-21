<template>
  <div class="animation">
    <transition name="fade">
      <h3 v-if="isShow">this is h3 content!</h3>
    </transition>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isShow = ref(true);

const toggle = function () {
  isShow.value = !isShow.value;
};
</script>

<style>

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-form {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: 'opacity' 0.5;
}

.fade-leave-active {
  transition: 'opacity' 0.5;
}
</style>