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
    <v-footer class="mt-10">
      <p :innerHTML="$t('copyright')" class="text-caption" />
    </v-footer>
  </v-app>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap");
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

.v-footer p a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}
.v-footer p a:link {
  color: rgb(var(--v-theme-info));
}

.v-footer p a:visited {
  color: rgba(var(--v-theme-info), 0.5);
}

.v-footer p a:focus {
  border-bottom: 1px solid;
  background: rgba(var(--v-theme-info), 0.5);
}

.v-footer p a:hover {
  border-bottom: 1px solid;
  background: rgba(var(--v-theme-info), 0.2);
}

.v-footer p a:active {
  background: rgb(var(--v-theme-info));
  color: rgba(var(--v-theme-info), 0.2);
}
</style>
