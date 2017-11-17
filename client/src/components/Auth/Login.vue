<template>
    <div class="panel panel-info" id="login-panel">
        <div class="panel-body" >
            <transition name="fade"></transition>
            <div v-show="errors" id="login-alert" class="alert alert-danger col-sm-12">
                <span v-for="(error,index) in errors" :key=[index]>
                    {{ error.properties.path}} : {{ error.properties.type }}
                </span>
            </div>
            <form id="loginform" class="form-horizontal" role="form">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    <input id="login-username" v-model="user.username" type="text" class="form-control" name="username" placeholder="Username">                                        
                </div>
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                    <input id="login-password" v-model="user.password" type="password" class="form-control" name="password" placeholder="Password">
                </div>
                <div class="form-group" id="form-btn">
                    <!-- Button -->
                    <div class="col-sm-12 controls">
                        <a id="btn-login" @click="login" class="col-xs-12 btn btn-success">Login</a>
                    </div>
                </div> 
                
                <div class="form-group">
                    <div class="col-md-12 control">
                        <div id="form-link pull-left">
                            <p>Vous n'avez pas de compte ? <router-link to="/auth/register">Enregistrez vous ici!</router-link></p>
                            <p><router-link to="/auth/forgot" class="col-xs-12 pull-left">Mot de passe oublié?</router-link></p>
                        </div>
                    </div>
                </div>   
            </form>
        </div>                     
    </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return {
            errors : null,
            user : {
                username : '',
                password : ''
            }
            
        }
    },
    methods: {
        login: function() {
                this.$http.post('/auth/login', this.user)
                .then(function (res) {
                    if ( res.data.suc ) {
                        var ans = res.body;
                        var elems = JSON.parse(window.atob(ans.tok.split('.')[1]));
                        var eat = elems.exp;
                        var iat = elems.iat;
                        this.$auth.setToken(ans.tok, iat, eat);
                        this.$emit('update:auth', this.$auth.loggedIn());
                        this.$router.push('/user/dashboard');
                    } else {
                        //alert('error');
                        throw 'error';
                    }
                    
                });
        }
    },
    mounted(){
        this.$auth.loggedIn();
    }
}
</script>
<style lang="scss" scoped>
#app{
    &.page-container {
        .vue-container {
            #login-panel{
                .panel-body{
                    #loginform{
                        .input-group{
                            margin-bottom: 25px;
                        }
                        #btn-login{
                            margin-top:0px;
                        }
                    }
                    #form-link{
                        border-top: 1px solid#888;
                        padding-top:15px;
                        font-size:85%;
                        p{
                            a {
                                width : 100%;
                            }
                        }
                    }
                }
            }
        }
    } 
}
</style>

