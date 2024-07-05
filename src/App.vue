<template>
  <main>
    <NavBar />
    <router-view />
  </main>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  font-family: "Yanone Kaffeesatz", sans-serif;
}
</style>
