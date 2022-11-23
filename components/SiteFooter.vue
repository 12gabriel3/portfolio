<template>
  <footer class="footer">
    <div class="border"></div>
    <p class="cpy">{{ $t("copyright") }}</p>
  </footer>
</template>

<style scoped>
.border {
  width: 100%;
  height: 1px;
  background-color: #1b263b;
  position: relative;
  top: 0;
}
.cpy {
  font-size: 1rem;
  color: #e0e1dd;
  user-select: none;
  text-align: center;
}
.footer {
  display: block;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 100vw;
  flex: 0 0 5vh;
}
</style>