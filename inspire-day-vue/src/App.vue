
<template>
  <div id="app">
    <!--tags prefixed with md signify use of material design components within this project-->
    <md-app md-waterfall md-mode="fixed">
      
      <md-app-toolbar class="md-primary">
        <span class="md-title">Inspire Day 2019 - VueJS Demonstration</span>
          <div class="md-toolbar-section-end">
                <md-button @click="$router.push('/')" class="md-primary">Home</md-button>
                <md-button @click="$router.push('/list')" class="md-primary">Employees</md-button>
          </div>
      </md-app-toolbar>

      <md-app-content class="app-container">
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss">

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

.app-container{
  height: 94vh !important;
}
</style>
