<template>
  <v-main class="contact-main">
    <v-spacer></v-spacer>
    <v-slide-x-transition leave-absolute>
      <v-container class="contact-main" v-if="!emailSent">
        <h1>{{ $t("getInTouch") }}</h1>
        <p>{{ $t("contactText") }}</p>
        <v-form id="message-form" @submit.prevent="onSubmitForm">
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
          <v-btn
            type="submit"
            class="g-recaptcha"
            data-sitekey="6LeG-zgjAAAAAO-tz4eBkvwfIB3_GPeGCmAWOEyA"
            data-callback="onSubmit"
            data-action="submit"
          >
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
    <v-spacer></v-spacer>
  </v-main>
</template>

<script setup lang="ts">
import { SubmitEventPromise } from "vuetify/lib/framework.mjs";
const { t } = useI18n();
const name = ref("");
const email = ref("");
const message = ref("");
const emailSent = ref(false);
const error = ref(false);
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

function onSubmit(token) {
  (document.getElementById("message-form") as HTMLFormElement)?.submit();
}
function onSubmitForm(event: SubmitEventPromise) {
  event.then((data) => {
    if (data.valid) sendEmail();
  });
}
function sendEmail() {
  emailjs
    .sendForm(
      "service_ltjr94u",
      "template_lpa0xyt",
      "#message-form",
      "O_PVolcySG0OqGQD4"
    )
    .then(
      function (response) {
        emailSent.value = true;
        name.value = "";
        email.value = "";
        message.value = "";
      },
      function (error) {
        error.value = true;
      }
    );
}
</script>

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
