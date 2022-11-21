<script setup lang="ts">

</script>

<template>
  <div class="root">
    <SiteHeader />
    <NuxtPage />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap');
@import url('https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css');
body {
  margin: 0;
  padding: 0;
  font-family: "Hack", sans-serif;
  background-color: #0d1b2a;
}
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #e0e1dd;
  user-select: none;
}
p {
  font-size: 1.5rem;
  color: #e0e1dd;
  user-select: none;
}
</style>
