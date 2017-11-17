var AuthPlugin = {
    setToken: function(tok, iat, exp) {
        localStorage.setItem('tok', tok);
        localStorage.setItem('iat', iat);
        localStorage.setItem('eat', exp);
    },
    destroyToken: function() {
        localStorage.removeItem('tok');
        localStorage.removeItem('iat');
        localStorage.removeItem('eat');
    },
    getToken: function() {
        var tok = localStorage.getItem('tok');
        var iat = localStorage.getItem('iat');
        var eat = localStorage.getItem('eat');

        if (!tok || !iat || !eat) {
            return null;
        }

        if (Date.now() > parseInt(eat)) {
            this.destroyToken();
            return null;
        } else {
            return tok;
        }
    },
    loggedIn: function() {
        if (this.getToken()) {
            return true;
        } else {
            return false;
        }
    },
    logout: function() {
        this.destroyToken();
        return true;
    }
};

export default function(Vue) {
    Vue.auth = AuthPlugin;
    Object.defineProperties(Vue.prototype, {
        $auth: {
            get: function() {
                return Vue.auth;
            }
        }
    });
}