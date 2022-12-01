<template>
  <div></div>
</template>
<script setup>
const { t } = useI18n();
const localePath = useLocalePath();
useHead({
  title: t("meta.titleCreations"),
  meta: [
    {
      name: "description",
      content: t("meta.descriptionCreations"),
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
      href: `https://gabriel-aguiar.dev${localePath({ name: "creations" })}`,
    },
  ],
});
</script>
