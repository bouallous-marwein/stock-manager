<template>
  <div id="app" class="page-container">
    <navbar></navbar>
    <div class="container">
      <img src="./assets/logo.png"/>
    </div>
    <router-view class="container" class="vue-container"></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'app',
  components:{
    'navbar': Navbar
  }
}
</script>

<style lang="scss">
@import './assets/scss/custom.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  &.page-container {
    margin : 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    .vue-container {
      .panel{
          background-color: rgba(255, 255, 255, 0.9);
      }
            
      .fade-enter-active {
          transition: opacity .5s;
          opacity: 1;
      }

      .fade-enter {
          opacity: 0;
      }

      .fade-leave {
          display: none;
      }

      .fade-leave-active{
          display: none
      }
      display: flex;
      align-items: center;
      justify-content: center;
      height: calc(100vh - 52px);
      width: 100%;
      /*
      background: transparent;
      background-image: url('./assets/img/bg.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      */
      .v-center {
        width: 50%;
        height: 12vw;
        background-color: transparent;
        .logo {
          width: auto;
          height: 100%;
          margin: 20px;
        }
      }
    }
  }
}
</style>
