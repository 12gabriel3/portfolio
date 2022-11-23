<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <header class="wrapper">
    <h1 class="brackets">{</h1>
    <h1 class="name">Gabriel Aguiar</h1>
    <h1 class="brackets">}</h1>
    <h1 class="semicolon">;</h1>
    <div class="empty-space"></div>
    <nav>
      <NuxtLink :to="localePath('/')" class="headerButton">
        {{ $t("home") }}
      </NuxtLink>
      <NuxtLink :to="localePath('/MyCreations')" class="headerButton">
        {{ $t("creations") }}
      </NuxtLink>
      <NuxtLink :to="localePath('/Blog')" class="headerButton">
        {{ $t("blog") }}
      </NuxtLink>
      <NuxtLink :to="localePath('/Contact')" class="headerButton">
        {{ $t("contact") }}
      </NuxtLink>
    </nav>
    <div class="empty-space"></div>
    <NuxtLink
      class="headerButton smallFont"
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-language"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 5h7"></path>
        <path d="M9 3v2c0 4.418 -2.239 8 -5 8"></path>
        <path d="M5 9c-.003 2.144 2.952 3.908 6.7 4"></path>
        <path d="M12 20l4 -9l4 9"></path>
        <path d="M19.1 18h-6.2"></path>
      </svg>
    </NuxtLink>
    <NuxtLink
      to="https://github.com/12gabriel3"
      class="headerButton"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-brand-github"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
        ></path>
      </svg>
    </NuxtLink>
  </header>

  <div class="border"></div>
</template>

<style scoped>
.headerButton {
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0.5rem;
  text-decoration: none;
  color: #e0e1dd;
  user-select: none;
}
.brackets {
  user-select: none;
  font-weight: 100;
  color: #d1c733;
  font-size: 1.5rem;
}
.semicolon {
  user-select: none;
  font-weight: 100;
  color: #e0e1dd;
  font-size: 1.5rem;
}
.smallFont {
  font-size: 0.6rem;
}
.wrapper {
  display: flex;
  flex: 0 1 auto;
  justify-content: flex-end;
  align-items: center;
  width: 60%;
}
.border {
  width: 100%;
  height: 1px;
  background-color: #1b263b;
}
.router-link-active,
.headerButton:hover {
  color: #ffffff;
  text-shadow: #ffffff 0px 0px 2px;
}
.headerButton:hover .icon {
  filter: drop-shadow(0 0 1px #ffffff);
}
.name {
  margin: 0 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #e0e1dd;
  user-select: none;
  font-family: "Orbitron", sans-serif;
}
.empty-space {
  flex: 1 1 auto;
}
</style>
