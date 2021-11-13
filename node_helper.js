/* Magic Mirror
 * Node Helper: MMM-Binance
 *
 * By: Thomas Samai
 *
 */
var NodeHelper = require("node_helper");

const Binance = require('node-binance-api');
const binance = new Binance().options({
APIKEY: config.API_TOKEN,
APISECRET: config.SECRET_API_KEY
});

module.exports = NodeHelper.create({

    start: function() {
        console.log("Starting node_helper for: " + this.name);
        var self = this;
		this.getData();
    },

    getData: function() {
        var self = this
		let myPromise = new Promise(function(myResolve, myReject) {
            binance.balance(function(error, balances) {
                myResolve(balances);
            });
        });
			myPromise.then(
                function(value) {
                    balanceData = value;
                },
                function(error) {myReject(error)}       
                )
            },

    socketNotificationReceived: function(notification, payload) {
        if (notification === 'open-socket') {
            this.sendSocketNotification("balance-payload", balanceData)
        }
    }
});
