import Vue from 'vue';
import store from './vuex/store';

import {load, Marker} from 'vue-google-maps';
import PirateMap from './components/pirate-map';
import StatusBar from './components/status-bar';

require("../less/index.less");

load({
    key: 'AIzaSyCN0ZimaGFwUTzz9GYQCEI2oVF85KQuQf0',
    v: '3.24',                // Google Maps API version
    // libraries: 'places',   // If you want to use places input
})

var vm = new Vue({
        el: 'body',
        store,
        components: {
            StatusBar,
            PirateMap
        }
    }
);