import Vue from 'vue';
import store from './vuex/store';

import {load, Marker} from 'vue-google-maps';

import Coin from './objects/coin.js';

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
        created() {
            this._setCurrentLocation();
            this._distributeCoins();
        },
        methods: {
            _setCurrentLocation() {
                let self = this;
                navigator.geolocation.watchPosition(function (geoPosition) {
                    store.dispatch('SETCURRENTPOSITION', geoPosition);
                    self._checkNearBy(geoPosition);
                }, function () {

                }, {
                    enableHighAccuracy: true
                });
            },
            _distributeCoins() {
                [
                    [52.371835, 5.632959],
                    [52.371762, 5.634245],
                    [52.372219, 5.634683],
                    [52.372586, 5.634458],
                    [52.372219, 5.635045],
                    [52.372992, 5.635206],
                    [52.372461, 5.634809],
                    [52.372199, 5.635227],
                    [52.372926, 5.635324],
                    [52.371662, 5.634895]
                ].forEach((data) => {
                    store.dispatch('ADDCOIN', new Coin(data[0], data[1]));
                })
            },
            _checkNearBy(geoPosition) {
                console.log('_checkNearBy is triggered');
                var userLat = geoPosition.coords.latitude;
                var userLong = geoPosition.coords.longitude;

                var coins = this.coins;

                coins.forEach((function(value, index) {
                    console.log(value);
                }));

                coins.filter();
                // todo: implement filter with distance function
//                 function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
//
//  var R = 6371; // Radius of the earth in km
//  var dLat = deg2rad(lat2-lat1);  // deg2rad below
//  var dLon = deg2rad(lon2-lon1);
//  var a =
//    Math.sin(dLat/2) * Math.sin(dLat/2) +
//    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
//    Math.sin(dLon/2) * Math.sin(dLon/2)
//    ;
//  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
//  var d = R * c; // Distance in km
//  return d;
// }
//
// function deg2rad(deg) {
//  return deg * (Math.PI/180)
// }

            }
        },
        components: {
            StatusBar,
            PirateMap,
            Marker
        },
        vuex: {
            getters: {
                user: function (state) {
                    return state.user
                },
                coins: function (state) {
                    return state.coins
                }
            }
        }
    }
);