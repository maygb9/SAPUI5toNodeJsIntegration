sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("app.app.controller.View1", {
		onInit: function () {
			//Called when ever the page is called; Even when routing from page2 to page1
			this.loaddata();
		},
		
		loaddata: function (){
			var oModel = new sap.ui.model.json.JSONModel();
			var data = '';
			jQuery.ajax({
				url: "/users",
				type: "GET",
				dataType: "json",
				success: function (result) {
					data = result;
					oModel.setData({
						arrayName: data
					});
					console.log("success " + JSON.stringify(result));
				},
				error: function (e) {
					// log error in browser
					console.log(e.message);
				}
			});
			this.getView().setModel(oModel, "CreateModel");
		},
		
		onGeneratePress: function () {
			
			/*this.mBindingOptions = {};
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("TargetView1").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
*/
				/*this.oModel = this.getOwnerComponent().getModel();
				this._isError = false;*/
			
			/*this.oRouter.getTarget("CreateTimeEntry").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
			this.oModel = this.getOwnerComponent().getModel();*/
			var data = '';
			/*
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData({
				arrayName: []
			});*/

/*			jQuery.ajax({
				url: "/users",
				type: "GET",
				dataType: "json",
				success: function (result) {
					data = result;
					oModel.setData({
						arrayName: data
					});
					console.log("success " + JSON.stringify(result));
				},
				error: function (e) {
					// log error in browser
					console.log(e.message);
				}
			});
			this.getView().setModel(oModel, "CreateModel");*/

			// Manually setting data to Table
			
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData({
				arrayName: []
			});
			this.getView().setModel(oModel, "CreateModel");
			
			
			var model = this.getView().getModel("CreateModel");
			var arrData = model.getData();
			var mydata = {};
			mydata.id = "1";
			mydata.firstname = "Mahesh";
			mydata.lastname = "Telangh";

			arrData.arrayName.push(mydata);
			mydata = {};
			mydata.id = "2";
			mydata.firstname = "Mayur";
			mydata.lastname = "Bulbule";
			arrData.arrayName.push(mydata);

			model.setData({
				arrayName: arrData.arrayName
			});
			this.getView().setModel(model, "CreateModel");

			/* The bindRows only works for ui table and not m table
			var attModel = new sap.ui.model.json.JSONModel()
			attModel.setData(data);
			this.getView().setModel(attModel);
			this.getView().byId("attachmentsTable").bindRows("/");*/

			
		},
		
		

		onSubmitPress: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("CreateNew");
			/*
			var oBindingContext = oEvent.getSource().getBindingContext();
			var sViewName = "";
			sViewName = "CreateNew";*/
			

			/*return new Promise(function (fnResolve) {
				this.doNavigate(sViewName, oBindingContext, fnResolve, "");
			}.bind(this)).catch(function (err) {
				if (err !== undefined) {
					MessageBox.error(err.message);
				}
			});*/
		}

	});
});