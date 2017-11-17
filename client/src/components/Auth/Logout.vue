<template>
  
</template>

<script>
export default {
    name : 'Logout',
    methods : {
        logout() {
            this.$auth.logout();
            this.$router.push('/');
        }
    },
    created() {
        this.logout();
    },
    mounted(){
        this.$auth.loggedIn();
    }
}
</script>

<style>
  
</style>
