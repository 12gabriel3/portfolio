<template>
  <div class="wrapper">
    <h1 class="title" v-html="$t('title')"></h1>
    <div class="landing">
      <img src="../assets/me.png" class="my-picture" />
      <FakeTerminal />
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-down"
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
    <h1>{{ $t("about") }}</h1>
    <p>{{ $t("aboutText") }}</p>
    <div class="skills">
      <i class="devicon-javascript-plain colored"></i>
      <i class="devicon-typescript-plain colored"></i>
      <i class="devicon-html5-plain-wordmark colored"></i>
      <i class="devicon-css3-plain-wordmark colored"></i>
      <i class="devicon-vuejs-plain-wordmark colored"></i>
      <i class="devicon-react-plain-wordmark colored"></i>
      <i class="devicon-c-plain colored"></i>
      <i class="devicon-cplusplus-plain colored"></i>
      <i class="devicon-python-plain-wordmark colored"></i>
      <i class="devicon-electron-original-wordmark colored"></i>
    </div>
    <div class="empty-space"></div>
    <SiteFooter />
  </div>
</template>

<style scoped>
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
  margin: 1rem;
}

.wrapper::-webkit-scrollbar {
  display: none;
}
.wrapper {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;
  scroll-behavior: smooth;
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
</style>
