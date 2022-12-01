<script setup>
const props = defineProps(["strings"]);
const text = ref("");
let current = "";

const type = (index = 0) => {
  if (current.length) {
    text.value += current.charAt(0);
    current = current.substring(1);
    setTimeout(() => type(index), 50);
  } else {
    setTimeout(() => erase(index), 1000);
    current = props.strings[index];
  }
};

const erase = (index) => {
  if (text.value.length > 0) {
    text.value = text.value.slice(0, -1);
    setTimeout(() => erase(index), 10);
  } else {
    setTimeout(() => type((index + 1) % props.strings.length), 1000);
  }
};

type();
</script>

<template>
  <span class="folderName">~</span>
  <br />
  <span class="text">
    <span class="prompt">❯</span>
    {{ text }}
    <div class="cursor" />
  </span>
</template>

<style scoped>
.cursor {
  position: relative;
  height: min(1.5rem, 4vw);
  width: 3px;
  background-color: #fff;
  animation: blink 1s infinite;
  display: inline-block;
  top: min(0.3rem, 0.75vw);
}
@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.prompt {
  color: #1adf13;
  font-weight: bold;
  display: inline-block;
  font-size: min(1.5rem, 4vw);
  margin: 0;
}
.folderName {
  color: #13acdf;
  font-size: min(1.5rem, 4vw);
  font-weight: bold;
  display: inline-block;
  margin: 0;
  margin-right: 5px;
}
.text {
  font-size: min(1.5rem, 4vw);
  color: #e0e1dd;
  margin: 0;
}
</style>
