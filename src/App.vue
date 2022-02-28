<template>
  <div id="app">
    <img alt="Vue logo" src="/whiteLogo.png" class="name" />

    <div class="flex-container">
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
}
.name {
  margin-top: 40px;
}
* {
  box-sizing: border-box;
}

.flex-container {
  display: flex;
  flex-direction: row;
  font-size: 30px;
  text-align: center;
}

.flex-item-left {
  background-color: transparent;
  padding: 10px;
  flex: 50%;
}

.flex-item-right {
  background-color: transparent;
  padding: 10px;
  flex: 50%;
}

/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}

a{
  text-decoration: none;
  color: white;
}
</style>
