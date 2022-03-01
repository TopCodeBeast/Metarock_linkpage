<template>
  <div id="app">
    <img alt="Vue logo" src="/whiteLogo.png" />

    <div>
      <b-container class="bv-example-row">
        <b-row>
          <b-col sm
            ><a href="https://substrate.metarock.app">
              <div>
                <img alt="Vue logo" src="/polkadot.png" class="name" />
              </div>
              <div>Substrate</div>
            </a></b-col
          >
          <b-col sm
            ><a href="http://evm.metarock.network:3000">
              <div>
                <img alt="Vue logo" src="/metamask.png" class="name" />
              </div>
              <div>EVM</div>
            </a></b-col
          >
          <b-col sm
            ><a href="http://metarock.network:8080">
              <div>
                <img alt="Vue logo" src="/uniswap.png" class="name" />
              </div>
              <div>Swap</div>
            </a></b-col
          >
        </b-row>
      </b-container>
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
  font-size: 30px;
}

.bv-example-row {
  padding-top: 150px;
}

a {
  text-decoration: none !important;
  color: white !important;
}

/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {
  .bv-example-row {
    padding-top: 40px;
  }
}
</style>
