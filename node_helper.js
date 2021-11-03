/* Magic Mirror
 * Module: MMM-Binance
 *
 * By Thomas Samai
 *
 */
const NodeHelper = require('node_helper');
const request = require('request');
const CryptoJS = require("crypto-js");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url


module.exports = NodeHelper.create({

    start: function() {
        console.log("Starting node_helper for: " + this.name);
        const burl = 'https://api.binance.com';
        const endPoint = '/api/v3/account';
        var QueryString = 'recvWindow=20000&timestamp=' + Date.now();
    
        var keys = {
            'PUBLICKEY' : config.API_TOKEN,
            'SECRETKEY' : config.API_TOKEN
        }
        var signature = CryptoJS.HmacSHA256(QueryString ,keys['SECRETKEY']).toString(CryptoJS.enc.Hex);        
        url = burl + endPoint + '?' + QueryString + '&signature=' + signature;
    },

    getData: function(url) {
        var ourRequest = new XMLHttpRequest();

        ourRequest.open('GET', url, true);
        ourRequest.setRequestHeader('X-MBX-APIKEY',keys['PUBLICKEY']);
        
        ourRequest.onload = function(){
            result = JSON.parse(ourRequest.responseText);
            this.sendSocketNotification('DATA_RESULT', result);
            console.log(ourData);
        }
        ourRequest.send();        
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === 'GET_DATA') {
            this.getData(payload);
        }
    }
});
