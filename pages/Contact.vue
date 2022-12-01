<template>
  <v-main class="contact-main">
    <v-slide-x-transition leave-absolute>
      <v-container class="contact-main" v-if="!emailSent">
        <h1>{{ $t("getInTouch") }}</h1>
        <p>{{ $t("contactText") }}</p>
        <v-form
          @submit.prevent="onSubmit"
          id="message-form"
          v-model="formValid"
        >
          <v-text-field
            v-model="name"
            :rules="nameRules"
            counter="50"
            name="from_name"
            :label="$t('name')"
          />
          <v-text-field
            v-model="email"
            :rules="emailRules"
            name="reply_to"
            label="Email"
          />
          <v-textarea
            name="message"
            counter="500"
            :rules="messageRules"
            v-model="message"
            :label="$t('message')"
            no-resize
            auto-grow
          />
          <ClientOnly>
            <VueRecaptcha
              ref="recaptcha"
              sitekey="6LdOfj8jAAAAANg1dkmOe5x5OmLA54OB7_3i-XrF"
              type="submit"
              size="invisible"
              @verify="sendEmail"
              loadRecaptchaScript
            />
          </ClientOnly>
          <v-btn type="submit">
            {{ $t("send") }}
          </v-btn>
        </v-form>
        <p class="error" v-if="error">{{ $t("emailNotSent") }}</p>
      </v-container>
    </v-slide-x-transition>
    <v-slide-x-reverse-transition leave-absolute>
      <v-container class="contact-main" v-if="emailSent">
        <h1>{{ $t("emailSent") }}</h1>
        <p>{{ $t("emailSentText") }}</p>
      </v-container>
    </v-slide-x-reverse-transition>
  </v-main>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const name = ref("");
const email = ref("");
const message = ref("");
const formValid = ref(false);
const emailSent = ref(false);
const error = ref(false);
const recaptcha = ref();
const nameRules = [
  (v: string) => !!v || t("nameRequired"),
  (v: string) => (v && v.length <= 50) || t("nameTooLong"),
];
const emailRules = [
  (v: string) => !!v || t("emailRequired"),
  (v: string) => /.+@.+\..+/.test(v) || t("emailInvalid"),
];
const messageRules = [
  (v: string) => !!v || t("messageRequired"),
  (v: string) => (v && v.length <= 500) || t("messageTooLong"),
];
useHead({
  title: t("meta.titleContact"),
  meta: [
    {
      name: "description",
      content: t("meta.descriptionContact"),
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
      href: `https://gabriel-aguiar.dev${localePath({ name: "contact" })}`,
    },
  ],
});
function onSubmit() {
  if (formValid.value) recaptcha.value.execute();
}
async function sendEmail() {
  try {
    const response = await emailjs.sendForm(
      "service_ltjr94u",
      "template_lpa0xyt",
      "#message-form",
      "O_PVolcySG0OqGQD4"
    );
    if (response.status !== 200) throw new Error();
    emailSent.value = true;
    name.value = "";
    email.value = "";
    message.value = "";
  } catch (e) {
    error.value = true;
  }
}
</script>
<style>
.grecaptcha-badge {
  visibility: hidden;
}
</style>
<style scoped>
.v-spacer {
  flex: 1 1 100%;
}
.contact-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min(100%, 600px);
  margin: auto;
}
.contact-main h1,
.contact-main p {
  margin: 1rem;
  text-align: center;
}
#message-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
#message-form > * {
  margin: 1rem;
  width: 100%;
}
.error {
  color: rgb(var(--v-theme-error));
}
</style>
