#This application consumes the node js api inside UI5 app
Step1: Create NodeJS module. Add dependencies in package.json. 
	   Create xs-security.json file if not created automatically for MTA project. This provides basic scope "uaa.user".
	   Test the service using /users as GET call. 
	   Example: https://jh81mhraculduvviionfromui5-nodejs.cfapps.eu10.hana.ondemand.com/users
Step2: Create HTML5 module "app". Select "SAP UI5 Application" template.
	   This creates a destination "dest_calldestinationfromUI5" automatically of type "org.cloudfoundry.managed-service" 
	   and service-plan "lite".
	   This also creates a xsuaa "uaa_calldestinationfromUI5" automatically of type "org.cloudfoundry.managed-service"
	   with keys--> path: ./xs-security.json , service-plan: application, service: xsuaa
Step3: Make sure the "dest_calldestinationfromUI5 (resource)" is added to mta.yaml file for "app" module.
Step4: Add nodeJS to app in the "Requires" section.
	   Select "nodejs_api (provider)" and specify Group "destinations" and add the corresponding properties.
Step5: Inside "app" open xs-app.json file. Add the below section in Routers section:
	   {
    	"source": "^/getUsers",
    	"target": "/users",
    	"destination": "nodejs_api",
    	"authenticationType": "none"
        }
        
        Nothing to do in the neo-app.json, manifest.json files. Leave it as it is. 
        Make sure the dependency "@sap/approuter" is added in package.json.
Step6: Inside View1 controller add the ajax call to node js api:
			jQuery.ajax({
					url: "/getUsers", 
					type: "GET",
					dataType: "json",
					success: function(result) {
						console.log("Inside success "+result);
					},
					error: function(e) {
						// log error in browser
						console.log(e.message);
					}
				});

Testing: The ajax call fails (Error 404) if we execute in the webide Run as Web application. We need to deploy the mta
		 to cloud foundry. and run the deployed application. The ajax call is successful.
		 
		 GET: https://jh81mhraculduvviionfromui5-nodejs.cfapps.eu10.hana.ondemand.com/users
		 POST: https://jh81mhraculduvviionfromui5-nodejs.cfapps.eu10.hana.ondemand.com/users
			   Payload:
			{
				"first name": "Mahesh",
				"last name ": "Telangh"
			}
		 
		 
				
	   
	   