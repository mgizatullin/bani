require('./bootstrap');
import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.use(ElementUI);
Vue.component('booking', require('./components/booking').default);
const app = new Vue({
    el: '#app',
    data: {
        api_url:"http://bani.pandabrand.ru"
    }
});
Vue.directive('phone', {
    bind(el) {
        el.oninput = function(e) {
            if (!e.isTrusted) {
                return
            }
            if (this.value[0] === '8') {
                this.value = this.value.replace('8', '+7');
            }
            if (this.value.replace(/[^0-9]+/g, '') === '789') {
                this.value = '79';
            }
            const x = this.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            x[1] = '+7';
            this.value = !x[3] ? x[1] + ' (' + x[2] : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '')

        }

    }
})
