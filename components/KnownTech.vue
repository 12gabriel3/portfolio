<template>
  <v-container class="mb-6">
    <v-row>
      <v-col>
        <IconsJavascript></IconsJavascript>
        Javascript
      </v-col>
      <v-col>
        <IconsHTML></IconsHTML>
        HTML5
      </v-col>
      <v-col>
        <IconsCSS></IconsCSS>
        CSS3
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <IconsReact></IconsReact>
        React
      </v-col>
      <v-col>
        <IconsElectron></IconsElectron>
        Electron
      </v-col>
      <v-col>
        <IconsVuetify></IconsVuetify>
        Vuetify
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <IconsPython></IconsPython>
        Python
      </v-col>
      <v-col>
        <IconsCPlusPlus></IconsCPlusPlus>
        C++
      </v-col>
      <v-col>
        <IconsVue></IconsVue>
        Vue 3
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}
.v-col > svg {
  height: min(5rem, 10vw);
  width: min(5rem, 10vw);
}
</style>
