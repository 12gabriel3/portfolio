<script setup lang="ts">
import { useTheme } from "vuetify";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
const theme = useTheme();
const links = [
  {
    name: "home",
    path: "index",
  },
  {
    name: "creations",
    path: "creations",
  },
  {
    name: "blog",
    path: "blog",
  },
  {
    name: "contact",
    path: "contact",
  },
];
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<template>
  <v-app-bar flat density="compact">
    <v-container class="logo">
      <h3 class="brackets">{</h3>
      <h3 class="name">Gabriel Aguiar</h3>
      <h3 class="brackets">}</h3>
      <h3 class="semicolon">;</h3>
    </v-container>
    <v-spacer></v-spacer>
    <v-tabs centered>
      <v-tab v-for="link in links" :key="link.name" :to="localePath(link.path)">
        {{ $t(link.name) }}
      </v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
    <v-btn
      :icon="
        theme.global.current.value.dark
          ? 'mdi-white-balance-sunny'
          : 'mdi-weather-night'
      "
      @click="toggleTheme"
    ></v-btn>
    <v-btn
      icon="mdi-translate"
      :to="switchLocalePath(availableLocales[0].code)"
    ></v-btn>
    <v-btn
      icon="mdi-github"
      href="https://github.com/12gabriel3"
      target="_blank"
    ></v-btn>
  </v-app-bar>

  <div class="border"></div>
</template>

<style scoped>
.brackets {
  color: error;
  user-select: none;
}
.name {
  font-family: "Orbitron", sans-serif;
  user-select: none;
}
.brackets {
  color: rgb(var(--v-theme-info));
  user-select: none;
}
.logo {
  display: flex;
  align-items: center;
  flex: 0 1 fit-content;
}
</style>
