<template>
    <div class="panel panel-info" id="forgot-panel">
        <div class="panel-body" >
            <div v-show="errors" id="login-alert" class="alert alert-danger col-sm-12">
                <span v-for="(error,index) in errors" :key=[index]>
                    {{ error.properties.path}} : {{ error.properties.type }}
                </span>
            </div>
            <form id="forgotform" class="form-horizontal" role="form">
                <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                    <input id="forgot-email" v-model="email" type="text" class="form-control" name="email" placeholder="Email">                                        
                </div>
                
                <div class="form-group" id="form-btn">
                    <!-- Button -->
                    <div class="col-sm-12 controls">
                        <a id="btn-login" @click="reset" class="col-xs-12 btn btn-success">Reset</a>
                    </div>
                </div> 
                
                <div class="form-group">
                    <div class="col-md-12 control">
                        <div id="form-link">
                            <p>Vous avez deja un compte ? <router-link to="/auth/login">connectez-vous ici!</router-link></p>
                        </div>
                    </div>
                </div>   
            </form>
        </div>                     
    </div>
</template>

<script>
export default {
    name:'forgot',
    data(){
        return {
            errors : null,
            email : '',
        }
    },
    methods: {
        reset: function() {
            this.$http.post('/auth/forgot', {email : this.email})
            .then(function (res) {
                console.log(res);
            }).catch(function(error){
                console.log(error);
            });
        }
    }
}
</script>

<style lang="scss" scoped>
#app{
    &.page-container {
        .vue-container {
            #forgot-panel{
                .panel-body{
                    #forgotform{
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
                        //font-size:85%;
                    }
                }
            }
        }
    } 
}
</style>
