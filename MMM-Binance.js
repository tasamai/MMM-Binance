Module.register("mmm-test", {
    defaults: {},
    start: function () {},
    getDom: function() {},
    notificationReceived: function() {},
    socketNotificationReceived: function() {},

	start: function (){
		this.count = 0
		var timer = setInterval(()=>{
		  this.updateDom()
		  count++
		}, 1000)
	  },

    getDom: function() {
        var element = document.createElement("div")
        element.className = "myContent"
        element.innerHTML = "Hello, Tom!"
		var subElement = document.createElement("p")
 		subElement.innerHTML = "Count:" + this.count
		subElement.id = "COUNT"
		element.appendChild(subElement)
		return element
      },

 })