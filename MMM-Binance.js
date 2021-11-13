Module.register("MMM-Binance", {
    defaults: {
		updateInterval: 6000,
		retryDelay: 5000,
		wallet: []
	},

	requiresVersion: "2.1.0", // Required version of MagicMirror

	start: function() {
		var self = this;
		//Flag check if module is loaded
		this.loaded = false;
		this.processData("");
		setInterval(function() {
			self.updateDom(); // no speed defined, so it updates instantly.
		}, 1000); //perform every 1000 milliseconds.
	},

    getDom: function() {
		var self = this;
		self.processData;

		// create element wrapper for show into the module
		var wrapper = document.createElement("div");

		//header
		var header = document.createElement("header");
		header.classList.add("xsmall", "bright", "light", "header");
		header.innerHTML = ("Binance Spot-Wallet")
		wrapper.appendChild(header);

		//Table
		var tablewrapper = document.createElement("table");

		for (const [key , value] of Object.entries(this.dataNotification)){
			if (Object.values(value)[0] > 0){
				var coinrow = document.createElement("tr");
				coinrow.className = "tablerow";

				var coinsymbol = document.createElement("td");
				coinsymbol.colSpan = "3";
				coinsymbol.innerHTML = key;
				coinsymbol.className = "asset";
				
				var coinamount = document.createElement("td");
				coinamount.colSpan = "3";
				coinamount.innerHTML = Object.values(value)[0];
				coinamount.className = "symbol";

				coinrow.appendChild(coinsymbol);
				coinrow.appendChild(coinamount);
				tablewrapper.appendChild(coinrow);
			}
		}
		wrapper.appendChild(tablewrapper);
		return wrapper;
	},

	getStyles: function () {
		return ["MMM-Binance.css"];
	},

	processData: function() {
		var self = this;
		if (this.loaded === false) { self.updateDom(self.config.animationSpeed) ; }
		this.loaded = true;
		this.sendSocketNotification("open-socket", "open-socket");
	},

    notificationReceived: function() {},
    socketNotificationReceived: function (notification, payload) {
		if(notification === "balance-payload") {
			 this.dataNotification = payload;
			this.updateDom(2000);
		}
	},

 })