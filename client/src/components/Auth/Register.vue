<template>
    <div class="panel panel-info" id="register-panel" >
        <div class="panel-body" >
            <div style="display:none" id="register-alert" class="alert alert-danger col-sm-12"></div>
            <form id="registerform" class="form-horizontal" role="form">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                    <input type="text" class="form-control" v-model="user.email" name="email" placeholder="Email Address">
                </div>
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    <input type="text" class="form-control" v-model="user.firstname" name="firstname" placeholder="First Name">
                </div>
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    <input type="text" class="form-control" v-model="user.lastname" name="lastname" placeholder="Last Name">
                </div>
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                    <input type="text" class="form-control" v-model="user.username" name="username" placeholder="Username">
                </div>
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                    <input type="password" class="form-control" v-model="user.password" name="password" placeholder="Password">
                </div>
                <div class="form-group">
                    <!-- Button -->
                    <div class="col-sm-12 controls">
                        <a id="btn-register" @click="register" class="col-xs-12 btn btn-success">Register</a>
                    </div>
                </div>
                
                <div class="form-group">
                    <div class="col-md-12 control">
                        <div id="form-link">
                            <p>Vous avez deja un compte ? <router-link to="/auth/login">connectez-vous ici!</router-link></p>
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
    name:'register',
    data(){
        return {
            user :{
                firstname : '',
                lastname : '',
                username : '',
                email : '',
                password:''
            }
        }
    },
    methods: {
        register: function() {
                this.$http.post('/auth/register', this.user)
                .then(function (response) {
                    console.log(response);
                    this.$router.push('/auth/login');
                }).catch(function(res){
                    this.errors = res.data.error;
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
    #register-panel{
        .panel-body{
            #registerform{
                .input-group{
                    margin-bottom: 25px;
                }
                #form-btn{
                    margin-top:10px;
                }
                #form-link{
                    border-top: 1px solid#888;
                    padding-top:15px;
                    //font-size:85%;
                }
            }
        }
    }
}
</style>
