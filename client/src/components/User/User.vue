<template>
    <div class="content" id="user">
        <h3>User</h3>
        <div class="col-xs-12 col-md-4" id="content">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name : 'user-home',
    mounted(){
        this.$auth.loggedIn();
    }
}
</script>

<style lang="scss" scoped>
    #app{
        .page-container{
            #user{
                
            }
        }
    }
</style>
