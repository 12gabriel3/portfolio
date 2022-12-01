<template>
  <div class="wrapper">
    <div class=fakeMenu>
      <div class="fakeButtons fakeClose"></div>
      <div class="fakeButtons fakeMinimize"></div>
      <div class="fakeButtons fakeZoom"></div>
    </div>
    <div class="fakeScreen">
      <LiveTyping :strings="[$t('welcome'), $t('myName'), $t('ilike')]" />
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  height: 400px;
  width: 600px;
}
.fakeButtons {
  height: 50%;
  width: auto;
  aspect-ratio: 1;
  border-radius: 50%;
  margin-left: 2%;
  margin-top: 1%;
  border: 1px solid;
  background-color: #ff5f58;
  border-color: #e24740;
  display: inline-block;
  vertical-align: top;
}

.fakeMinimize {
  background-color: #ffbd2e;
  border-color: #e0a124;
}

.fakeZoom {
  background-color: #28c941;
  border-color: #1dad2d;
}

.fakeMenu {
  width: 100%;
  box-sizing: border-box;
  height: 7%;
  background-color: #bbb;
  margin: 0 auto;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.fakeScreen {
  background-color: #272728;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: min(1rem, 1.5vw);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
