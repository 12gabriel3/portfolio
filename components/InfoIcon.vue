<template>
  <div :class="{ wrapper: true, hidden: !props.show }">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-info-circle"
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
      <circle cx="12" cy="12" r="9"></circle>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
      <polyline points="11 12 12 12 12 16 13 16"></polyline>
    </svg>
    <span class="error-message">{{ props.message }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.hidden {
  opacity: 0;
  pointer-events: none;
}
.wrapper {
  position: relative;
  display: block;
  height: 1.5rem;
  width: 1.5rem;
  transition: opacity 0.2s ease-in-out;
}
.icon-tabler-info-circle {
  color: #ff0505;
  cursor: pointer;
}
.error-message {
  position: absolute;
  top: 50%;
  font-size: 1rem;
  padding: 0.5rem;
  color: #e0e1dd;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
  background-color: #1b263b;
  border-radius: 0.3rem;
  transform: translate(1rem, -50%);
  z-index: 1;
  white-space: nowrap;
}
.icon-tabler-info-circle:hover ~ .error-message {
  opacity: 1;
}
</style>