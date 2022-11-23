<template>
  <div class="scroll">
    <main class="landing-main">
      <h1 class="title" v-html="$t('title')"></h1>
      <div class="landing">
        <img src="../assets/me.png" class="my-picture" />
        <FakeTerminal />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-down pulsating"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="18" y1="13" x2="12" y2="19"></line>
        <line x1="6" y1="13" x2="12" y2="19"></line>
      </svg>
      <section class="about">
        <h1>{{ $t("about") }}</h1>
        <p>{{ $t("aboutText") }}</p>
      </section>
      <picture class="skills">
        <NuxtLink class="deviconLink" :to="$t('linkJavascript')" target="_blank">
          <i class="devicon-javascript-plain colored"></i>
        </NuxtLink>
        <NuxtLink class="deviconLink" to="https://www.typescriptlang.org/" target="_blank">
          <i class="devicon-typescript-plain colored"></i>
        </NuxtLink>
        <NuxtLink class="deviconLink" :to="$t('linkHTML')" target="_blank">
          <i class="devicon-html5-plain colored"></i>
        </NuxtLink>
        <NuxtLink class="deviconLink" :to="$t('linkCSS')" target="_blank">
          <i class="devicon-css3-plain colored"></i>
        </NuxtLink>
        <NuxtLink class="deviconLink" to="https://vuejs.org/" target="_blank">
          <i class="devicon-vuejs-plain colored"></i>
        </NuxtLink>
        <NuxtLink class="deviconLink" :to="$t('linkReact')" target="_blank">
          <i class="devicon-react-plain colored"></i>
        </NuxtLink>
        <NuxtLink class="deviconLink" :to="$t('linkC')" target="_blank">
          <i class="devicon-c-plain colored"></i>
        </NuxtLink>
        <NuxtLink class="deviconLink" :to="$t('linkCPlusPlus')" target="_blank">
          <i class="devicon-cplusplus-plain colored"></i>
        </NuxtLink>
        <NuxtLink class="deviconLink" to="https://www.python.org/" target="_blank">
          <i class="devicon-python-plain colored"></i>
        </NuxtLink>
        <NuxtLink class="deviconLink" :to="$t('linkElectron')" target="_blank">
          <i class="devicon-electron-original colored"></i>
        </NuxtLink>
      </picture>
      <div class="empty-space"></div>
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
.deviconLink{
  transition: transform 0.2s ease-in-out;
  margin: 1rem;
  text-decoration: none;
}
.deviconLink:hover {
  transform: scale(1.1);
}
.skills {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 2rem;
  border-radius: 1rem;
  border-width: 1px;
  border-style: solid;
  border-color: #1b263b;
}
i {
  font-size: 5rem;
}
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.scroll::-webkit-scrollbar {
  display: none;
}
.scroll {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;
  scroll-behavior: smooth;
}
.landing-main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon-tabler-arrow-down {
  height: 96px;
  width: 96px;
  color: #e0e1dd;
  flex: 0 0 auto;
}
.landing {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 62vh;
  width: 100vw;
  flex: 1 0 auto;
}
.my-picture {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  border: 2px solid #e0e1dd;
  background-color: #e0e1dd;
  margin-right: -100px;
  margin-top: -200px;
}
.name {
  margin: 0 0.5rem;
  font-size: 3rem;
  font-weight: bold;
  color: #e0e1dd;
  user-select: none;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 500px;
}
.title {
  width: 60vw;
  height: 15vh;
  text-align: center;
  flex: 1 0 auto;
}
.empty-space {
  flex: 1 0 10vh;
}
.pulsating {
  animation: pulsate 1s ease-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes pulsate {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>
