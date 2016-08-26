import Vue from 'vue';
import store from './vuex/store';
import {calculateDistance} from './vuex/actions.js'

import {load, Map, Marker} from 'vue-google-maps';

import Coin from './objects/coin.js';
import coinLocationSeeds from './objects/coinLocationSeeds.js';

import {map as PirateMap, GroundOverlay} from './components/pirate-map';
import StatusBar from './components/status-bar';
import GameEnd from './components/game-end';


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
                  {lat: 52.37275, lng: 5.635222}, // 1
                  {lat: 52.37257, lng: 5.63536},  // 2
                  {lat: 52.37250, lng: 5.63515},  // 3
                  {lat: 52.37259, lng: 5.63472},  // 4
                  {lat: 52.37204726781994, lng: 5.6342494454384},   // 5
                  {lat: 52.37185239615258, lng: 5.633969330024684},   // 6
                  {lat: 52.372142468810594, lng: 5.633514081020394},   // 7
                  {lat: 52.37209334168643, lng: 5.632847552080193}, // 8
                  {lat: 52.3720, lng: 5.63327},   // 9
                  {lat: 52.371891919906105, lng: 5.633471165676156},   // 10
                  {lat: 52.37166395389991, lng: 5.633515688152329}, // 11
                  {lat: 52.371571430101575, lng: 5.633197846384064}, // 12
                  {lat: 52.37174501441349, lng: 5.633217962951676} // 13
              ],
              orangeTipis: [
                  {lat: 52.37222030162571, lng: 5.633742338623051}
              ],
              largeTipis: [
                  {lat: 52.37254917922258, lng: 5.633796682208981},
                  {lat: 52.37199515366008, lng: 5.63406490311047}
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
                _.sample(coinLocationSeeds, 10).forEach((data) => {
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
            GameEnd,
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
                        dispatch('GAMESTOP', this.$refs.statusbar.$refs.timer.timeValue);
                    }
                }
            }
        }
    }
);