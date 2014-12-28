var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var Datastore = require('nedb');
var crypto = require('crypto');



/********************************************
 * Setup Items
 ********************************************/
app.use(session({secret: 'Thisischangedontheserver'}));

app.use(bodyParser.urlencoded({
  extended: true
}));

var db = {};
db.ads = new Datastore({ filename: 'data/ads.db', autoload: true });
db.users = new Datastore({ filename: 'data/users.db', autoload: true });

var staticMiddleware = express.static(__dirname+'/public');
//app.use
 /********************************************************
  * FUNCTIONS
  ********************************************************/

//This is syroncus I know I shall fix it
function encryptPassword(password){
   var cipher = crypto.createCipher('aes-256-cbc', 'salt');
   cipher.update(password, 'utf8', 'base64');
   return cipher.final('base64');
}

function ensureAuthenticated(req, res, next) {
    if (req.session.user_id) { return next(); }
    res.redirect('/login')
}


app.post('/save_ad', ensureAuthenticated, function(req, res){
    var data = req.body; 
   
	db.ads.find({id : data.id},function(err,docs){
	    //It is new and thus needs to be inserted

	    if(docs.length < 1){
	        db.ads.insert(data, function(err,newDoc){
	            res.contentType('json');
	            res.send({"status":"new","id":newDoc.id});
	        });
	    } else {
	    
	        db.ads.update({id:data.id}, req.body,{}, function(err){
	            res.contentType('json');
	            res.send({"status":"updated"});
	        });
	        
	    }
	})
});

app.get('/get_ads', ensureAuthenticated, function(req, res){
    db.ads.find({}, function(err,docs){
       res.contentType('json');
       res.send(docs); 
    });
});

var sampleUser = {
  username : 'admin',
  password : 'admin1234',
  enabled : 'true',
  level : 0
}

db.users.find({username :'admin'}, function(err,docs){
	if(docs.length < 1){
	  var ePassword = encryptPassword(sampleUser.password);
    sampleUser.password = ePassword;
		db.users.insert(sampleUser, function (err, newDoc){
			console.log('Created Sample User');
		});
	}
});


/*********************************************************
 * LOGIN Scripts
 *********************************************************/
//TODO need a create user
app.post('/login', function (req, res) {
  var post = req.body;
   db.users.find({username : post.username}, function(err,docs){
		//user has been found
		if(docs.length > 0){
			var ePassword = encryptPassword(post.password);
			if(ePassword === docs[0].password){
				req.session.user_id = docs[0]._id;
				req.session.username = docs[0].username;
				req.session.user_level = docs[0].level;
				res.redirect('/');
			} else {
				res.redirect('/login');
			}
		} else {
			res.redirect('/login');
		}
	});
});

app.get('/login', function(req,res){
	res.sendFile(__dirname + '/public/login.html');
});

/*****************************************************
 * User Creation Scripts
 * **************************************************/
app.post('/add_user', function(req,res){
	var post = req.body;
	db.users.find({username : post.username}, function(err,docs){
		if(docs.length > 0){
			res.send('Already a user with that name');
		} else {
			//TODO make some password requirement here
			var enabled = true;
			if(!post.enabled){
				enabled = false;
			};
			var user = {
				username : post.username,
				password :  encryptPassword(post.password),
				level : post.level,
				enabled : enabled
			};
			db.users.insert(user, function (err, newDoc){
				res.send('Created New User : '+newDoc.username)
			});
		}
		console.log(post);
	});
});

app.get('/add_user', function(req,res){
	if(req.session.user_level < 1){
		res.sendFile(__dirname + '/public/add_user.html');
	} else {
		res.redirect('/');
	}
});


/***********************
 * Static files
 *****************************/
app.use('/',ensureAuthenticated, function(req,res,next){
   staticMiddleware(req, res, next);
});

//Remove for production
app.use('/node_modules',express.static(__dirname + "/node_modules"));

app.listen(3031);
