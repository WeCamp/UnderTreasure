import Vue from 'vue';
import store from './vuex/store';
import {calculateDistance} from './vuex/actions.js'

import {load, Map, Marker} from 'vue-google-maps';

import Coin from './objects/coin.js';

import {map as PirateMap, GroundOverlay} from './components/pirate-map';
import StatusBar from './components/status-bar';


require("../less/index.less");

load({
    key: 'AIzaSyCN0ZimaGFwUTzz9GYQCEI2oVF85KQuQf0',
    v: '3.24',                // Google Maps API version
    // libraries: 'places',   // If you want to use places input
});

var vm = new Vue({
        el: 'body',
        store,
        data() {
          return {
              whiteTipis: [
                  {lat: 52.372057, lng: 5.633175}, //
                  {lat: 52.372827, lng: 5.635914}, //
                  {lat: 52.372679, lng: 5.635952}, //
                  {lat: 52.372717, lng: 5.636048}, //
                  {lat: 52.372827, lng: 5.635914}, //
                  {lat: 52.372176, lng: 5.634565}, //
                  {lat: 52.371923, lng: 5.634057}, //
                  {lat: 52.372119, lng: 5.633643}, //
                  {lat: 52.372024, lng: 5.633016}, //
                  {lat: 52.371920, lng: 5.633212}, //
                  {lat: 52.371838, lng: 5.633232}, //
                  {lat: 52.371776, lng: 5.633310}, //
              ],
              orangeTipis: [
                  {lat: 52.372181, lng: 5.633914}
              ],
              largeTipis: [
                  {lat: 52.372428, lng: 5.633794}
              ]
          };

        },
        created() {
            this._applyMapOverlay();
            this._distributeCoins();
            this.updatePosition(
                this._checkNearBy.bind()
            );
            store.dispatch('GAMESTART');
        },
        methods: {
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
                    let coin = new Coin(data[0], data[1]);
                    store.dispatch('ADDCOIN', coin);
                })
            },
            _checkNearBy(geoPosition, grabCoin) {
                let userLat = geoPosition.coords.latitude;
                let userLong = geoPosition.coords.longitude;

                let coins = _.filter(this.coins, function(coin) {
                    let distanceToCoin = calculateDistance(
                        userLat,
                        userLong,
                        coin.position.lat,
                        coin.position.lng
                    );
                    return distanceToCoin < 13;
                });
                coins.forEach((coin) => {
                    this.grabCoin(coin);
                });
            },
            
            _applyMapOverlay: function() {

            }
        },
        components: {
            StatusBar,
            'pirate-map': Map,
            Marker,
            GroundOverlay
        },
        vuex: {
            getters: {
                user: function (state) {
                    return state.user
                },
                coins: function (state) {
                    return state.coins
                }
            },
            actions: {
                updatePosition: function ({ dispatch, state }, checkNearBy) {
                    navigator.geolocation.watchPosition(function (geoPosition) {
                        dispatch('SETCURRENTPOSITION', geoPosition);
                        checkNearBy(geoPosition);

                    }, function () {

                    }, {
                        enableHighAccuracy: true
                    });
                },
                grabCoin: function({ dispatch, state }, coin) {
                    dispatch('GRABCOIN', coin);
                    if (state.coins.length == 0) {
                        dispatch('GAMESTOP');
                    }
                }
            }
        }
    }
);