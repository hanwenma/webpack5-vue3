<template>
  <div class="animation">
    <transition name="test" 
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave"
    >
      <div v-if="isShow">
        <h3>this is h3 content!</h3>
      </div>
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

const beforeEnter = (el,done) => {
  console.log("beforeEnter");
}

const enter = (el,done) => {
  console.log("enter");
}

const beforeLeave = (el,done) => {
  console.log("beforeLeave");
}

const leave = (el,done) => {
  console.log("leave");
}

</script>

<style>
.test-enter-from,
.test-leave-to {
  opacity: 0;
}

.test-enter-to,
.test-leave-form {
  opacity: 1;
}

.test-enter-active,
.test-leave-active {
  transition: all 0.5s ease;
}
</style>