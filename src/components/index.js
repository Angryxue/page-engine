import Vue from 'vue'

const requireAll = context => context.keys().map(context);

const component = require.context('./', false, /\.vue$/);

requireAll(component).forEach(item => {
    Vue.component(item.default.name, item.default);
})