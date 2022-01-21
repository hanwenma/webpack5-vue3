<template>
  <div class="app">
    <h1>{{ message }}</h1>
    <button @click="reverse">reverse</button>
    <hr />
    <Count></Count>
    <hr>
    <Animation />
    <hr />
    <img class="img" src="./assets/wk.png" />
  </div>
</template>

<script>
import { ref } from "vue";
import Count from "./components/Count.vue";
import Animation from "./components/Animation.vue";
export default {
  name: "app",
  components: {
    Count,
    Animation
  },
  setup(props, context) {
    const message = ref("this is app component");

    console.log("App props = ", props);
    console.log("App context = ", context);

    const reverse = () => {
      message.value = message.value.split('').reverse().join('');
    };

    return {
      message,
      reverse
    };
  },
};
</script>

<style>
.app {
  text-align: center;
}
h1 {
  text-align: center;
  color: red;
}
.img {
  width: 500px;
  height: 500px;
}
</style>