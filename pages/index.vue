<template>
  <v-main>
    <v-container class="main">
      <h1
        class="text-h5 text-md-h2 text-center py-10"
        v-html="$t('title')"
      ></h1>
      <v-container class="landing">
        <v-avatar class="avatar" variant="outlined" color="info">
          <v-img src="/img/avatar.webp" />
        </v-avatar>
        <FakeTerminal class="terminal" />
      </v-container>
      <h1 class="text-h5 text-md-h2 text-center pt-10 pb-3">{{ $t("about") }}</h1>
      <p class="text-justify">{{ $t("aboutText") }}</p>
      <h1 class="text-h5 text-md-h2 text-center pt-10 pb-3">
        {{ $t("useLatestTech") }}
      </h1>
      <KnownTech></KnownTech>
      <h1 class="text-h5 text-md-h2 text-center pt-10 pb-3">
        {{ $t("myJourney") }}
      </h1>
      <p class="text-justify">{{ $t("myJourneyText") }}</p>
    </v-container>
  </v-main>
</template>
<script setup>
const { t } = useI18n();
const localePath = useLocalePath();
useHead({
  title: t("meta.titleIndex"),
  meta: [
    {
      name: "description",
      content: t("meta.descriptionIndex"),
    },
    {
      name: "keywords",
      content: t("meta.keywords"),
    },
    {
      name: "author",
      content: "Gabriel Aguiar",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://gabriel-aguiar.dev${localePath({ name: "index" })}`,
    },
  ],
});
</script>

<style scoped>
.main {
  display: block;
  align-items: center;
  justify-content: center;
  width: min(100%, 1000px);
}
.terminal {
  position: absolute;
  top: 30%;
  left: 30%;
  height: min(400px, 60%);
  width: min(600px, 70%);
}
.landing {
  position: relative;
  width: min(1000px, 100%);
  height: auto;
  aspect-ratio: 1000 / 700;
}
.avatar {
  top: 0;
  left: 0;
  height: auto;
  width: 50%;
  aspect-ratio: 1;
  background-color: rgb(var(--v-theme-info));
}
</style>
