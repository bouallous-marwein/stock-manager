<template>
  <div class="content">
    <div id="about" class="col-xs-12 col-md-6">
      <div class="panel panel-info" id="content-panel">
          <div class="panel-body" >
            <h3>Contact</h3>
    
            <p>contact Page</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {}
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
    #about{ 
      #content-panel{
        background-color: rgba(255, 255, 255, 0.7);
      }
    }
  }
}
</style>
