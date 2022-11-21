<template>
  <form id="demo-form">
    <label for="name">Your name</label>
    <input type="text" id="name" />
    <label for="email">Your email</label>
    <input type="text" id="email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" />
    <label for="message">Your message</label>
    <input type="text" id="message" />
    <button
      class="g-recaptcha"
      data-sitekey="6LfoyiMjAAAAAMD_F_cOhJaLN2wqBU8GLv-4gevR"
      data-callback="onSubmit"
      data-action="submit"
    >
      Submit
    </button>
  </form>
</template>
<script>
function onSubmit(token) {
  document.getElementById("demo-form").submit();
}
</script>
