import Vue from 'vue';
import {load, Map, Marker} from 'vue-google-maps';

export default Vue.extend(Map, {
    data() {
        return {
            center:{lat: 1.38, lng: 103.8},
            zoom:"12"
        }
    },
    created: function() {
        console.log('pirate map')
    }

})