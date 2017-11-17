// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';
import jQuery from 'jquery';
import localstorage from 'vue-localstorage';
import Auth from './plugins/Auth';
//import VueHead from 'vue-head';
//import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(Auth);

//alertify.defaults.notifier.position = 'top-right';

Vue.http.interceptors.push(function(request, next) {

    if (request.url[0] === '/') {
        request.url = process.env.API + request.url;
        var token = Vue.auth.getToken();

        if (token) {
            request.headers.set('Authorization', 'Bearer ' + token);
        }
    }

    next(function(res) {
        if (res.status === 422) {
            res.body.errors.forEach(function(error) {
                alertify.error(error);
            });
        }
    });
});

router.beforeEach(function(to, from, next) {
    if (to.matched.some(function(record) { return record.meta.requiresGuest; }) && Vue.auth.loggedIn()) {
        next({
            path: '/user/dashboard',
        });
    } else if (to.matched.some(function(record) { return record.meta.requireAuthenticated; }) && !Vue.auth.loggedIn()) {
        next({
            path: '/auth/login'
        });
    } else {
        next();
    }
});

window.jQuery = window.$ = jQuery;
require('bootstrap-sass');
//require('toastr');

//Vue.use(VueHead);
//Vue.use(Vuex);
//Vue.use(VueResource);
//Vue.use(VueAxios, axios)
Vue.use(localstorage, {
    name: 'vls'
});

/*
Vue.use(VueAnalytics, {
    id: 'UA-85299907-1',
    router
});
*/

Vue.config.productionTip = false

const URL = window.location.protocol + '//' + window.location.host;

//Facebook SDK
/*
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.9&appId=517625681749981";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
*/

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})