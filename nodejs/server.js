'use strict';
var express = require('express');
var cfenv = require("cfenv");

var route = require('./routes/route');
const users = require('./users.json');
const bodyParser = require('body-parser'); //For POST call fetches body contents

let app = express();
app.use(bodyParser.json());

// passport.use(new JWTStrategy(xsenv.getServices({uaa:{tag:'xsuaa'}}).uaa));
// app.use(passport.initialize());
// app.use(passport.authenticate('JWT', { session: false }));
//app.use('/', route);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/users',function(req, res){
  res.status(200).json(users); 
});

app.post('/users', function (req, res) {
  /*const isAuthorized = req.authInfo.checkScope('$XSAPPNAME.Update');
  if (!isAuthorized) {
    res.status(403).json('Forbidden');
    return;
  }*/

  var newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);

  res.status(201).json(newUser);
});

	app.get("/whoAmI", (req, res) => {
		let userContext = req.authInfo;
		let result = JSON.stringify({
			userContext: userContext
		});
		return res.type("application/json").status(200).send(result);
	});

let appEnv   = cfenv.getAppEnv();
app.listen(appEnv.port, function() {
    console.log("server starting on " + appEnv.url);
})
