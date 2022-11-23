<template>
  <main class="contact-main">
    <form autocomplete="off" id="message-form">
      <fieldset class="message">
        <legend>{{ $t("yourInfo") }}</legend>
        <div class="input">
          <label :class="{ focused: nameFocused || name }" for="name">{{
            $t("name")
          }}</label>
          <input
            autocomplete="off"
            @invalid.prevent="onNameInvalid"
            @focusin="onNameFocusIn"
            @focusout="onNameFocusOut"
            v-model="name"
            type="text"
            id="name"
            :title="$t('nameTitle')"
            required
          />
          <InfoIcon
            :show="nameInvalid"
            :message="$t('nameRequired')"
          ></InfoIcon>
        </div>
        <div class="input">
          <label :class="{ focused: emailFocused || email }" for="email"
            >Email</label
          >
          <input
            autocomplete="off"
            @invalid.prevent="onEmailInvalid"
            @focusin="onEmailFocusIn"
            @focusout="onEmailFocusOut"
            @input="onEmailInput"
            v-model="email"
            type="email"
            id="email"
            :title="$t('emailTitle')"
            required
          />
          <InfoIcon
            :show="emailInvalid"
            :message="$t('emailRequired')"
          ></InfoIcon>
        </div>
      </fieldset>
      <fieldset class="message">
        <legend>{{ $t("yourMessage") }}</legend>
        <div class="input">
          <textarea
            @invalid.prevent="onMessageInvalid"
            id="message"
            @focusin="onMessageFocusIn"
            v-model="message"
            :title="$t('yourMessageTitle')"
            required
          />
          <InfoIcon
            :show="messageInvalid"
            :message="$t('messageRequired')"
          ></InfoIcon>
        </div>
      </fieldset>
      <button
        type="submit"
        class="g-recaptcha submit"
        data-sitekey="6LfoyiMjAAAAAMD_F_cOhJaLN2wqBU8GLv-4gevR"
        data-callback="onSubmit"
        data-action="submit"
      >
        {{ $t("send") }}
      </button>
    </form>
  </main>
  <SiteFooter></SiteFooter>
</template>

<script setup>
const emailInvalid = ref(false);
const emailFocused = ref(false);
const nameInvalid = ref(false);
const messageInvalid = ref(false);
const nameFocused = ref(false);
const name = ref("");
const email = ref("");

function onMessageInvalid() {
  messageInvalid.value = true;
}

function onSubmit(token) {
  document.getElementById("message-form").submit();
}

function onEmailInvalid() {
  emailInvalid.value = true;
}

function onNameInvalid() {
  nameInvalid.value = true;
}

function onEmailFocusIn() {
  emailFocused.value = true;
  emailInvalid.value = false;
}
function onNameFocusIn() {
  nameFocused.value = true;
  nameInvalid.value = false;
}

function onEmailFocusOut() {
  if (email.value === "") {
    emailFocused.value = false;
  }
}

function onNameFocusOut() {
  if (name.value === "") {
    nameFocused.value = false;
  }
}

function onMessageFocusIn() {
  messageInvalid.value = false;
}
</script>

<style scoped>
button.submit {
  background-color: #1b263b;
  color: #e0e1dd;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  width: 105%;
  height: 3rem;
  font-size: 2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
button.submit:hover {
  background-color: #2c3e50;
}
label.focused {
  font-size: 0.8rem;
  opacity: 80%;
  padding-top: 0.3rem;
  color: #e0e1dd;
  user-select: none;
}
legend {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #e0e1dd;
}
#message-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 0.5rem;
}
label {
  position: absolute;
  display: block;
  top: 0rem;
  left: 0;
  width: fit-content;
  padding-top: 1.5rem;
  padding-left: 0.5rem;
  font-size: 1.5rem;
  color: #e0e1dd;
  user-select: none;
  transition: all 0.1s ease-in-out;
  pointer-events: none;
}
fieldset.message {
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid #1b263b;
  margin: 1rem 0;
}
textarea,
textarea:focus {
  width: 100%;
  height: 20rem;
  resize: none;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  color: #e0e1dd;
  background-color: #1b263b;
  user-select: none;
  outline: none;
}
.contact-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.input {
  background-color: #1b263b;
  border-radius: 0.5rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0.5rem;
  padding-top: 1.5rem;
}
input,
input:focus,
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active,
input:-internal-autofill-selected {
  appearance: none;
  border: none;
  font-size: 1.5rem;
  color: #e0e1dd;
  background: none;
  user-select: none;
  outline: none;
  -webkit-text-fill-color: #e0e1dd !important;
  -webkit-box-shadow: 0 0 0px 1000px #1b263b inset;
}

label[for="message"] {
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
