<template>
  <div id="app">
    <b-nav>
      <b-nav-item></b-nav-item>
      <b-nav-item
        ><img alt="Vue logo" src="/whiteLogo.png" width="90" height="70"
      /></b-nav-item>
    </b-nav>
    <b-container class="main-item">
      <b-row class="text-center items" align-v="center">
        <b-col></b-col>
        <b-col
          ><a href="https://substrate.metarock.app">
            <div>
              <img
                alt="Vue logo"
                src="/polkadot.png"
                class="name"
                width="100"
              />
              <p class="name">Substrate</p>
            </div>
          </a></b-col
        >
        <b-col
          ><a href="http://evm.metarock.network:3000">
            <div>
              <img
                alt="Vue logo"
                src="/metamask.png"
                class="name"
                width="100"
              />
              <p class="name">EVM</p>
            </div>
          </a></b-col
        >
        <b-col></b-col>
      </b-row>
    </b-container>
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
  font-size: 30px;
}

.name {
  padding-top: 10px;
}

.main-item{
  height: 90vh !important;
}

.items {
  height: 80% !important;
}

a {
  text-decoration: none !important;
  color: white !important;
}

/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 700px) {
  .img {
    width: 50px;
  }
}
</style>
