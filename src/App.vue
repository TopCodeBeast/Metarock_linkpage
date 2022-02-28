<template>
  <div id="app">
    <img alt="Vue logo" src="/whiteLogo.png" />

    <div class="flex-container">
      <div class="flex-item-left1"></div>
      <div class="flex-item-left">
        <a href="https://substrate.metarock.app">
          <div>
            <img alt="Vue logo" src="/polkadot.png" class="name" />
          </div>
          <div>Substrate</div>
        </a>
      </div>
      <div class="flex-item-right">
        <a href="http://evm.metarock.network:3000">
          <div>
            <img alt="Vue logo" src="/metamask.png" class="name" />
          </div>
          <div>EVM</div>
        </a>
      </div>
      <div class="flex-item-right1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  padding-top: 30px;
}

* {
  box-sizing: border-box;
}

.flex-container {
  display: flex;
  flex-direction: row;
  font-size: 30px;
  text-align: center;
  padding-top: 150px;
}


.flex-item-left1 {
  background-color: transparent;
  flex: 30%;
}

.flex-item-left {
  background-color: transparent;
  padding: 10px;
  flex: 10%;
}

.flex-item-right {
  background-color: transparent;
  padding: 10px;
  flex: 10%;
}

.flex-item-right1 {
  background-color: transparent;
  flex: 30%;
}

/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
    padding-top: 40px;
  }
  .flex-item-left1 {
    flex: 0%;
  }
  .flex-item-right1 {
    flex: 0%;
  }
}

a {
  text-decoration: none;
  color: white;
}
</style>
