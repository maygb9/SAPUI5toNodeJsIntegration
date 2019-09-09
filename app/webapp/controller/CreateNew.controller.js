sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("app.app.controller.CreateNew", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf app.app.view.CreateNew
		 */
		onInit: function () {

		},
		 
		_onCreatePress: function (evt) {
			var model = this.getView().getModel("CreateModel");
			var arrData = model.getData();
			var mydata = {};
			mydata.id = "5";
			mydata.firstname = "Mahesh1";
			mydata.lastname = "Telangh1";
			mydata = JSON.stringify(mydata);
			jQuery.ajax({
				url: "/users",
				type: "POST",
				data: mydata,
				contentType: "application/json", //Important to specify content type
				success: function (result) {
					console.log("success " + JSON.stringify(result));
				},
				error: function (e) {
					// log error in browser
					console.log(e.message);
				}
			});
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteView1");
		},
		onBackPress: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteView1");
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf app.app.view.CreateNew
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf app.app.view.CreateNew
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf app.app.view.CreateNew
		 */
		//	onExit: function() {
		//
		//	}

	});

});