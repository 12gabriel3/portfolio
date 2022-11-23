<template>
  <div class="fakeTerminal">
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
.fakeTerminal {
  width: 600px;
  height: 400px;
}
.fakeButtons {
  height: 11px;
  width: 11px;
  border-radius: 50%;
  position: relative;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 7px;
  border: 1px solid;
  background-color: #ff5f58;
  border-color: #e24740;
  display: inline-block;
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
  width: 550px;
  box-sizing: border-box;
  height: 25px;
  background-color: #bbb;
  margin: 0 auto;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.fakeScreen {
  background-color: #151515;
  box-sizing: border-box;
  width: 550px;
  height: 375px;
  margin: 0 auto;
  padding: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
