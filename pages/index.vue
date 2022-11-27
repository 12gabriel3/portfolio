<template>
  <v-main>
    <v-container class="main">
      <h1 class="title" v-html="$t('title')"></h1>
      <v-spacer></v-spacer>
      <v-container class="landing">
        <v-avatar class="avatar" image="img/me.png" size="400" variant="outlined" />
        <FakeTerminal class="terminal" />
      </v-container>
      <h1>{{ $t("about") }}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </v-container>
  </v-main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 50%;
}
.terminal {
  position: absolute;
  top: 30%;
  left: 30%;
}
.landing {
  position: relative;
  width: 1000px;
  height: 700px;
}
.avatar {
  top: 0;
  left: 0;
  background-color: rgb(var(--v-theme-info));
}
</style>
