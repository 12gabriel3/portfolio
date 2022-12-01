<script setup lang="ts">
import { useTheme } from "vuetify";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
useHead({
  htmlAttrs: {
    lang: locale.value,
  },
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

const drawer = ref(false);
const settings = ref(false);

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<template>
  <v-app-bar flat density="compact">
    <v-btn
      icon="mdi-menu"
      class="d-flex d-sm-none"
      @click="
        drawer = !drawer;
        settings = false;
      "
    ></v-btn>
    <v-container class="logo">
      <h3 class="brackets">{</h3>
      <h3 class="name">Gabriel Aguiar</h3>
      <h3 class="brackets">}</h3>
      <h3 class="semicolon">;</h3>
    </v-container>
    <v-spacer class="d-none d-sm-flex"></v-spacer>
    <v-tabs centered class="d-none d-sm-flex">
      <v-tab v-for="link in links" :key="link.name" :to="localePath(link.path)">
        {{ $t(link.name) }}
      </v-tab>
    </v-tabs>
    <v-spacer class="d-none d-sm-flex"></v-spacer>
    <v-btn
      class="d-none d-sm-flex"
      :icon="
        theme.global.current.value.dark
          ? 'mdi-white-balance-sunny'
          : 'mdi-weather-night'
      "
      :aria-label="
        theme.global.name.value === 'dark' ? $t('lightTheme') : $t('darkTheme')
      "
      @click="toggleTheme"
    ></v-btn>
    <v-btn
      class="d-none d-sm-flex"
      icon="mdi-translate"
      :to="switchLocalePath(availableLocales[0].code)"
      :aria-label="$t('translate')"
    ></v-btn>
    <v-btn
      class="d-none d-sm-flex"
      icon="mdi-github"
      href="https://github.com/12gabriel3"
      target="_blank"
      aria-label="Github"
    ></v-btn>
    <v-btn
      icon="mdi-dots-vertical"
      class="d-flex d-sm-none"
      @click="
        settings = !settings;
        drawer = false;
      "
    ></v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="left" temporary>
    <v-list>
      <v-list-item
        v-for="link in links"
        :key="link.name"
        :to="localePath(link.path)"
        @click="drawer = false"
      >
        <v-list-item-title>{{ $t(link.name) }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-navigation-drawer v-model="settings" location="right" temporary>
    <v-list>
      <v-list-item
        @click="
          toggleTheme();
          settings = false;
        "
        :prepend-icon="
          theme.global.current.value.dark
            ? 'mdi-white-balance-sunny'
            : 'mdi-weather-night'
        "
      >
        <v-list-item-title>{{
          theme.global.name.value === "dark"
            ? $t("lightTheme")
            : $t("darkTheme")
        }}</v-list-item-title>
      </v-list-item>
      <v-list-item
        :to="switchLocalePath(availableLocales[0].code)"
        @click="settings = false"
        prepend-icon="mdi-translate"
      >
        <v-list-item-title>{{ $t("translate") }}</v-list-item-title>
      </v-list-item>
      <v-list-item
        prepend-icon="mdi-github"
        href="https://github.com/12gabriel3"
        target="_blank"
        @click="settings = false"
      >
        <v-list-item-title>Github</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.semicolon {
  user-select: none;
}
.name {
  font-family: "Orbitron", sans-serif;
  user-select: none;
  white-space: nowrap;
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
