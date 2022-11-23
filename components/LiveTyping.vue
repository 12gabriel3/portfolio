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
  <span class="folderName">~</span><br>
  <span class="text"
    ><span class="prompt">❯</span> {{ text }}
    <div class="cursor"
  /></span>
</template>

<style scoped>

.cursor {
  position: relative;
  width: 3px;
  height: 1.5rem;
  background-color: #fff;
  animation: blink 1s infinite;
  display: inline-block;
  top: 0.3rem;
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
}
.folderName {
  color: #13acdf;
  font-weight: bold;
  display: inline-block;
  margin-right: 5px;
}
.text {
  font-size: 1.5rem;
  color: #e0e1dd;
}
</style>