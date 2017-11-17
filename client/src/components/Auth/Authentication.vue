<template>
    <div class="content" id="auth">
        <div class="col-xs-12 col-md-4">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Authentication',
    mounted(){
        this.$auth.loggedIn();
    }
}
</script>

<style lang="scss" scoped>
    #app{
        #auth {
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
        }
    }
</style>

