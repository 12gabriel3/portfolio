<script setup lang="ts">
import { useTheme } from "vuetify";
const mq = window.matchMedia("(prefers-color-scheme: dark)");

const theme = useTheme();
theme.global.name.value = mq.matches ? "dark" : "light";
mq.addEventListener("change", (e) => {
  theme.global.name.value = e.matches ? "dark" : "light";
});
</script>

<template>
  <v-app>
    <SiteHeader />
    <NuxtPage />
    <v-footer>
      <p>{{ $t("copyright") }}</p>
    </v-footer>
  </v-app>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap");
@import url("https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css");
body {
  font-family: "Hack", sans-serif;
}
.v-footer {
  flex: 0 1 auto;
}
.v-footer p {
  text-align: center;
  width: 100%;
}
</style>
