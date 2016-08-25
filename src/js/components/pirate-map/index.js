import Vue from 'vue';
import {load, Map, MapComponent, Marker} from 'vue-google-maps';

export const map = Vue.extend(Map, {});

export const GroundOverlay = Vue.component('ground-overlay', MapComponent.extend({
    template: '',
    props: ['source', 'bounds', 'opacity'],
    deferredReady: function() {
        console.log(this.source);
        console.log(this.bounds);
        this.$overlay = new google.maps.GroundOverlay(
            this.source,
            this.bounds
        );
        this.$overlay.setOpacity(this.opacity);
        this.$overlay.setMap(this.$map);
    },
    destroyed: function() {
        this.$overlay.setMap(null);
    },
}));