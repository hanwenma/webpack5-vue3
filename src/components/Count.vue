<template>
  <div class="count">
    <h3>{{ count }}</h3>
    <button @click="add">add</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(0);

const add = function (){
    count.value += 1;
}
</script>

<style>
</style>