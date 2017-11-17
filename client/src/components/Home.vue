<template>
  <div class="content">
    <div id="home" class="col-xs-12 col-md-6">
      <div class="panel panel-info" id="content-panel">
          <div class="panel-body" >
            <h3>Page d'accueil</h3>
            <p>Exemple de projet realisé avec Nodejs/MongoDB (Backend) et VueJS (frontend)</p>
          </div>
        </div>                     
      </div>
  </div>
</template>

<script>
//import toastr from 'toastr'

export default {
  name: 'home',
  data () {
    return {
      user: null,
      msg : 'Page d\'accueil'
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#app {
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100% - 52px);
    width: 100%;
    #home{
      #content-panel{
        //background-color: rgba(255, 255, 255, 0.9);
        h1, h2 {
          font-weight: normal;
        }
        ul {
          list-style-type: none;
          padding: 0;
          li {
            display: inline-block;
            margin: 0 10px;
            a {
              color: #42b983;
            }
          }
        }
      }
    }
  }
}
</style>
