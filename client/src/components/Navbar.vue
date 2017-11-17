<template>
    <!-- Static navbar -->
    <nav class="navbar navbar-default" id="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="/" class="navbar-brand">HDS</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="nav navbar-item"><router-link to="/home" data-toggle="collapse" data-target=".in" class="router-link">Home</router-link></li>
            <li class="nav navbar-item"><router-link to="/about"  data-toggle="collapse" data-target=".in" class="router-link">About</router-link></li>
            <li class="nav navbar-item"><router-link to="/contact" data-toggle="collapse" data-target=".in" class="router-link">Contact</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="nav navbar-item" v-if="!auth"><router-link to="/auth/login" data-toggle="collapse" data-target=".in">Login</router-link></li>
            <li class="dropdown" v-else>
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{ me() }} <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><router-link to="/user/dashboard" data-toggle="collapse" data-target=".in">Dashboard</router-link></li>
                <li><router-link to="/user/settings" data-toggle="collapse" data-target=".in">Settings</router-link></li>
                <li role="separator" class="divider"></li>
                <li><router-link to="/auth/logout" data-toggle="collapse" data-target=".in">Logout</router-link></li>                
              </ul>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div><!--/.container-fluid -->
    </nav>
</template>

<script>
export default {
  name : 'Navbar',
  props: ['auth'],
  methods : {
    me() {
      var token = localStorage.getItem('tok');      
      var infos = this.extract(token);
      var user = JSON.parse(window.atob(infos));
      return user.usr;
    },
    extract(token) {
      return token.split('.')[1];
    }
  },
}
</script>
<style lang="scss" scoped>
#app {
    #navigation{
        box-shadow: 0 2px 4px rgba(0,0,0,.175);
        margin-bottom: 0;
        height: 52px;
        .container-fluid{
            padding-left: 0px;
            padding-right: 0px;
            .navbar-header{
                padding-left: 10px;
            }
            #navbar{
                background: #f4f4f4;
                box-shadow: 0 2px 4px rgba(0,0,0,.175);
                .nav-bar{
                      margin: 0;
                      .navbar-item{
                          transition: all .3s ease-in-out;
                          .router-link {
                            &:hover{
                              border: none;
                            }
                          }
                      }
                }
            }
        }
    }
}
</style>


